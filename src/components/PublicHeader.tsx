import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PublicHeaderProps {
  currentPath?: string;
}

export default function PublicHeader({ currentPath = "/" }: PublicHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformMenuOpen, setPlatformMenuOpen] = useState(false);
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);
  const [useCasesMenuOpen, setUseCasesMenuOpen] = useState(false);

  const navLinks = [
    { href: "/why-jatura", label: "Why Jatura" },
    { href: "/pricing", label: "Pricing" },
  ];

  const resourcesLinks = [
    { href: "/api", label: "API Documentation" },
    { href: "/demo", label: "Demo" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact" },
  ];


  const platformLinks = [
    { href: "/features/all-features", label: "All Features" },
    { href: "/features/applicant-tracking-system", label: "Applicant Tracking System" },
    { href: "/features/omni-channel-messaging", label: "Omni-Channel Messaging" },
    { href: "/features/reporting", label: "Reporting & Analytics" },
    { href: "/features/automations", label: "Automations" },
    { href: "/features/interview-kits", label: "Interview Kits" },
    { href: "/features/ai-recruiting", label: "AI Recruiting" },
    { href: "/features/employer-branding", label: "Employer Branding" },
    { href: "/features/career-site", label: "Career Site" },
    { href: "/features/candidate-relationship-management", label: "Candidate Relationship Management" },
  ];

  const useCasesLinks = [
    { href: "/use-cases", label: "Overview" },
    { href: "/use-cases/high-volume-hiring", label: "High Volume Hiring" },
    { href: "/use-cases/global-hiring", label: "Global Hiring" },
    { href: "/use-cases/text-to-apply", label: "Text to Apply" },
    { href: "/use-cases/hiring-across-multiple-brands", label: "Multi-Brand Hiring" },
    { href: "/use-cases/niche-roles", label: "Niche & Hard-to-Fill Roles" },
    { href: "/use-cases/contingent-workers", label: "Contingent Workers" },
    { href: "/use-cases/high-growth-startups", label: "High-Growth Startups" },
  ];

  const toolsLinks = [
    { href: "/tools/ats-assessment", label: "Free ATS Assessment" },
    { href: "/tools/roi-calculator", label: "ROI Calculator" },
    { href: "/tools/ats-comparison", label: "ATS Vendor Comparison" },
    { href: "/tools/hiring-cost-calculator", label: "Hiring Cost Calculator" },
  ];

  return (
    <>
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 cursor-pointer group" data-testid="link-logo">
              <div className="w-9 h-9 bg-slate-900 dark:bg-background rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <Users className="w-5 h-5 text-white dark:text-foreground" />
              </div>
              <span className="font-semibold text-lg text-foreground tracking-tight animate-fade-in">Jatura</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Platform Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="text-sm font-medium text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors flex items-center gap-1 outline-none"
                  data-testid="dropdown-platform"
                >
                  Platform
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-64 bg-background border-border"
                >
                  {platformLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <a
                        href={link.href}
                        className="cursor-pointer text-foreground hover:text-foreground dark:hover:text-white"
                        data-testid={`dropdown-item-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Use Cases Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="text-sm font-medium text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors flex items-center gap-1 outline-none"
                  data-testid="dropdown-use-cases"
                >
                  Use Cases
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-64 bg-background border-border"
                >
                  {useCasesLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <a
                        href={link.href}
                        className="cursor-pointer text-foreground hover:text-foreground dark:hover:text-white"
                        data-testid={`dropdown-item-use-case-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-sm font-medium transition-colors ${
                    currentPath === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* Resources Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="text-sm font-medium text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors flex items-center gap-1 outline-none"
                  data-testid="dropdown-resources"
                >
                  Resources
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 bg-background border-border"
                >
                  {resourcesLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <a
                        href={link.href}
                        className="cursor-pointer text-foreground hover:text-foreground dark:hover:text-white"
                        data-testid={`dropdown-item-resource-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Tools Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="text-sm font-medium text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors flex items-center gap-1 outline-none"
                  data-testid="dropdown-tools"
                >
                  Tools
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 bg-background border-border"
                >
                  {toolsLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <a
                        href={link.href}
                        className="cursor-pointer text-foreground hover:text-foreground dark:hover:text-white"
                        data-testid={`dropdown-item-tool-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://app.jatura.com/login"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-4 text-muted-foreground hover:text-foreground dark:hover:text-white"
                data-testid="button-login"
              >
                Sign in
              </a>
              <a
                href="https://app.jatura.com/signup"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-9 px-4 bg-slate-900 dark:bg-background text-white dark:text-foreground hover:bg-slate-800 dark:hover:bg-muted shadow-sm"
                data-testid="button-get-started"
              >
                Get started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          data-testid="mobile-menu-overlay"
        />
      )}

      {/* Mobile Menu Slide-out */}
      <div
        className={`fixed top-16 right-0 bottom-0 w-64 bg-background border-l border-border z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        data-testid="mobile-menu"
      >
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {/* Platform Section */}
            <div className="mb-4">
              <button
                onClick={() => setPlatformMenuOpen(!platformMenuOpen)}
                className="flex items-center justify-between w-full px-4 py-4 rounded-lg text-base font-medium text-muted-foreground hover:bg-muted dark:hover:bg-slate-900/50 hover:text-foreground dark:hover:text-white transition-colors"
                data-testid="mobile-dropdown-platform"
              >
                Platform
                <ChevronDown className={`w-4 h-4 transition-transform ${platformMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {platformMenuOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  {platformLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="block px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted dark:hover:bg-slate-900/50 hover:text-foreground dark:hover:text-white transition-colors">
                        {link.label}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Use Cases Section */}
            <div className="mb-4">
              <button
                onClick={() => setUseCasesMenuOpen(!useCasesMenuOpen)}
                className="flex items-center justify-between w-full px-4 py-4 rounded-lg text-base font-medium text-muted-foreground hover:bg-muted dark:hover:bg-slate-900/50 hover:text-foreground dark:hover:text-white transition-colors"
                data-testid="mobile-dropdown-use-cases"
              >
                Use Cases
                <ChevronDown className={`w-4 h-4 transition-transform ${useCasesMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {useCasesMenuOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  {useCasesLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-link-use-case-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="block px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted dark:hover:bg-slate-900/50 hover:text-foreground dark:hover:text-white transition-colors">
                        {link.label}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div
                  className={`block px-4 py-4 rounded-lg text-base font-medium transition-colors ${
                    currentPath === link.href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted dark:hover:bg-slate-900/50 hover:text-foreground dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </div>
              </a>
            ))}

            {/* Resources Section */}
            <div className="mb-4">
              <button
                onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}
                className="flex items-center justify-between w-full px-4 py-4 rounded-lg text-base font-medium text-muted-foreground hover:bg-muted dark:hover:bg-slate-900/50 hover:text-foreground dark:hover:text-white transition-colors"
                data-testid="mobile-dropdown-resources"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${resourcesMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesMenuOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  {resourcesLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-link-resource-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="block px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted dark:hover:bg-slate-900/50 hover:text-foreground dark:hover:text-white transition-colors">
                        {link.label}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Tools Section */}
            <div className="mb-4">
              {toolsLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-link-tool-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="block px-4 py-4 rounded-lg text-base font-medium text-muted-foreground hover:bg-muted dark:hover:bg-slate-900/50 hover:text-foreground dark:hover:text-white transition-colors">
                    {link.label}
                  </div>
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Buttons - Mobile */}
          <div className="border-t border-border px-4 py-6 space-y-4">
            <a
              href="https://app.jatura.com/login"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full rounded-md border border-border bg-transparent hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              data-testid="mobile-button-login"
            >
              Sign in
            </a>
            <a
              href="https://app.jatura.com/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-slate-900 dark:bg-background text-white dark:text-foreground hover:bg-slate-800 dark:hover:bg-muted h-10 px-4 py-2"
              data-testid="mobile-button-get-started"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
