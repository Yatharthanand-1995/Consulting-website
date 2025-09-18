'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Input,
} from '@/components/ui';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const offices = [
    {
      city: 'San Francisco',
      address: '101 California Street\nSuite 2450\nSan Francisco, CA 94111',
      phone: '+1 (555) 123-4567',
      email: 'sf@stratex-ai.com',
    },
    {
      city: 'New York',
      address: '200 Park Avenue\nSuite 1700\nNew York, NY 10166',
      phone: '+1 (555) 234-5678',
      email: 'ny@stratex-ai.com',
    },
    {
      city: 'London',
      address: '25 Old Broad Street\nLevel 42\nLondon EC2N 1HQ',
      phone: '+44 20 1234 5678',
      email: 'london@stratex-ai.com',
    },
  ];

  const contactMethods = [
    {
      title: 'General Inquiries',
      description: 'Questions about our services or capabilities',
      email: 'hello@stratex-ai.com',
      phone: '+1 (555) 100-0000',
      icon: '💬',
    },
    {
      title: 'New Business',
      description: 'Ready to start your AI transformation journey',
      email: 'business@stratex-ai.com',
      phone: '+1 (555) 200-0000',
      icon: '🚀',
    },
    {
      title: 'Partnership Opportunities',
      description: 'Interested in partnering with Stratex AI',
      email: 'partnerships@stratex-ai.com',
      phone: '+1 (555) 300-0000',
      icon: '🤝',
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="from-background via-background to-muted/20 bg-gradient-to-br py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="gradient" className="mb-6">
              Get In Touch
            </Badge>
            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
              <span className="from-secondary to-accent bg-gradient-to-r bg-clip-text text-transparent">
                Let&apos;s Transform Your Business Together
              </span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed lg:text-2xl">
              Ready to harness the power of AI? Our experts are here to help you
              navigate your transformation journey with confidence and proven
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {contactMethods.map((method, index) => (
                <Card key={index} variant="elevated" hover="lift" padding="lg">
                  <CardHeader>
                    <div className="mb-4 text-4xl">{method.icon}</div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {method.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Email:</strong>{' '}
                        <a
                          href={`mailto:${method.email}`}
                          className="text-secondary hover:underline"
                        >
                          {method.email}
                        </a>
                      </div>
                      <div>
                        <strong>Phone:</strong>{' '}
                        <a
                          href={`tel:${method.phone}`}
                          className="text-secondary hover:underline"
                        >
                          {method.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6 text-3xl font-bold">
                  Start Your AI Journey
                </h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your project and we&apos;ll connect you with the
                  right experts to discuss your specific needs and objectives.
                </p>

                {isSubmitted ? (
                  <Card variant="neural" padding="lg" className="text-center">
                    <div className="mb-4 text-4xl">✅</div>
                    <h3 className="text-success mb-2 text-xl font-bold">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for your interest. Our team will contact you
                      within 24 hours.
                    </p>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <div className="border-b border-slate-100 pb-4">
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">
                          Personal Information
                        </h3>
                        <p className="text-sm text-slate-600">
                          Basic details to get started
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col">
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="h-12 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-500 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                            required
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Email *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@company.com"
                            className="h-12 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-500 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col">
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Company *
                          </label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name"
                            className="h-12 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-500 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                            required
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Role
                          </label>
                          <Input
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            placeholder="CEO, CTO, etc."
                            className="h-12 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-500 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col">
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Phone
                          </label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                            className="h-12 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-500 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                          />
                        </div>
                        <div className="flex flex-col">
                          {/* Empty div with same structure for perfect alignment */}
                          <div className="mb-2 h-6"></div>
                          <div className="h-12"></div>
                        </div>
                      </div>
                    </div>

                    {/* Project Information */}
                    <div className="space-y-6">
                      <div className="border-b border-slate-100 pb-4">
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">
                          Project Information
                        </h3>
                        <p className="text-sm text-slate-600">
                          Help us understand your requirements
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col">
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Project Type
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-slate-900 focus:border-slate-500 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                          >
                            <option value="">Select project type</option>
                            <option value="ai-strategy">
                              AI Strategy & Roadmapping
                            </option>
                            <option value="llm-implementation">
                              LLM Implementation
                            </option>
                            <option value="computer-vision">
                              Computer Vision
                            </option>
                            <option value="predictive-analytics">
                              Predictive Analytics
                            </option>
                            <option value="process-automation">
                              Process Automation
                            </option>
                            <option value="ai-governance">AI Governance</option>
                          </select>
                        </div>
                        <div className="flex flex-col">
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-slate-900 focus:border-slate-500 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                          >
                            <option value="">Select budget range</option>
                            <option value="50k-100k">$50K - $100K</option>
                            <option value="100k-250k">$100K - $250K</option>
                            <option value="250k-500k">$250K - $500K</option>
                            <option value="500k-1m">$500K - $1M</option>
                            <option value="1m+">$1M+</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col">
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-slate-900 focus:border-slate-500 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1-3-months">1-3 months</option>
                            <option value="3-6-months">3-6 months</option>
                            <option value="6-12-months">6-12 months</option>
                            <option value="12-months+">12+ months</option>
                          </select>
                        </div>
                        <div className="flex flex-col">
                          {/* Empty div with same structure for perfect alignment */}
                          <div className="mb-2 h-6"></div>
                          <div className="h-12"></div>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Project Details *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full resize-none rounded-lg border border-slate-300 bg-white p-4 text-slate-900 placeholder-slate-500 focus:border-slate-500 focus:ring-2 focus:ring-slate-500 focus:outline-none"
                          placeholder="Tell us about your project goals, challenges, and what you hope to achieve with AI..."
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Section */}
                    <div className="space-y-4 border-t border-slate-100 pt-6">
                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="h-14 w-full text-lg font-medium shadow-lg transition-all duration-200 hover:shadow-xl"
                        loading={isSubmitting}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center space-x-2">
                            <svg
                              className="h-5 w-5 animate-spin"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            <span>Sending Message...</span>
                          </span>
                        ) : (
                          'Send Message & Start Your AI Journey'
                        )}
                      </Button>

                      <div className="space-y-2 text-center">
                        <p className="text-xs text-slate-500">
                          By submitting this form, you agree to our Privacy
                          Policy and Terms of Service.
                        </p>
                        <p className="text-xs text-slate-400">
                          We&apos;ll never share your information with third
                          parties. Response within 24 hours.
                        </p>
                      </div>
                    </div>
                  </form>
                )}
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="mb-6 text-3xl font-bold">Our Offices</h2>
                <p className="text-muted-foreground mb-8">
                  With offices across major business hubs, we&apos;re always
                  close by to provide hands-on support for your AI
                  transformation.
                </p>

                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} variant="outlined" padding="lg">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <span className="mr-3 text-2xl">📍</span>
                          {office.city}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div>
                            <strong>Address:</strong>
                            <div className="text-muted-foreground mt-1 whitespace-pre-line">
                              {office.address}
                            </div>
                          </div>
                          <div>
                            <strong>Phone:</strong>{' '}
                            <a
                              href={`tel:${office.phone}`}
                              className="text-secondary hover:underline"
                            >
                              {office.phone}
                            </a>
                          </div>
                          <div>
                            <strong>Email:</strong>{' '}
                            <a
                              href={`mailto:${office.email}`}
                              className="text-secondary hover:underline"
                            >
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Calendar Integration */}
                <div className="mt-8">
                  <Card variant="neural" padding="lg">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Schedule a Meeting
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Prefer to speak directly? Book a 30-minute strategy call
                        with our experts.
                      </p>
                      <Button variant="gradient" className="w-full">
                        📅 Book Strategy Call
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer className="mt-0" />
    </div>
  );
}
