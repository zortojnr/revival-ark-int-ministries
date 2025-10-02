import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source, timestamp } = body;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Save the email to your database
    // 2. Send a confirmation email
    // 3. Add to your email marketing service (Mailchimp, ConvertKit, etc.)
    // 4. Log the subscription event

    // Get client IP from headers
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';

    console.log('Newsletter subscription:', {
      email: email.trim().toLowerCase(),
      source: source || 'unknown',
      timestamp: timestamp || new Date().toISOString(),
      ip: clientIP,
      userAgent: request.headers.get('user-agent') || 'unknown'
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Example integration with email service (commented out)
    /*
    // Mailchimp example
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

    if (MAILCHIMP_API_KEY && MAILCHIMP_AUDIENCE_ID) {
      const mailchimpResponse = await fetch(
        `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email_address: email.trim().toLowerCase(),
            status: 'subscribed',
            merge_fields: {
              SOURCE: source,
            },
            tags: ['website_signup']
          }),
        }
      );

      if (!mailchimpResponse.ok) {
        const error = await mailchimpResponse.json();
        console.error('Mailchimp error:', error);
        
        // Don't fail the request if it's a duplicate email
        if (error.title !== 'Member Exists') {
          throw new Error('Failed to subscribe to newsletter');
        }
      }
    }
    */

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to newsletter',
        email: email.trim().toLowerCase()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}