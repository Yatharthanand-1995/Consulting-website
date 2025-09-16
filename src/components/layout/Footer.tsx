'use client';

import { cn } from '@/lib/utils';
import { Button, Badge } from '@/components/ui';

export interface FooterProps {
  className?: string;
}

const footerSections = {
  services: {
    title: 'Services',
    links: [
      { label: 'AI Strategy & Roadmapping', href: '/services/ai-strategy' },
      { label: 'LLM Implementation', href: '/services/llm' },
      { label: 'Computer Vision', href: '/services/computer-vision' },
      { label: 'Predictive Analytics', href: '/services/analytics' },
      { label: 'Process Automation', href: '/services/automation' },
      { label: 'AI Governance', href: '/services/governance' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press & Media', href: '/press' },
      { label: 'Partner Program', href: '/partners' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Blog & Insights', href: '/resources' },
      { label: 'Whitepapers', href: '/resources/whitepapers' },
      { label: 'ROI Calculator', href: '/tools/roi-calculator' },
      { label: 'AI Readiness Assessment', href: '/tools/assessment' },
      { label: 'Webinars', href: '/resources/webinars' },
      { label: 'Documentation', href: '/docs' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Security', href: '/security' },
      { label: 'Compliance', href: '/compliance' },
    ],
  },
};

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/genai-consulting',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/genai_consulting',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/genai-consulting',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@genai-consulting',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

const certifications = [
  { name: 'SOC 2', description: 'Security Compliance' },
  { name: 'ISO 27001', description: 'Information Security' },
  { name: 'GDPR', description: 'Data Protection' },
  { name: 'AWS Partner', description: 'Cloud Solutions' },
  { name: 'Google Cloud', description: 'ML Expertise' },
  { name: 'Azure AI', description: 'Certified Partner' },
];

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-card border-t border-border', className)}>
      {/* Main Footer Content */}
      <div className="container-professional section-professional">
        <div className="grid-24 gap-6">
          {/* Company Info */}
          <div className="col-span-24 md:col-span-12 lg:col-span-8 space-y-lg">
            <div className="flex-professional">
              <div className="relative">
                <div className="component-card bg-gradient-brand flex-center shadow-neural" style={{ width: 'var(--component-lg)', height: 'var(--component-lg)' }}>
                  <span className="text-white font-bold">AI</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-brand rounded-lg opacity-20 blur animate-pulse" />
              </div>
              <div className="space-y-xs">
                <h3 className="text-xl font-bold text-foreground">GenAI Consulting</h3>
                <p className="text-sm text-muted-foreground">Enterprise AI Solutions</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming businesses through intelligent automation and cutting-edge AI solutions.
              Where enterprise excellence meets AI innovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-sm text-sm">
              <div className="flex-professional">
                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-muted-foreground">hello@genai-consulting.com</span>
              </div>
              <div className="flex-professional">
                <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="col-span-12 md:col-span-6 lg:col-span-4 space-y-md">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-secondary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="section-content border-t border-border">
          <div className="flex-between flex-wrap gap-6">
            <div className="space-y-sm">
              <h4 className="font-semibold text-foreground">Stay Updated</h4>
              <p className="text-sm text-muted-foreground">
                Get the latest AI insights and industry reports delivered to your inbox.
              </p>
            </div>
            <div className="flex-professional">
              <Button variant="outline" className="component-button">
                Subscribe to Newsletter
              </Button>
              <Button variant="secondary" className="component-button">
                Download AI Report
              </Button>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="section-content border-t border-border space-y-lg">
          <h4 className="font-semibold text-foreground">Certifications & Partnerships</h4>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <Badge key={cert.name} variant="outline" className="text-xs">
                <div className="flex-professional" style={{ gap: 'var(--space-2)' }}>
                  <span>{cert.name}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{cert.description}</span>
                </div>
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container-professional section-content">
          <div className="flex-between flex-wrap gap-4">
            {/* Copyright */}
            <div className="flex-professional text-sm text-muted-foreground">
              <span>&copy; 2024 GenAI Consulting. All rights reserved.</span>
            </div>

            {/* Social Links */}
            <div className="flex-professional">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex-professional">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-secondary transition-colors component-button hover:bg-muted rounded-lg"
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="section-content border-t border-border flex-center flex-wrap gap-6 text-xs text-muted-foreground">
            <span>Built with ❤️ using Next.js, TypeScript & Tailwind CSS</span>
            <Badge variant="outline" size="sm">
              v2.0.0
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;