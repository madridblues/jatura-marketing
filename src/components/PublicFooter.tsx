import { Users, Linkedin, Twitter, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function PublicFooter() {
  const footerLinks = {
    platform: [
      { label: "All Features", href: "/features/all-features" },
      { label: "Applicant Tracking", href: "/features/applicant-tracking-system" },
      { label: "AI Recruiting", href: "/features/ai-recruiting" },
      { label: "Career Sites", href: "/features/career-site" },
      { label: "Interview Scheduling", href: "/features/interview-scheduling" },
      { label: "Reporting & Analytics", href: "/features/reporting" },
      { label: "Automations", href: "/features/automations" },
    ],
    useCases: [
      { label: "High-Volume Hiring", href: "/use-cases/high-volume-hiring" },
      { label: "Global Hiring", href: "/use-cases/global-hiring" },
      { label: "Text-to-Apply", href: "/use-cases/text-to-apply" },
      { label: "High-Growth Startups", href: "/use-cases/high-growth-startups" },
      { label: "Niche Roles", href: "/use-cases/niche-roles" },
    ],
    resources: [
      { label: "Talent Network", href: "https://work.jatura.com", external: true },
      { label: "API Documentation", href: "/api" },
      { label: "Blog", href: "/blog" },
      { label: "Demo", href: "/demo" },
      { label: "Support Center", href: "/support" },
      { label: "FAQ", href: "/faq" },
      { label: "Tools", href: "/tools/roi-calculator" },
    ],
    compare: [
      { label: "vs Greenhouse", href: "/compare/greenhouse" },
      { label: "vs Lever", href: "/compare/lever" },
      { label: "vs Workable", href: "/compare/workable" },
      { label: "vs BambooHR", href: "/compare/bamboohr" },
      { label: "vs JazzHR", href: "/compare/jazzhr" },
    ],
    company: [
      { label: "Why Jatura", href: "/why-jatura" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="border-t border-border bg-background">
      {/* Pre-Footer CTA */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to transform your hiring?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join innovative companies using Jatura to find, engage, and hire exceptional talent.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a href="/signup">
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-footer-cta-signup">
                  Start Free - Up to 3 active jobs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/demo">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-border" data-testid="button-footer-cta-demo">
                  Book a Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a
              href="/"
              className="flex items-center gap-2.5 cursor-pointer group mb-6"
              data-testid="link-footer-logo"
            >
              <div className="w-10 h-10 bg-slate-900 dark:bg-background rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white dark:text-foreground" />
              </div>
              <span className="font-semibold text-xl text-foreground tracking-tight">Jatura</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              AI-native Applicant Tracking System for modern hiring teams. Find, engage, and hire exceptional talent with enterprise-grade recruiting tools.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Stay updated
              </h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-muted border-border"
                  data-testid="input-footer-newsletter"
                />
                <Button size="default" data-testid="button-footer-subscribe">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/jatura"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="https://twitter.com/jatura"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                data-testid="link-footer-twitter"
              >
                <Twitter className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="mailto:hello@jatura.com"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Platform</h3>
            <ul className="space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
                    data-testid={`link-footer-platform-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases Column */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Use Cases</h3>
            <ul className="space-y-4">
              {footerLinks.useCases.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
                    data-testid={`link-footer-use-case-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
                      data-testid={`link-footer-resource-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
                      data-testid={`link-footer-resource-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold text-sm text-foreground mb-4">Compare</h3>
              <ul className="space-y-4">
                {footerLinks.compare.slice(0, 3).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
                      data-testid={`link-footer-compare-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
                    data-testid={`link-footer-company-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold text-sm text-foreground mb-4">Legal</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
                      data-testid={`link-footer-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm text-foreground mb-1">United States</div>
                <div className="text-sm text-muted-foreground">
                  575 Market Street, Suite 2750<br />
                  San Francisco, CA 94105
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm text-foreground mb-1">United Kingdom</div>
                <div className="text-sm text-muted-foreground">
                  25 Canada Square, 31st Floor<br />
                  Canary Wharf, London E14 5LQ
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Badge variant="outline" className="border-border text-foreground">
              SOC 2 Type II Certified
            </Badge>
            <Badge variant="outline" className="border-border text-foreground">
              GDPR Compliant
            </Badge>
            <Badge variant="outline" className="border-border text-foreground">
              CCPA Compliant
            </Badge>
            <Badge variant="outline" className="border-border text-foreground">
              ISO 27001
            </Badge>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Jatura. All rights reserved.
            </p>
            <p className="text-xs">
              Built with enterprise-grade security and reliability
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
