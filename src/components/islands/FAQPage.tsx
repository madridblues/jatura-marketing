import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  HelpCircle,
  DollarSign,
  Settings,
  Shield,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      id: "general",
      name: "General & Getting Started",
      icon: HelpCircle,
      color: "slate",
      faqs: [
        {
          question: "What is Jatura ATS?",
          answer: "Jatura is a production-ready B2B SaaS Applicant Tracking System designed to streamline your entire recruitment process. We combine enterprise-grade features with an intuitive user experience, offering AI-powered candidate matching, automated workflows, real-time analytics, comprehensive interview management, and multi-channel communication - all in one platform."
        },
        {
          question: "Who is Jatura ATS for?",
          answer: "Jatura is built for growing companies, recruitment agencies, and enterprises of all sizes. Whether you're hiring for high-volume retail positions, specialized tech roles, global teams, or niche positions, our platform scales with your needs. We're particularly suited for teams looking for modern, AI-enhanced recruiting tools with transparent pricing."
        },
        {
          question: "What makes Jatura different from other ATS platforms?",
          answer: "Jatura stands out with our combination of advanced AI capabilities, transparent pricing, and comprehensive feature set. We offer AI-powered candidate screening and matching, intelligent interview kit generation, real-time hiring analytics, multi-channel communication (email, SMS, in-app chat), automated workflow engine, mobile-first candidate experience, and enterprise-grade security - all without the complexity and high costs of legacy platforms."
        },
        {
          question: "How long does it take to get started?",
          answer: "You can start using Jatura immediately after signing up. Our interactive onboarding guide walks you through the essential setup steps, and most teams are fully operational within 1-2 days. For enterprise implementations with custom integrations, the timeline typically ranges from 1-3 weeks depending on your specific requirements."
        },
        {
          question: "Do you offer a free trial?",
          answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore the platform, create jobs, manage candidates, and test all features before making a commitment."
        },
        {
          question: "Is there a free plan available?",
          answer: "Yes, we offer a Free plan that supports up to 3 active jobs and unlimited applications - perfect for small teams and startups getting started with structured hiring. The Free plan includes core ATS features, basic analytics, and essential integrations."
        }
      ]
    },
    {
      id: "pricing",
      name: "Pricing & Billing",
      icon: DollarSign,
      color: "emerald",
      faqs: [
        {
          question: "How much does Jatura cost?",
          answer: "Jatura offers three transparent pricing tiers:\n\n• Free Plan: $0/month - Up to 3 active jobs and unlimited applications, ideal for small teams\n• Pro Plan: Competitive monthly pricing - Unlimited jobs, advanced features, AI capabilities\n• Enterprise Plan: Custom pricing - Dedicated support, advanced security, custom integrations\n\nUnlike competitors who require sales calls for pricing, our costs are transparent and published on our pricing page."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover) through our secure Stripe integration. Enterprise customers can also arrange invoice-based billing with annual contracts."
        },
        {
          question: "Can I change my plan later?",
          answer: "Absolutely! You can upgrade or downgrade your plan at any time from your account settings. When you upgrade, you'll immediately gain access to additional features. If you downgrade, changes take effect at the end of your current billing cycle."
        },
        {
          question: "Do you offer annual billing discounts?",
          answer: "Yes! Annual subscriptions receive a discount compared to monthly billing. Enterprise customers can access additional discounts with multi-year commitments. Contact our sales team for custom pricing on annual plans."
        },
        {
          question: "What happens if I exceed my plan limits?",
          answer: "We'll notify you when you're approaching your plan limits. Depending on the limit (active jobs, team members, etc.), you may need to upgrade to continue adding resources. We never interrupt your recruiting process - you'll always have time to adjust your plan."
        },
        {
          question: "Is there a setup fee or implementation cost?",
          answer: "No setup fees or hidden costs. Our Free and Pro plans are self-service with no additional charges. Enterprise customers receive dedicated implementation support included in their package, with no separate setup fees for standard configurations."
        }
      ]
    },
    {
      id: "features",
      name: "Features & Capabilities",
      icon: Zap,
      color: "blue",
      faqs: [
        {
          question: "What AI features does Jatura offer?",
          answer: "Jatura includes comprehensive AI capabilities:\n\n• AI-powered candidate matching and screening with 100-point scoring\n• Automatic interview kit generation with competencies, questions, and scoring rubrics\n• AI Copilot for candidate summaries, job description drafting, and insights\n• Intelligent resume parsing and attribute extraction\n• Automated blog content generation for employer branding\n• AI-powered bug report processing and analysis\n\nImportant: Our AI assists recruiters but never auto-rejects candidates - all hiring decisions remain human-controlled."
        },
        {
          question: "Can I customize the hiring pipeline?",
          answer: "Yes! Jatura offers fully customizable hiring pipelines with 8 different stage types (Application Review, Phone Screen, Interview, Technical Assessment, Reference Check, Offer, Hired, Rejected). You can configure automated actions for each stage, set up custom workflows, define stage-specific tasks, and create approval requirements. Our Ashby-style pipeline gives you complete control over your hiring process."
        },
        {
          question: "Does Jatura support team collaboration?",
          answer: "Absolutely. Jatura is built for team collaboration with:\n\n• Role-based access control (Owner, Admin, Recruiter, Hiring Manager, Interviewer)\n• Shared candidate evaluations and scorecards\n• Internal notes and @mentions\n• Interview scheduling with team calendars\n• Real-time notifications and activity feeds\n• Company-wide analytics dashboard\n• Group-based organization for large teams"
        },
        {
          question: "Can candidates apply via mobile?",
          answer: "Yes! Our application forms are mobile-first and optimized for all devices. We also offer innovative application methods including text-to-apply (candidates text a keyword to apply), secure tokenized status tracking (candidates check their application status via unique URLs), and self-scheduling for interviews. The entire candidate experience is designed to work seamlessly on smartphones."
        },
        {
          question: "What communication channels are supported?",
          answer: "Jatura offers multi-channel communication:\n\n• Email (with SendGrid integration for reliable delivery)\n• SMS/Text messaging (via Twilio)\n• In-app chat with real-time messaging\n• Bidirectional email (candidates can reply to emails)\n• Message templates and bulk messaging\n• Automated notifications and reminders\n\nAll communications are tracked in candidate profiles for complete visibility."
        }
      ]
    },
    {
      id: "implementation",
      name: "Implementation & Setup",
      icon: Settings,
      color: "blue",
      faqs: [
        {
          question: "How do I get started with Jatura?",
          answer: "Getting started is simple:\n\n1. Sign up for a free trial (no credit card required)\n2. Complete the interactive onboarding guide\n3. Set up your company profile and branding\n4. Create your first job posting\n5. Configure your hiring pipeline\n6. Invite team members\n7. Start receiving applications!\n\nOur product tours guide you through each feature, and help documentation is available throughout the platform."
        },
        {
          question: "Can I import data from my existing ATS?",
          answer: "Yes! We support data imports from major ATS platforms including Greenhouse, Lever, Workable, and others. Our team can help you migrate candidate data, job postings, and historical information. Contact our support team to discuss your specific migration needs and timeline."
        },
        {
          question: "Do I need technical expertise to use Jatura?",
          answer: "No technical expertise required! Jatura is designed for recruiters and hiring teams, not developers. Our intuitive interface, guided setup, and interactive product tours make it easy for anyone to get started. For advanced features like API integrations or custom workflows, our documentation and support team are here to help."
        }
      ]
    },
    {
      id: "integrations",
      name: "Integrations & API",
      icon: Zap,
      color: "amber",
      faqs: [
        {
          question: "What integrations does Jatura support?",
          answer: "Jatura integrates with essential recruiting tools:\n\n• Email: SendGrid for transactional emails and inbound parsing\n• SMS: Twilio for text messaging and text-to-apply\n• Payments: Stripe for subscription management\n• AI: OpenAI for intelligent features\n• Storage: Object storage for resume and file management\n• Calendar: ICS file generation for all major calendar apps\n\nWe're continuously adding new integrations based on customer feedback."
        },
        {
          question: "Does Jatura have an API?",
          answer: "Yes! Jatura provides a comprehensive API for custom integrations. Our RESTful API allows you to:\n\n• Create and update job postings\n• Manage candidates and applications\n• Trigger workflow actions\n• Access analytics data\n• Sync with your HRIS or other systems\n\nAPI documentation and authentication guides are available in our developer portal. Enterprise plans include dedicated API support."
        }
      ]
    },
    {
      id: "security",
      name: "Security & Compliance",
      icon: Shield,
      color: "red",
      faqs: [
        {
          question: "Is my data secure with Jatura?",
          answer: "Absolutely. Security is our top priority:\n\n• PostgreSQL database with encrypted connections\n• Session-based authentication with secure cookies\n• Password hashing using scrypt algorithm\n• TLS/SSL encryption for all data transmission\n• Role-based access control (RBAC)\n• Regular security audits and monitoring\n• Automated backups and disaster recovery\n• Secure file storage with access control\n\nYour candidate data is protected with enterprise-grade security measures."
        },
        {
          question: "Is Jatura GDPR compliant?",
          answer: "Yes! Jatura is designed with GDPR compliance in mind:\n\n• Privacy Hub with granular consent management\n• Data request handling (access, export, deletion)\n• Candidate data retention controls\n• Privacy policy and consent tracking\n• Right to be forgotten implementation\n• Data processing agreements available\n• Audit logs for compliance tracking\n\nWe provide the tools you need to maintain GDPR compliance in your recruiting process."
        },
        {
          question: "How do you handle candidate data privacy?",
          answer: "We take candidate privacy seriously:\n\n• Candidates control their data through the Privacy Hub\n• Explicit consent required for data processing\n• Secure, tokenized access to application status\n• Data minimization - we only collect necessary information\n• Transparent privacy policies\n• Secure data deletion when requested\n• No data sharing with third parties without consent\n\nCandidates have full transparency and control over their personal information."
        }
      ]
    },
    {
      id: "support",
      name: "Support & Training",
      icon: Users,
      color: "green",
      faqs: [
        {
          question: "What support options are available?",
          answer: "Jatura offers multiple support channels:\n\n• Email support (support@jatura.com)\n• In-app support form with priority routing\n• Comprehensive help documentation\n• Interactive product tours and guides\n• Video tutorials and walkthroughs\n• FAQ and knowledge base\n\nPro plan customers receive priority support. Enterprise customers get dedicated account management and phone support."
        },
        {
          question: "What are your support hours?",
          answer: "Email and form support is monitored Monday-Friday, 9:00 AM - 6:00 PM ET. We aim to respond to all inquiries within 24 hours. Urgent issues are prioritized. Enterprise customers receive 24/7 emergency support for critical issues."
        }
      ]
    }
  ];

  const filteredCategories = searchQuery
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(
          faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-5 py-2 text-sm font-medium">
            <HelpCircle className="w-4 h-4 mr-2" />
            Help Center
          </Badge>

          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Find answers to common questions about Jatura ATS. Can't find what you're looking for?{" "}
            <a href="/support" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
              Contact our support team
            </a>
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-2 border-slate-200 dark:border-slate-800 focus:border-emerald-500 dark:focus:border-emerald-400 bg-white dark:bg-slate-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {searchQuery && filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-slate-600 dark:text-slate-400">
                No results found for "{searchQuery}". Try different keywords or{" "}
                <a href="/support" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                  contact support
                </a>
              </p>
            </div>
          )}

          {filteredCategories.map((category, idx) => {
            const IconComponent = category.icon;

            return (
              <div key={category.id} className={idx > 0 ? "mt-12" : ""}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800`}>
                    <IconComponent className={`w-6 h-6 text-slate-600 dark:text-slate-400`} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.name}
                  </h2>
                  <Badge variant="secondary" className="ml-auto">
                    {category.faqs.length} questions
                  </Badge>
                </div>

                <Accordion type="single" collapsible className="space-y-2">
                  {category.faqs.map((faq, faqIdx) => (
                    <AccordionItem
                      key={faqIdx}
                      value={`${category.id}-${faqIdx}`}
                      className="border border-slate-200 dark:border-slate-800 rounded-lg px-6 bg-white dark:bg-slate-900/50"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="font-semibold text-slate-900 dark:text-white pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 dark:text-slate-400 pb-5 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/support">
              <Button size="lg" className="group">
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
