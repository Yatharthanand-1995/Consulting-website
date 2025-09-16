'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { Button, Badge, Card, CardHeader, CardTitle, CardContent, Input } from '@/components/ui';
import { cn } from '@/lib/utils';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        name: '', email: '', company: '', role: '', phone: '',
        projectType: '', budget: '', timeline: '', message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const offices = [
    {
      city: 'San Francisco',
      address: '101 California Street\nSuite 2450\nSan Francisco, CA 94111',
      phone: '+1 (555) 123-4567',
      email: 'sf@genai-consulting.com',
    },
    {
      city: 'New York',
      address: '200 Park Avenue\nSuite 1700\nNew York, NY 10166',
      phone: '+1 (555) 234-5678',
      email: 'ny@genai-consulting.com',
    },
    {
      city: 'London',
      address: '25 Old Broad Street\nLevel 42\nLondon EC2N 1HQ',
      phone: '+44 20 1234 5678',
      email: 'london@genai-consulting.com',
    },
  ];

  const contactMethods = [
    {
      title: 'General Inquiries',
      description: 'Questions about our services or capabilities',
      email: 'hello@genai-consulting.com',
      phone: '+1 (555) 100-0000',
      icon: '💬',
    },
    {
      title: 'New Business',
      description: 'Ready to start your AI transformation journey',
      email: 'business@genai-consulting.com',
      phone: '+1 (555) 200-0000',
      icon: '🚀',
    },
    {
      title: 'Partnership Opportunities',
      description: 'Interested in partnering with GenAI Consulting',
      email: 'partnerships@genai-consulting.com',
      phone: '+1 (555) 300-0000',
      icon: '🤝',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gradient" className="mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Let's Transform Your Business Together
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ready to harness the power of AI? Our experts are here to help you navigate
              your transformation journey with confidence and proven results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} variant="elevated" hover="lift" padding="lg">
                  <CardHeader>
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Email:</strong>{' '}
                        <a href={`mailto:${method.email}`} className="text-secondary hover:underline">
                          {method.email}
                        </a>
                      </div>
                      <div>
                        <strong>Phone:</strong>{' '}
                        <a href={`tel:${method.phone}`} className="text-secondary hover:underline">
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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Start Your AI Journey</h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your project and we'll connect you with the right experts
                  to discuss your specific needs and objectives.
                </p>

                {isSubmitted ? (
                  <Card variant="neural" padding="lg" className="text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-success mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for your interest. Our team will contact you within 24 hours.
                    </p>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company *</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Role</label>
                        <Input
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          placeholder="CEO, CTO, etc."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Project Type</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                          <option value="">Select project type</option>
                          <option value="ai-strategy">AI Strategy & Roadmapping</option>
                          <option value="llm-implementation">LLM Implementation</option>
                          <option value="computer-vision">Computer Vision</option>
                          <option value="predictive-analytics">Predictive Analytics</option>
                          <option value="process-automation">Process Automation</option>
                          <option value="ai-governance">AI Governance</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
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

                    <div>
                      <label className="block text-sm font-medium mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="12-months+">12+ months</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full p-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="Tell us about your project goals, challenges, and what you hope to achieve with AI..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                      We'll never share your information with third parties.
                    </p>
                  </form>
                )}
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                <p className="text-muted-foreground mb-8">
                  With offices across major business hubs, we're always close by to provide
                  hands-on support for your AI transformation.
                </p>

                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} variant="outlined" padding="lg">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center">
                          <span className="text-2xl mr-3">📍</span>
                          {office.city}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div>
                            <strong>Address:</strong>
                            <div className="text-muted-foreground whitespace-pre-line mt-1">
                              {office.address}
                            </div>
                          </div>
                          <div>
                            <strong>Phone:</strong>{' '}
                            <a href={`tel:${office.phone}`} className="text-secondary hover:underline">
                              {office.phone}
                            </a>
                          </div>
                          <div>
                            <strong>Email:</strong>{' '}
                            <a href={`mailto:${office.email}`} className="text-secondary hover:underline">
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
                      <CardTitle className="text-xl">Schedule a Meeting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Prefer to speak directly? Book a 30-minute strategy call with our experts.
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