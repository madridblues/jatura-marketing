import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  MessageCircle,
  HelpCircle,
  CheckCircle,
  Clock,
  Send,
  Book,
  ArrowRight,
  Headphones,
  FileText,
  Video,
} from "lucide-react";

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://app.jatura.com/api/support/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", category: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-slate-900 dark:bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Headphones className="w-8 h-8 text-white dark:text-slate-900" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            How can we help?
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Get the support you need to make the most of Jatura ATS
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="#contact-form"
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors">
                <Mail className="w-6 h-6 text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Contact Support</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Submit a support ticket and get expert help within 24 hours</p>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a
              href="/faq"
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors">
                <HelpCircle className="w-6 h-6 text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Browse FAQs</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Find quick answers to common questions about Jatura ATS</p>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
                View FAQs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a
              href="mailto:support@jatura.com"
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-900 dark:group-hover:bg-white transition-colors">
                <MessageCircle className="w-6 h-6 text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Prefer email? Send us a message at support@jatura.com</p>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
                Send email
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Self-service resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <Book className="w-8 h-8 text-slate-900 dark:text-white mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Documentation</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Comprehensive guides and API references</p>
              <a href="/docs" className="text-sm font-medium text-slate-900 dark:text-white hover:underline inline-flex items-center gap-1">
                View docs
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <Video className="w-8 h-8 text-slate-900 dark:text-white mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Video Tutorials</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Step-by-step walkthroughs and best practices</p>
              <a href="/get-started" className="text-sm font-medium text-slate-900 dark:text-white hover:underline inline-flex items-center gap-1">
                Watch tutorials
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <FileText className="w-8 h-8 text-slate-900 dark:text-white mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Knowledge Base</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Articles, tips, and troubleshooting guides</p>
              <a href="/faq" className="text-sm font-medium text-slate-900 dark:text-white hover:underline inline-flex items-center gap-1">
                Browse articles
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Submit a support request
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 text-center">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-1">Support request submitted</h3>
              <p className="text-emerald-700 dark:text-emerald-300">We'll get back to you within 24 hours.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-1">Error</h3>
              <p className="text-red-700 dark:text-red-300">Failed to submit support request. Please try again or email us directly at support@jatura.com</p>
            </div>
          )}

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleChange('category', value)}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical Issue</SelectItem>
                    <SelectItem value="billing">Billing & Subscriptions</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="integration">Integration Support</SelectItem>
                    <SelectItem value="account">Account Management</SelectItem>
                    <SelectItem value="general">General Question</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="Brief description of your issue"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Please provide as much detail as possible..."
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Request
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Response Time Info */}
          <div className="mt-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Expected Response Times</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Critical issues: Within 4 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Standard requests: Within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    General inquiries: Within 48 hours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
