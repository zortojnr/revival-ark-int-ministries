'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Layout from '@/components/layout/Layout';
import { HeartIcon, BanknotesIcon, GiftIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface DonationOption {
  id: string;
  amount: number;
  label: string;
  description: string;
  popular?: boolean;
}

const donationOptions: DonationOption[] = [
  {
    id: 'tithe',
    amount: 0,
    label: 'Tithe',
    description: 'Honor God with your tithe - 10% of your income'
  },
  {
    id: 'offering',
    amount: 20000,
    label: 'General Offering',
    description: 'Support our ministry operations and outreach programs'
  },
  {
    id: 'missions',
    amount: 40000,
    label: 'Missions Support',
    description: 'Fund evangelism and missions work',
    popular: true
  },
  {
    id: 'building',
    amount: 80000,
    label: 'Building Fund',
    description: 'Help expand our ministry facilities'
  },
  {
    id: 'youth',
    amount: 30000,
    label: 'Youth Ministry',
    description: 'Support youth programs and activities'
  },
  {
    id: 'orphans',
    amount: 60000,
    label: 'Orphan Care',
    description: 'Provide care and support for orphaned children'
  }
];

const quickAmounts = [10000, 20000, 40000, 100000, 200000, 400000];

export default function GivePage() {
  const [selectedOption, setSelectedOption] = useState<string>('offering');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isAnonymous: false
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedDonation = donationOptions.find(option => option.id === selectedOption);
  const finalAmount = selectedOption === 'tithe' || customAmount ? 
    parseFloat(customAmount) || 0 : 
    selectedDonation?.amount || 0;

  const handleQuickAmount = (amount: number) => {
    setCustomAmount(amount.toString());
    setSelectedOption('offering');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (finalAmount <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }

    if (!donorInfo.firstName || !donorInfo.email) {
      alert('Please fill in your name and email address');
      return;
    }

    setIsProcessing(true);

    try {
      // Create payment intent on your backend
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(finalAmount * 100), // Convert to cents
          currency: 'usd',
          donationType: selectedOption,
          donorInfo: donorInfo
        }),
      });

      const { clientSecret } = await response.json();

      // Redirect to Stripe Checkout or handle payment
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // For now, we'll show a success message
      // In production, you'd redirect to Stripe Checkout or use Elements
      alert(`Thank you for your ${selectedDonation?.label || 'donation'} of ₦${finalAmount.toLocaleString()}! Payment processing would be handled by Stripe.`);
      
      // Reset form
      setCustomAmount('');
      setDonorInfo({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        isAnonymous: false
      });

    } catch (error) {
      console.error('Payment error:', error);
      alert('There was an error processing your donation. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
              <HeartIcon className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="heading-primary mb-8">
            Partner With Us in Ministry
          </h1>
          <p className="text-xl-enhanced text-primary-100 max-w-3xl mx-auto">
            Your generous giving enables us to spread the Gospel, support missions, 
            and transform lives in our community and beyond.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="card-elevated p-12">
            {/* Donation Options */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-8 text-center">
                Choose Your Giving Option
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {donationOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`relative p-8 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                      selectedOption === option.id
                        ? 'border-primary-500 bg-primary-50 shadow-xl scale-105'
                        : 'border-neutral-200 hover:border-primary-300 hover:shadow-lg hover:scale-102'
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    {option.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <h3 className="font-semibold text-secondary-900 mb-3 text-lg-enhanced">
                        {option.label}
                      </h3>
                      {option.amount > 0 && (
                        <p className="text-3xl font-bold text-primary-600 mb-3">
                          ₦{option.amount.toLocaleString()}
                        </p>
                      )}
                      <p className="text-body text-secondary-600">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Amount Buttons */}
            <div className="mb-10">
              <h3 className="text-lg-enhanced font-semibold text-secondary-900 mb-6">
                Quick Amount Selection
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {quickAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleQuickAmount(amount)}
                    className="p-4 border-2 border-neutral-300 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 font-semibold text-lg hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    ₦{amount.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-10">
              <label className="block text-lg-enhanced font-semibold text-secondary-900 mb-6">
                {selectedOption === 'tithe' ? 'Enter Your Tithe Amount' : 'Custom Amount'}
              </label>
              <div className="relative">
                <BanknotesIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-secondary-400" />
                <input
                  type="number"
                  min="1"
                  step="0.01"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full pl-12 pr-4 py-5 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg-enhanced transition-all duration-300"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="mb-10">
              <h3 className="text-lg-enhanced font-semibold text-secondary-900 mb-6">
                Donor Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="First Name *"
                  value={donorInfo.firstName}
                  onChange={(e) => setDonorInfo({...donorInfo, firstName: e.target.value})}
                  required
                  className="px-4 py-4 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-body transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={donorInfo.lastName}
                  onChange={(e) => setDonorInfo({...donorInfo, lastName: e.target.value})}
                  className="px-4 py-4 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-body transition-all duration-300"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                  required
                  className="px-4 py-4 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-body transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={donorInfo.phone}
                  onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                  className="px-4 py-4 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-body transition-all duration-300"
                />
              </div>
              <label className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={donorInfo.isAnonymous}
                  onChange={(e) => setDonorInfo({...donorInfo, isAnonymous: e.target.checked})}
                  className="w-5 h-5 text-primary-600 border-2 border-neutral-300 rounded focus:ring-primary-500"
                />
                <span className="text-body text-secondary-700">Make this donation anonymous</span>
              </label>
            </div>

            {/* Donation Summary */}
            {finalAmount > 0 && (
              <div className="mb-10 p-8 card-gradient border-2 border-primary-200 shadow-xl">
                <h3 className="text-lg-enhanced font-bold text-white mb-4 drop-shadow-md">
                  Donation Summary
                </h3>
                <div className="flex justify-between items-center text-white">
                  <span className="text-body font-medium drop-shadow-sm">
                    {selectedDonation?.label || 'Custom Donation'}
                  </span>
                  <span className="text-3xl font-bold drop-shadow-md">
                    ₦{finalAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing || finalAmount <= 0}
              className="btn-primary w-full py-6 text-xl disabled:bg-neutral-400 disabled:hover:bg-neutral-400 disabled:scale-100"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <GiftIcon className="h-6 w-6" />
                  <span>Give ₦{finalAmount.toLocaleString()}</span>
                </>
              )}
            </button>

            {/* Security Notice */}
            <p className="text-center text-body text-secondary-600 mt-6">
              🔒 Your donation is secure and processed through Stripe. 
              We never store your payment information.
            </p>
          </form>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-6 text-secondary-800">
              Your Impact
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg-enhanced text-secondary-700 max-w-3xl mx-auto">
              See how your generous giving is making a difference in lives and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 card-elevated">
              <div className="icon-container-lg bg-primary-100 mx-auto">
                <HandRaisedIcon className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-xl-enhanced font-semibold text-secondary-900 mb-3">
                Souls Reached
              </h3>
              <p className="text-4xl font-bold text-primary-600 mb-4">2,500+</p>
              <p className="text-body text-secondary-600">
                Lives touched through evangelism and outreach programs
              </p>
            </div>

            <div className="text-center p-8 card-elevated">
              <div className="icon-container-lg bg-accent-100 mx-auto">
                <HeartIcon className="h-10 w-10 text-accent-600" />
              </div>
              <h3 className="text-xl-enhanced font-semibold text-secondary-900 mb-3">
                Orphans Supported
              </h3>
              <p className="text-4xl font-bold text-accent-600 mb-4">150+</p>
              <p className="text-body text-secondary-600">
                Children receiving care, education, and spiritual guidance
              </p>
            </div>

            <div className="text-center p-8 card-elevated">
              <div className="icon-container-lg bg-secondary-100 mx-auto">
                <GiftIcon className="h-10 w-10 text-secondary-600" />
              </div>
              <h3 className="text-xl-enhanced font-semibold text-secondary-900 mb-3">
                Communities Served
              </h3>
              <p className="text-4xl font-bold text-secondary-600 mb-4">25+</p>
              <p className="text-body text-secondary-600">
                Local communities impacted through various ministry programs
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}