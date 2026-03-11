import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail, MapPin, Phone, MessageSquare, Clock, Globe,
  CheckCircle, ArrowRight
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4">
            <MessageSquare className="h-3 w-3 mr-1" />
            Get in Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            We're Here to Help
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you have questions about our platform, need support, or want to discuss how Jatura can transform your hiring process, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "Get a response within 24 hours",
                contact: "hello@jatura.com",
                action: "mailto:hello@jatura.com",
                label: "Send Email"
              },
              {
                icon: MessageSquare,
                title: "Live Chat",
                description: "Chat with our team in real-time",
                contact: "Available Mon-Fri, 9am-6pm",
                action: "/signup",
                label: "Start Chat"
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak with our sales team",
                contact: "USA: +1 (415) 854-9200",
                action: "tel:+14158549200",
                label: "Call Now"
              }
            ].map((method, idx) => (
              <Card key={idx} className="hover:shadow-lg transition text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {method.description}
                  </p>
                  <div className="text-slate-900 dark:text-white font-medium mb-4">
                    {method.contact}
                  </div>
                  <a href={method.action}>
                    <Button variant="outline" className="w-full" data-testid={`button-${method.label.toLowerCase().replace(' ', '-')}`}>
                      {method.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Locations */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Our Offices
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* USA Office */}
              <Card className="hover:shadow-lg transition">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                          United States
                        </h3>
                        <Badge variant="secondary">Headquarters</Badge>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        North America Operations
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Address</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 ml-6">
                        575 Market Street, Suite 2750<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Phone</span>
                      </div>
                      <a href="tel:+14158549200" className="text-blue-600 dark:text-blue-400 ml-6 hover:underline">
                        +1 (415) 854-9200
                      </a>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Business Hours</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 ml-6">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UK Office */}
              <Card className="hover:shadow-lg transition">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                          United Kingdom
                        </h3>
                        <Badge variant="secondary">European HQ</Badge>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Europe & UK Operations
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Address</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 ml-6">
                        25 Canada Square, 31st Floor<br />
                        Canary Wharf<br />
                        London E14 5LQ<br />
                        United Kingdom
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Phone</span>
                      </div>
                      <a href="tel:+442038089620" className="text-blue-600 dark:text-blue-400 ml-6 hover:underline">
                        +44 20 3808 9620
                      </a>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Business Hours</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 ml-6">
                        Monday - Friday: 9:00 AM - 6:00 PM GMT<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Support Information */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Customer Support
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Our dedicated support team is here to help you get the most out of Jatura
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Technical Support",
                  email: "support@jatura.com",
                  description: "For platform issues, bugs, or technical questions"
                },
                {
                  icon: MessageSquare,
                  title: "Sales Inquiries",
                  email: "sales@jatura.com",
                  description: "For pricing, demos, and enterprise solutions"
                },
                {
                  icon: Globe,
                  title: "General Inquiries",
                  email: "hello@jatura.com",
                  description: "For partnerships, press, and other questions"
                }
              ].map((support, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 rounded-lg mb-4 shadow-sm">
                    <support.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {support.title}
                  </h3>
                  <a href={`mailto:${support.email}`} className="text-blue-600 dark:text-blue-400 hover:underline mb-2 block">
                    {support.email}
                  </a>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {support.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "< 2 min", label: "Live Chat Response" },
              { metric: "< 4 hours", label: "Email Response" },
              { metric: "24/7", label: "Support Coverage" },
              { metric: "99.9%", label: "Customer Satisfaction" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.metric}
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies using Jatura to transform their recruiting. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.jatura.com/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/demo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Schedule a Demo
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
