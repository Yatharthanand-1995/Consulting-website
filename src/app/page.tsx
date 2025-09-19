'use client';

import { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalContent,
} from '@/components/ui';
import { Header, Footer } from '@/components/layout';
import {
  Hero,
  ServicesTeaser,
  CaseStudiesTeaser,
  InsightsTeaser,
  ImpactMetrics,
} from '@/components/sections';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>

        {/* Client Trust Section - Clean Professional */}
        <section
          className="bg-gray-50 py-16"
          aria-label="Trusted by industry leaders"
        >
          <div className="container mx-auto px-6">
            <div className="space-y-10 text-center">
              <p className="text-sm font-semibold tracking-wider text-gray-600 uppercase">
                Trusted by Fortune 500 Leaders
              </p>
              <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-6">
                {[
                  {
                    name: 'Global Bank',
                    logo: 'GB',
                    color: 'from-indigo-600 to-blue-700',
                  },
                  {
                    name: 'Tech Corp',
                    logo: 'TC',
                    color: 'from-violet-600 to-purple-700',
                  },
                  {
                    name: 'Manufacturing',
                    logo: 'MF',
                    color: 'from-emerald-600 to-teal-700',
                  },
                  {
                    name: 'Healthcare',
                    logo: 'HC',
                    color: 'from-rose-600 to-pink-700',
                  },
                  {
                    name: 'Energy Co',
                    logo: 'EC',
                    color: 'from-amber-600 to-orange-700',
                  },
                  {
                    name: 'Retail Chain',
                    logo: 'RC',
                    color: 'from-cyan-600 to-blue-700',
                  },
                ].map(client => (
                  <div
                    key={client.name}
                    className="group flex items-center justify-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                      <span className="text-sm font-bold text-gray-700">
                        {client.logo}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Teaser Section */}
        <section id="services" aria-label="Our services overview">
          <ServicesTeaser />
        </section>

        {/* Tech Divider 1 */}
        <section className="relative overflow-hidden py-16" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-indigo-900/20 to-purple-900/10" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(45deg, transparent 49%, rgba(59, 130, 246, 0.1) 50%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, rgba(99, 102, 241, 0.1) 50%, transparent 51%)
            `,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10 container mx-auto px-6">
            <div className="flex items-center justify-center space-x-4 opacity-60">
              <div className="h-px w-12 animate-pulse bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <div
                className="h-3 w-3 rotate-45 animate-spin rounded border border-blue-400"
                style={{ animationDuration: '6s' }}
              />
              <div
                className="h-px w-20 animate-pulse bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
                style={{ animationDelay: '1s' }}
              />
              <div
                className="h-2 w-2 animate-pulse rounded-full bg-purple-400"
                style={{ animationDelay: '0.5s' }}
              />
              <div
                className="h-px w-12 animate-pulse bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                style={{ animationDelay: '1.5s' }}
              />
            </div>
          </div>
        </section>

        {/* Case Studies Teaser Section */}
        <section id="case-studies" aria-label="Client success highlights">
          <CaseStudiesTeaser />
        </section>

        {/* Insights Teaser Section */}
        <section id="insights" aria-label="Latest insights preview">
          <InsightsTeaser />
        </section>

        {/* Tech Divider 2 */}
        <section className="relative overflow-hidden py-12" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-teal-900/20 to-blue-900/10" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.1) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
          <div className="relative z-10 container mx-auto px-6">
            <div className="flex items-center justify-center space-x-6 opacity-50">
              <div className="h-4 w-4 animate-ping rounded-full border border-teal-400" />
              <div className="h-px w-16 animate-pulse bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
              <div className="h-2 w-2 animate-bounce rounded bg-teal-400" />
              <div
                className="h-px w-16 animate-pulse bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                style={{ animationDelay: '1s' }}
              />
              <div
                className="h-4 w-4 animate-ping rounded-full border border-teal-400"
                style={{ animationDelay: '0.8s' }}
              />
            </div>
          </div>
        </section>

        {/* Impact Metrics Section */}
        <section id="impact-metrics" aria-label="Proven implementation results">
          <ImpactMetrics />
        </section>
      </main>

      {/* Demo Modal */}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        size="lg"
        aria-labelledby="demo-modal-title"
        aria-describedby="demo-modal-description"
      >
        <ModalHeader>
          <ModalTitle id="demo-modal-title">Component Demo Modal</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <div className="space-y-6">
            <p id="demo-modal-description">
              This is a demonstration of our modal component with backdrop blur
              and smooth animations.
            </p>

            <div className="space-y-4">
              <div className="flex space-x-2">
                <Button
                  variant="primary"
                  onClick={() => setShowModal(false)}
                  aria-label="Close demo modal"
                >
                  Close Modal
                </Button>
                <Button
                  variant="outline"
                  onClick={() => alert('Button clicked!')}
                  aria-label="Perform demo action"
                >
                  Action Button
                </Button>
              </div>

              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="mb-2 font-semibold">Modal Features:</h4>
                <ul className="space-y-1 text-sm text-slate-600" role="list">
                  <li>• Portal-based rendering</li>
                  <li>• Backdrop blur effect</li>
                  <li>• Escape key handling</li>
                  <li>• Focus management</li>
                  <li>• Smooth animations</li>
                </ul>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>

      {/* Footer */}
      <Footer />
    </div>
  );
}
