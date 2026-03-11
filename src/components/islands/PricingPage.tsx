import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Sparkles, Star, Zap, Shield, HelpCircle, AlertTriangle, Lock, Users, Clock } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const prices = {
    plus: { monthly: 49, yearly: 39 },
    pro: { monthly: 129, yearly: 103 },
    enterprise: { monthly: 299, yearly: 239 }
  };

  const getPrice = (plan: 'plus' | 'pro' | 'enterprise') => {
    return isYearly ? prices[plan].yearly : prices[plan].monthly;
  };

  const getYearlySavings = (plan: 'plus' | 'pro' | 'enterprise') => {
    return (prices[plan].monthly - prices[plan].yearly) * 12;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight px-4">
            Hiring software that grows with you — <span className="text-emerald-500">not your budget</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-4 px-4">
            Start free. Upgrade only when Jatura becomes essential.
          </p>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-500 max-w-2xl mx-auto mb-8 px-4">
            No credit card. No contracts. Cancel anytime.
          </p>

          <Badge
            variant="secondary"
            className="mb-8 px-5 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
          >
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Try every paid feature free for 14 days
          </Badge>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={`text-sm font-medium ${isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-emerald-600 text-white border-0 text-xs">
                Save 20%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Launch Plan - Free */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🚀</span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Launch</h3>
                </div>
                <p className="text-xs text-emerald-600 dark:text-emerald-500 font-medium mb-3">Free forever</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">$0</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Perfect for solo founders making their first hire.</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 italic">Why NOT try this?</p>
              </div>

              <a href="https://app.jatura.com/signup">
                <Button className="w-full mb-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100">
                  Get started free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <div className="space-y-3 text-sm flex-grow">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">1 active job posting</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">Unlimited candidates</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">Visual drag-and-drop pipeline</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">Branded career page</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">Instant email alerts</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">100 AI resume scans/month</span>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 mt-2">
                  <Lock className="w-4 h-4 text-slate-400 dark:text-slate-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 dark:text-slate-600 text-xs">Unlock automations in Plus</span>
                </div>
              </div>

              <p className="mt-6 text-xs text-slate-500 dark:text-slate-500 text-center border-t border-slate-200 dark:border-slate-800 pt-4">
                No credit card required
              </p>
            </div>

            {/* Plus Plan - MOST POPULAR */}
            <div className="bg-slate-900 dark:bg-white border-2 border-slate-900 dark:border-white rounded-2xl p-6 relative transform lg:scale-105 shadow-xl flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-emerald-600 text-white border-0 px-4 py-1 text-xs font-semibold">
                  <Star className="w-3 h-3 mr-1" /> Most Popular
                </Badge>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🌱</span>
                  <h3 className="text-xl font-semibold text-white dark:text-slate-900">Plus</h3>
                </div>
                <p className="text-xs text-emerald-400 dark:text-emerald-600 font-medium mb-3">Best for growing teams</p>
                <div className="flex items-baseline gap-1 mb-1">
                  {isYearly && <span className="text-slate-500 dark:text-slate-400 text-lg line-through mr-1">${prices.plus.monthly}</span>}
                  <span className="text-4xl font-bold text-white dark:text-slate-900">${getPrice('plus')}</span>
                  <span className="text-slate-400 dark:text-slate-600 text-sm">/ month</span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-600 mb-1">
                  {isYearly ? 'Billed annually' : 'Billed monthly'}
                </p>
                {isYearly && (
                  <p className="text-xs text-emerald-400 dark:text-emerald-600 font-medium">
                    Save ${getYearlySavings('plus')}/year
                  </p>
                )}
                <p className="text-sm text-slate-300 dark:text-slate-700 mb-2">Perfect for founders and SMBs hiring without recruiters.</p>
              </div>

              <a href="https://app.jatura.com/signup">
                <Button className="w-full mb-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
                  Try Jatura free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <div className="space-y-3 text-sm flex-grow">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-white dark:text-slate-900">5 active jobs</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-white dark:text-slate-900">Unlimited candidates & users</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-white dark:text-slate-900">
                    <span className="font-medium">Review 3x more resumes</span>
                    <span className="block text-xs text-slate-400 dark:text-slate-600">AI parses every application instantly</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-white dark:text-slate-900">Notes, tags & smart filtering</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-white dark:text-slate-900">1-click interview scheduling</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-white dark:text-slate-900">
                    <span className="font-medium">Basic automations</span>
                    <span className="block text-xs text-slate-400 dark:text-slate-600">Stop moving candidates manually</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs text-slate-400 dark:text-slate-600 text-center border-t border-slate-700 dark:border-slate-200 pt-4">
                Replace spreadsheets. Never lose candidates again.
              </p>
            </div>

            {/* Pro Plan */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⚡</span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Pro</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">Designed for scale</p>
                <div className="flex items-baseline gap-1 mb-1">
                  {isYearly && <span className="text-slate-400 dark:text-slate-500 text-lg line-through mr-1">${prices.pro.monthly}</span>}
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">${getPrice('pro')}</span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">/ month</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">
                  {isYearly ? 'Billed annually' : 'Billed monthly'}
                </p>
                {isYearly && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-500 font-medium">
                    Save ${getYearlySavings('pro')}/year
                  </p>
                )}
                <p className="text-sm text-slate-600 dark:text-slate-400">Ideal for teams and agencies handling multiple roles at once.</p>
              </div>

              <a href="https://app.jatura.com/signup">
                <Button variant="outline" className="w-full mb-6 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                  See Jatura in action
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <div className="space-y-3 text-sm flex-grow">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">20 active jobs</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium">Email & SMS on autopilot</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-500">Candidates stay engaged without manual follow-up</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">Candidate self-service portal</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium">AI finds best-fit candidates</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-500">Smart matching ranks applicants automatically</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400 font-medium">3,000 AI actions / month</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">Custom pipelines per role</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">Advanced reporting & insights</span>
                </div>
              </div>

              <p className="mt-6 text-xs text-slate-500 dark:text-slate-500 text-center border-t border-slate-200 dark:border-slate-800 pt-4">
                Close roles faster. Automate the busywork.
              </p>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🏢</span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Enterprise</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">Built for control</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-lg text-slate-500 dark:text-slate-400">From</span>
                  {isYearly && <span className="text-slate-400 dark:text-slate-500 text-lg line-through mr-1">${prices.enterprise.monthly}</span>}
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">${getPrice('enterprise')}</span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">/ month</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">
                  {isYearly ? 'Billed annually' : 'Billed monthly'}
                </p>
                {isYearly && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-500 font-medium">
                    Save ${getYearlySavings('enterprise')}/year
                  </p>
                )}
                <p className="text-sm text-slate-600 dark:text-slate-400">For HR teams needing full control and compliance.</p>
              </div>

              <a href="/demo">
                <Button variant="outline" className="w-full mb-6 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                  Talk to a hiring specialist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <div className="space-y-3 text-sm flex-grow">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Unlimited jobs</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">API + custom integrations</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400 font-medium">SSO & granular permissions</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">White-label career site</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">Dedicated priority support</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">Custom AI limits</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400">Audit logs & data exports</span>
                </div>
              </div>

              <p className="mt-6 text-xs text-slate-500 dark:text-slate-500 text-center border-t border-slate-200 dark:border-slate-800 pt-4">
                Transparent pricing. No pressure.
              </p>
            </div>
          </div>

          {/* Quick FAQ Answers */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">Is free really free?</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Yes. No credit card. No trial limits. Free forever.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">Can I cancel anytime?</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Yes. No contracts. Cancel in one click.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">Will my data stay if I downgrade?</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Absolutely. Your data is always yours.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">Do I need a credit card?</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Nope. Start free with just your email.</p>
            </div>
          </div>

          {/* Trust Bar */}
          <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 text-center">
              Every Jatura plan includes
            </h3>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                <span>Lightning-fast setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                <span>Unlimited candidates</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                <span>Secure & encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                <span>GDPR-ready privacy</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                <span>Unlimited candidates</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                <span>Email support</span>
              </div>
            </div>
            <p className="mt-8 text-base text-slate-500 dark:text-slate-400 italic">
              One great hire pays for Jatura many times over.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Complete feature breakdown
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to know about what's included in each plan
            </p>
          </div>

          <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900 dark:text-white w-2/5">Feature</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-slate-900 dark:text-white">Launch</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/50">Plus</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-slate-900 dark:text-white">Pro</th>
                    <th className="text-center py-4 px-4 text-sm font-semibold text-slate-900 dark:text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td colSpan={5} className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Core ATS Features</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">Active Jobs</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">1</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/50 font-medium">5</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">20</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">Candidate Database</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">Unlimited</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/50 font-medium">Unlimited</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">Unlimited</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">Users/Seats</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">2</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/50 font-medium">Unlimited</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">Unlimited</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">Resume Parsing</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">Basic</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/50 font-medium">Advanced</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">Advanced</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">Advanced</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">File Storage</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">100MB</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-900/50 font-medium">10GB</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">50GB</td>
                    <td className="py-4 px-4 text-center text-sm text-slate-600 dark:text-slate-400">250GB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Everything you need to know about pricing, features, and getting started
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-xl">💰</span> Pricing & Billing
              </h3>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Can I really use Jatura for free?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Yes. The Free plan is 100% free. No credit card required. You can manage up to 3 active jobs, up to unlimited applications, and 2 team members. Upgrade anytime as your team grows.</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Do you charge per user?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Nope. All paid plans include unlimited users. Invite your entire hiring team, managers, and interviewers without worrying about seat costs.</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Can I cancel or change my plan anytime?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your billing dashboard. No contracts or hidden fees.</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Do you offer annual billing or discounts?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Yes. Annual plans include a 20% discount (that's two months free). You can switch between monthly and annual billing anytime.</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Are there any hidden fees?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">None. You'll only pay for your chosen plan and optional add-ons like SMS, extra email credits, or AI actions. All clearly priced on the site.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-xl">⚙️</span> Features & Usage
              </h3>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">What happens when I reach the job or candidate limit on my plan?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">You'll still retain all your data, but you won't be able to add new jobs or candidates until you upgrade or archive older roles.</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Does Jatura support automations and triggers?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Yes. From the Growth plan upward, you can create automated workflows to move candidates, send emails, or assign tasks based on triggers.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-xl">🔐</span> Data & Security
              </h3>

              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">Is my data secure?</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Definitely. We use secure cloud hosting, encryption in transit and at rest, GDPR compliance tools, and audit logging. Enterprise plans include SOC 2 and ISO-ready compliance.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Still have questions? Chat with us or start free. No card required.
            </p>
            <a href="https://app.jatura.com/signup">
              <Button size="lg" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100">
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-slate-900 mb-6">
            Ready to transform your hiring?
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-700 mb-10 leading-relaxed">
            Join hundreds of companies hiring better, faster with Jatura. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.jatura.com/signup">
              <Button size="lg" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 px-10 py-6 text-lg group">
                Start free trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
              </Button>
            </a>
            <a href="/platform">
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg border-white dark:border-slate-900 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100">
                Learn more
              </Button>
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-400 dark:text-slate-600">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
