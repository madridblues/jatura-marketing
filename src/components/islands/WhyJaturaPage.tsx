import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Target,
  Users,
  MessageSquare,
  Award,
  CheckCircle,
  Shield,
  TrendingUp,
  Heart,
  Sparkles,
  BarChart3,
  UserPlus,
} from "lucide-react";

export default function WhyJaturaPage() {
  const [activePillar, setActivePillar] = useState("attract");

  const pillars = [
    {
      id: "attract",
      label: "Attract",
      icon: Users,
      title: "Reach the right candidates, wherever they are",
      features: [
        "AI-powered job descriptions",
        "Branded career sites",
        "Multi-channel job distribution",
        "Employee referral program",
        "Talent community building",
        "Candidate chat & engagement",
      ],
      link: "/features/career-site",
    },
    {
      id: "screen",
      label: "Screen",
      icon: Sparkles,
      title: "Let AI handle resume screening automatically",
      features: [
        "AI resume screening & matching",
        "100-point candidate scoring",
        "Automated resume summaries",
        "Skills & experience extraction",
        "Bias-free evaluations",
        "Top candidate surfacing",
      ],
      link: "/features/ai-recruiting",
    },
    {
      id: "engage",
      label: "Engage",
      icon: MessageSquare,
      title: "Create exceptional candidate experiences",
      features: [
        "Two-way messaging (SMS, Email, In-app)",
        "Automated status updates",
        "Self-scheduling interviews",
        "Mobile-optimized applications",
        "Real-time notifications",
        "Personalized communication",
      ],
      link: "/features/employer-branding",
    },
    {
      id: "select",
      label: "Select",
      icon: Award,
      title: "Make better hiring decisions, faster",
      features: [
        "AI-generated interview kits",
        "Structured interview guides",
        "Scoring rubrics & feedback",
        "Team collaboration tools",
        "Interview scheduling automation",
        "Candidate comparison tools",
      ],
      link: "/features/interview-kits",
    },
    {
      id: "nurture",
      label: "Nurture",
      icon: Heart,
      title: "Build talent pools for future opportunities",
      features: [
        "Talent CRM & pooling",
        "Automated nurture campaigns",
        "Candidate relationship tracking",
        "Re-engagement workflows",
        "Talent pipeline analytics",
        "Future role matching",
      ],
      link: "/features/candidate-relationship-management",
    },
  ];

  const activePillarData = pillars.find((p) => p.id === activePillar) || pillars[0];
  const ActiveIcon = activePillarData.icon;

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 px-5 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            <Target className="w-4 h-4 mr-2" />
            Why Jatura?
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Because hiring only works<br />when it works for everyone
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            Jatura helps you simplify complex hiring across every team, role, and location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/login">
              <Button
                size="lg"
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 px-10 py-6 text-lg group shadow-lg"
              >
                Start free trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
              </Button>
            </a>
            <a href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-6 text-lg border-slate-300 dark:border-slate-700"
              >
                View pricing
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-8">
            Jatura is the ATS that makes complex hiring simpler
          </h2>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
            <p>
              Whether you need to recruit across different cities or countries, desk-based and field workers, or entry-level and senior professionals—Jatura can help with that.
            </p>
            <p>
              Get today's hiring under control and prepare for your longer-term strategy, without adding hurdles for recruiters, hiring managers, or candidates. Move faster, but leave no one behind.
            </p>
            <p>
              For some teams, that means doing more to centralize responsibilities and standardize processes. For others, it means the opposite.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Because hiring only works when it works for everyone
              </h2>
              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
                <p>
                  Jatura is optimized to support multiple streams of recruitment and every person involved in the process—hiring managers, HR, recruiters, operations, and of course, candidates.
                </p>
                <p>
                  You'll get the flexibility, control, and ease of use you need to manage all your hiring without compromise.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">For Recruiters</h4>
                    <p className="text-slate-600 dark:text-slate-400">Spend less time on admin, more time building relationships with top talent.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">For Hiring Managers</h4>
                    <p className="text-slate-600 dark:text-slate-400">Get visibility, stay involved, and make better hiring decisions with your team.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">For Candidates</h4>
                    <p className="text-slate-600 dark:text-slate-400">Experience a respectful, transparent hiring process from start to finish.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              All your hiring, one powerful platform
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              From attracting talent to making offers, Jatura brings every part of the hiring process into one place
            </p>
          </div>

          {/* Pillar Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2 ${
                    activePillar === pillar.id
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {pillar.label}
                </button>
              );
            })}
          </div>

          {/* Active Pillar Content */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                  <ActiveIcon className="w-8 h-8 text-slate-900 dark:text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {activePillarData.title}
                </h3>
                <ul className="space-y-3 mb-8">
                  {activePillarData.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={activePillarData.link}>
                  <Button>
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl h-80 flex items-center justify-center">
                <ActiveIcon className="w-32 h-32 text-slate-300 dark:text-slate-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Get implementation right the first time and keep evolving
          </h2>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 mb-12">
            <p>
              Every ATS says they have great customer support. But if that's true, then why are so many talent teams frustrated with the implementation and support they've received?
            </p>
            <p>
              With Jatura, you'll get implementation right the first time, with help from our team on system configuration, migration, integrations, and training.
            </p>
            <p>
              Then work with your Customer Success Manager to continue adapting to your business strategy, the talent market, or new functionality in the product.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
              <UserPlus className="w-10 h-10 text-emerald-600 mb-4" />
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Fast Onboarding</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Get up and running in days, not months</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
              <Users className="w-10 h-10 text-emerald-600 mb-4" />
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Dedicated Support</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Your success manager is always one message away</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
              <TrendingUp className="w-10 h-10 text-emerald-600 mb-4" />
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Continuous Improvement</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Regular training and feature updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Secure and compliant</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Jatura is built for organizations that need to protect sensitive data, meet compliance requirements, and connect systems without the usual headaches.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Enterprise-grade security</strong>
                    <p className="text-slate-600 dark:text-slate-400">SOC 2 Type II and ISO 27001 certified</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">GDPR & CCPA compliant</strong>
                    <p className="text-slate-600 dark:text-slate-400">Built-in privacy hub for candidate data requests</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Role-based access control</strong>
                    <p className="text-slate-600 dark:text-slate-400">Flexible permissions for data visibility</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white">Comprehensive audit logs</strong>
                    <p className="text-slate-600 dark:text-slate-400">Track who did what, when</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 dark:bg-white rounded-3xl p-12 text-center">
              <Shield className="w-24 h-24 text-white dark:text-slate-900 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white dark:text-slate-900 mb-4">Your data is safe with us</h3>
              <p className="text-slate-300 dark:text-slate-600">Enterprise security and compliance built into every feature</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white dark:text-slate-900 mb-6">
            Ready to transform your hiring?
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-600 mb-10">
            Join teams using Jatura to hire better, faster, and smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/login">
              <Button size="lg" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 px-10 py-6 text-lg">
                Start free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/pricing">
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg border-slate-700 dark:border-slate-300 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100">
                View pricing
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
