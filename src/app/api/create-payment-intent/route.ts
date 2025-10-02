import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe only if secret key is configured
const secretKey = process.env.STRIPE_SECRET_KEY;
const stripe = secretKey ? new Stripe(secretKey) : null;

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe secret key not configured' },
        { status: 500 }
      );
    }

    const { amount, currency = 'ngn', donationType, donorInfo } = await request.json();

    // Validate the amount (minimum ₦500 for Nigerian Naira)
    if (!amount || amount < 500) {
      return NextResponse.json(
        { error: 'Amount must be at least ₦500' },
        { status: 400 }
      );
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Amount in kobo (smallest unit for NGN)
      currency: currency,
      metadata: {
        donationType: donationType || 'general',
        donorName: `${donorInfo?.firstName || ''} ${donorInfo?.lastName || ''}`.trim(),
        donorEmail: donorInfo?.email || '',
        donorPhone: donorInfo?.phone || '',
        isAnonymous: donorInfo?.isAnonymous ? 'true' : 'false',
      },
      description: `Revival Ark Ministry - ${donationType || 'General'} Donation`,
      receipt_email: donorInfo?.email || undefined,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });

  } catch (error) {
    console.error('Error creating payment intent:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to create payment intent',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}