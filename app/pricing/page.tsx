'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function PricingPage() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for your project
            </p>
          </div>
        </div>
        <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Starter</h3>
              <div className="text-4xl font-bold">₹4,999</div>
              <p className="text-sm text-muted-foreground">One-time payment</p>
              <ul className="grid gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Basic Authentication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Razorpay Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>User Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>3 months support</span>
                </li>
              </ul>
            </div>
            <Button className="mt-6" variant="outline">
              Get Started
            </Button>
          </div>

          <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm ring-2 ring-primary">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                Popular
              </div>
              <h3 className="text-xl font-bold">Pro</h3>
              <div className="text-4xl font-bold">₹9,999</div>
              <p className="text-sm text-muted-foreground">One-time payment</p>
              <ul className="grid gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Advanced Authentication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Complete Razorpay Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Team Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Analytics Dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>6 months support</span>
                </li>
              </ul>
            </div>
            <Button className="mt-6">Get Started</Button>
          </div>

          <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Enterprise</h3>
              <div className="text-4xl font-bold">₹19,999</div>
              <p className="text-sm text-muted-foreground">One-time payment</p>
              <ul className="grid gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>White-label solution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>12 months support</span>
                </li>
              </ul>
            </div>
            <Button className="mt-6" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>

  );
}
