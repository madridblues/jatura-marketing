import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, Code, CheckCircle, Shield, Zap, Database,
  Webhook, Key, Terminal, Lock, Users, Calendar, Mail,
  MessageSquare, FileText, BarChart3, Globe, Clock,
  Activity, Sparkles, Briefcase
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function APIDocsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("candidates");

  const apiCategories = [
    {
      id: "candidates",
      name: "Candidates",
      icon: Users,
      description: "Manage candidate profiles and data",
      endpoints: [
        { method: "GET", path: "/api/candidates", description: "List all candidates" },
        { method: "POST", path: "/api/candidates", description: "Create new candidate" },
        { method: "GET", path: "/api/candidates/:id", description: "Get candidate details" },
        { method: "PUT", path: "/api/candidates/:id", description: "Update candidate" },
        { method: "DELETE", path: "/api/candidates/:id", description: "Delete candidate" },
        { method: "POST", path: "/api/candidates/bulk-upload", description: "Bulk upload resumes" }
      ]
    },
    {
      id: "jobs",
      name: "Jobs",
      icon: Briefcase,
      description: "Job posting management",
      endpoints: [
        { method: "GET", path: "/api/jobs", description: "List all jobs" },
        { method: "POST", path: "/api/jobs", description: "Create job posting" },
        { method: "GET", path: "/api/jobs/:id", description: "Get job details" },
        { method: "PUT", path: "/api/jobs/:id", description: "Update job" },
        { method: "PATCH", path: "/api/jobs/:id/status", description: "Update job status" },
        { method: "GET", path: "/api/jobs/:id/applications", description: "Get job applications" }
      ]
    },
    {
      id: "applications",
      name: "Applications",
      icon: FileText,
      description: "Application tracking and management",
      endpoints: [
        { method: "GET", path: "/api/applications", description: "List applications" },
        { method: "POST", path: "/api/applications", description: "Create application" },
        { method: "GET", path: "/api/applications/:id", description: "Get application" },
        { method: "PATCH", path: "/api/applications/:id/stage", description: "Update stage" },
        { method: "POST", path: "/api/applications/:id/reject", description: "Reject application" }
      ]
    },
    {
      id: "interviews",
      name: "Interviews",
      icon: Calendar,
      description: "Interview scheduling and management",
      endpoints: [
        { method: "GET", path: "/api/interviews", description: "List interviews" },
        { method: "POST", path: "/api/interviews", description: "Schedule interview" },
        { method: "PATCH", path: "/api/interviews/:id", description: "Update interview" },
        { method: "POST", path: "/api/interviews/:id/feedback", description: "Submit feedback" },
        { method: "GET", path: "/api/interviews/:id/participants", description: "Get participants" }
      ]
    },
    {
      id: "communications",
      name: "Communications",
      icon: MessageSquare,
      description: "Email, SMS, and messaging",
      endpoints: [
        { method: "POST", path: "/api/communications/email", description: "Send email" },
        { method: "POST", path: "/api/communications/sms", description: "Send SMS" },
        { method: "GET", path: "/api/communications/threads", description: "Get message threads" },
        { method: "POST", path: "/api/communications/templates", description: "Create template" }
      ]
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: BarChart3,
      description: "Reports and metrics",
      endpoints: [
        { method: "GET", path: "/api/analytics/pipeline", description: "Pipeline metrics" },
        { method: "GET", path: "/api/analytics/time-to-hire", description: "Time to hire stats" },
        { method: "GET", path: "/api/analytics/sources", description: "Source effectiveness" },
        { method: "GET", path: "/api/analytics/diversity", description: "DEI metrics" }
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "API keys with granular permissions and OAuth 2.0 support for enterprise integrations"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "99.9% uptime SLA with sub-200ms response times and automatic scaling"
    },
    {
      icon: Webhook,
      title: "Real-Time Webhooks",
      description: "Subscribe to events like candidate updates, application changes, and interview scheduling"
    },
    {
      icon: Database,
      title: "Comprehensive Data",
      description: "Access all ATS data including candidates, jobs, applications, interviews, and analytics"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "SOC 2 compliant with encryption at rest and in transit, plus IP whitelisting"
    },
    {
      icon: Activity,
      title: "Rate Limiting",
      description: "Fair usage with 100 requests/second burst capacity and configurable limits"
    }
  ];

  const useCases = [
    { title: "HRIS Integration", description: "Sync hired candidates to your HR system automatically", icon: Users },
    { title: "Custom Career Pages", description: "Build branded job boards with real-time job data", icon: Globe },
    { title: "Analytics Dashboards", description: "Create custom reporting and analytics tools", icon: BarChart3 },
    { title: "Sourcing Tools", description: "Import candidates from external platforms", icon: Database },
    { title: "Email Automation", description: "Build custom communication workflows", icon: Mail },
    { title: "Interview Scheduling", description: "Integrate with calendar systems", icon: Calendar }
  ];

  const webhookEvents = [
    { event: "candidate.created", description: "New candidate added" },
    { event: "candidate.updated", description: "Candidate profile changed" },
    { event: "application.stage_changed", description: "Application moved to new stage" },
    { event: "application.rejected", description: "Application rejected" },
    { event: "interview.scheduled", description: "Interview scheduled" },
    { event: "interview.completed", description: "Interview completed" },
    { event: "job.created", description: "New job posted" },
    { event: "job.closed", description: "Job posting closed" }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="mb-4">
              <Code className="h-3 w-3 mr-1" />
              Developer Platform
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build powerful recruiting integrations
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Access Jatura's complete recruiting platform through our RESTful API. Build custom integrations, automate workflows, and extend functionality with enterprise-grade reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get API Key
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-700 text-white hover:bg-slate-900">
                <Terminal className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>
          </div>

          {/* Quick Start Code Example */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-950 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-400">Quick Start</h3>
                  <Badge variant="secondary">cURL</Badge>
                </div>
                <pre className="bg-black rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-green-400">
{`curl -X GET "https://api.jatura.com/v1/candidates" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Enterprise-grade API</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Built for scale, security, and developer experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <Card key={idx} className="bg-slate-950 border-slate-800 hover:border-slate-700 transition">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <FeatureIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">API Endpoints</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Comprehensive endpoints for every recruiting workflow</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {apiCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-950 text-slate-400 hover:bg-slate-900 hover:text-white border border-slate-800'
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">{category.name}</div>
                        <div className="text-xs opacity-75 truncate">{category.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Endpoint Details */}
            <div className="lg:col-span-2">
              {apiCategories.map((category) => (
                activeCategory === category.id && (
                  <div key={category.id} className="space-y-4">
                    {category.endpoints.map((endpoint, idx) => (
                      <Card key={idx} className="bg-slate-950 border-slate-800">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Badge className={`
                              ${endpoint.method === 'GET' ? 'bg-blue-600' : ''}
                              ${endpoint.method === 'POST' ? 'bg-green-600' : ''}
                              ${endpoint.method === 'PUT' || endpoint.method === 'PATCH' ? 'bg-yellow-600' : ''}
                              ${endpoint.method === 'DELETE' ? 'bg-red-600' : ''}
                            `}>
                              {endpoint.method}
                            </Badge>
                            <div className="flex-1 min-w-0">
                              <code className="text-sm text-blue-400 font-mono block mb-2">{endpoint.path}</code>
                              <p className="text-sm text-slate-400">{endpoint.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Common Use Cases</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">See what you can build with Jatura API</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <Card key={idx} className="bg-slate-950 border-slate-800 hover:border-blue-600 transition">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-sm text-slate-400">{useCase.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Simple & Secure Authentication</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Key className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">API Keys</h3>
                    <p className="text-slate-400">Generate API keys instantly from your dashboard with granular permission controls</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">OAuth 2.0</h3>
                    <p className="text-slate-400">Enterprise-grade OAuth for third-party integrations with PKCE support</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Webhook Signatures</h3>
                    <p className="text-slate-400">HMAC-SHA256 signed webhooks to verify payload authenticity</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-slate-950 border-slate-800">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold text-slate-400 mb-4">Example Authentication</h3>
                <pre className="bg-black rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm text-green-400">
{`// Using API Key
fetch('https://api.jatura.com/v1/candidates', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

// Response
{
  "data": [...],
  "pagination": {
    "page": 1,
    "per_page": 50,
    "total": 247
  }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <Webhook className="h-3 w-3 mr-1" />
              Real-Time Events
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Webhooks</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Get notified instantly when events happen in your ATS</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {webhookEvents.map((webhook, idx) => (
              <Card key={idx} className="bg-slate-950 border-slate-800">
                <CardContent className="p-4">
                  <code className="text-sm text-blue-400 font-mono block mb-1">{webhook.event}</code>
                  <p className="text-sm text-slate-400">{webhook.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Limits & Performance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">100</div>
              <div className="text-slate-400 mb-1">Requests/Second</div>
              <div className="text-xs text-slate-500">Burst capacity</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-slate-400 mb-1">Uptime SLA</div>
              <div className="text-xs text-slate-500">Enterprise guarantee</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-600 mb-2">&lt;200ms</div>
              <div className="text-slate-400 mb-1">Response Time</div>
              <div className="text-xs text-slate-500">p95 latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Start building today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your API key and start integrating in minutes. Free for up to 3 active jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                Get API Key Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Contact Sales
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Free sandbox access</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
