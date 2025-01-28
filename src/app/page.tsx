import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black pointer-events-none" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              Build Your SaaS Faster Than Ever
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              The enterprise-ready starter kit for your next big idea. Launch your SaaS in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-700 text-purple-400 hover:bg-purple-950/50">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-purple-400" />}
            title="Lightning Fast"
            description="Built on Next.js 14 with server components and streaming for optimal performance."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-purple-400" />}
            title="Enterprise Ready"
            description="Production-grade security with Supabase Auth and robust type safety."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-purple-400" />}
            title="Multi-Tenant"
            description="Built-in multi-tenancy support with subdomain routing and isolation."
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-24 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="space-y-6">
            <BenefitItem text="Authentication and user management" />
            <BenefitItem text="Stripe subscription billing" />
            <BenefitItem text="Email templates with React Email" />
            <BenefitItem text="Modern UI with shadcn/ui components" />
            <BenefitItem text="TypeScript and ESLint configuration" />
            <BenefitItem text="Production-ready infrastructure" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers building amazing products with our starter kit.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/signup">Start Building Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-700/50 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <CheckCircle2 className="h-6 w-6 text-purple-400 flex-shrink-0" />
      <span className="text-lg text-gray-300">{text}</span>
    </div>
  );
}
