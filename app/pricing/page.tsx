'use client';

import PricingCard from '@/components/payment/PricingCard';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0F111D] flex flex-col items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <PricingCard
          title="Plus"
          description="I just need the basics!"
          features={[
            'Ad-Free',
            'Unlimited saves',
            '80 monthly AI Credits',
          ]}
          price="2.49"
          buttonText="Subscribe now!"
        />
        <PricingCard
          title="Premium"
          description="Full access to all the premium features across all platforms with a nice chunk of AI credits."
          features={[
            'Ad-Free',
            'Unlimited saves',
            '1000 monthly AI Credits',
            'Private mode for AI Generations',
            'Big library of fonts, templates, elements, animations and more',
          ]}
          price="9.99"
          buttonText="Start Free Trial!"
          highlight
          badge="POPULAR"
        />
        <PricingCard
          title="Team"
          description="Manage your team members and collaborate. Five premium seats included."
          features={[
            'Ad-Free',
            'Unlimited saves',
            '5 Premium seats',
            '1000 monthly AI Credits/seat',
          ]}
          price="16.99"
          buttonText="Subscribe now!"
        />
      </div>
    </div>
  );
}
