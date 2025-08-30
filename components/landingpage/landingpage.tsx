import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, CreditCard, Zap, Code, Users, LineChart, ArrowRight, Github } from "lucide-react"
import Navbar from "./navbar"
import { PricingLayout } from "../layout/pricing"
export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="max-w-8xl px-12 py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl max-w-3xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Launch Your SaaS Faster With Our Complete Boilerplate
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Ready-to-use authentication system and Razorpay payment integration. Start building your product,
                    not your infrastructure.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/register">
                      Start Building <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="https://github.com/dhruv7tripathi/saasstarter" target="_blank">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/l.webp"
                width={550}
                height={550}
                alt="SaaS Dashboard Preview"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              {/* <RocketIllustration /> */}
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Launch Your SaaS
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our boilerplate includes all the essential components to get your SaaS up and running quickly.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex gap-4 items-start">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Robust Authentication</h3>
                    <p className="text-muted-foreground">
                      Complete authentication system with login, registration, password reset, and email verification.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <CreditCard className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Razorpay Integration</h3>
                    <p className="text-muted-foreground">
                      Seamless payment processing with Razorpay, including subscription management and invoice
                      generation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">User Management</h3>
                    <p className="text-muted-foreground">
                      Comprehensive user management with roles, permissions, and team collaboration features.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex gap-4 items-start">
                  <Code className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Clean Architecture</h3>
                    <p className="text-muted-foreground">
                      Well-structured codebase following best practices for maintainability and scalability.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <LineChart className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                    <p className="text-muted-foreground">
                      Built-in analytics to track user engagement, revenue, and other key metrics.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Zap className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Performance Optimized</h3>
                    <p className="text-muted-foreground">
                      Optimized for speed and performance to provide the best user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <PricingLayout />
        </div>

        <section id="faq" className="w-full min-h-screen py-12 md:py-24 lg:py-32">
          <div className="container space-y-2  max-w-8xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[600px] text-neutral-700 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-lg">
                  Everything you need to know about our SaaS boilerplate
                </p>
              </div>
            </div>
            <div className="mx-auto grid space-y-2 max-w-5xl gap-6 py-12 lg:gap-14">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">What technologies does the boilerplate use ?</h3>
                  <p className="text-muted-foreground">
                    Our boilerplate is built with Next.js, React, TypeScript, and Tailwind CSS for the frontend. The
                    backend uses Node.js with Express and MongoDB.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Do I need a Razorpay account ?</h3>
                  <p className="text-muted-foreground">
                    Yes, you&apos;ll need to create a Razorpay account to use the payment features. We provide detailed
                    documentation on how to set up your account and integrate it with our boilerplate.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Can I customize the authentication system ?</h3>
                  <p className="text-muted-foreground">
                    The authentication system is modular and can be easily customized to fit your specific requirements.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Is there documentation available ?</h3>
                  <p className="text-muted-foreground">
                    Yes, comprehensive documentation is included with the boilerplate, covering everything from setup to
                    advanced customization.
                  </p>
                </div>
                {/* Additional FAQs */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Does SaaS Starter support team-based features?</h3>
                  <p className="text-muted-foreground">
                    Yes, SaaS Starter includes built-in support for team management, allowing users to invite team members, assign roles, and collaborate within the application.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Can I deploy SaaS Starter to any cloud provider?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. SaaS Starter is cloud-agnostic and can be deployed to providers like Vercel, AWS, Azure, or DigitalOcean with minimal configuration.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Is there a free trial or demo available ?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can try a live demo of SaaS Starter or explore the codebase for free before making a purchase or commitment.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">How do I get support if I run into issues ?</h3>
                  <p className="text-muted-foreground">
                    We offer community support via GitHub issues and email. Premium support options are also available for enterprise customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 rounded-2xl bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Building ?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-lg">
                  Get your SaaS up and running in minutes, not months.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/register">Get Started Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
