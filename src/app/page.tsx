'use client';

import { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalContent,
  LoadingState,
  TechDivider,
} from '@/components/ui';
import { Header, Footer } from '@/components/layout';
import { Hero, ClientTrust } from '@/components/sections';
import dynamic from 'next/dynamic';

// Lazy load components below the fold for better performance
const ServicesTeaser = dynamic(() => import('@/components/sections/ServicesTeaser'), {
  loading: () => <LoadingState variant="section" className="bg-gray-50" />,
});

const CaseStudiesTeaser = dynamic(() => import('@/components/sections/CaseStudiesTeaser'), {
  loading: () => <LoadingState variant="section" className="bg-white" />,
});

const InsightsTeaser = dynamic(() => import('@/components/sections/InsightsTeaser'), {
  loading: () => <LoadingState variant="section" className="bg-gray-50" />,
});

const ImpactMetrics = dynamic(() => import('@/components/sections/ImpactMetrics'), {
  loading: () => <LoadingState variant="section" className="bg-white" />,
});

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

        {/* Client Trust Section */}
        <ClientTrust variant="professional" />

        {/* Services Teaser Section */}
        <section id="services" aria-label="Our services overview" className="section-optimize">
          <ServicesTeaser />
        </section>

        {/* Tech Divider 1 */}
        <TechDivider variant="blue" pattern="diagonal" size="lg" />

        {/* Case Studies Teaser Section */}
        <section id="case-studies" aria-label="Client success highlights" className="section-optimize">
          <CaseStudiesTeaser />
        </section>

        {/* Insights Teaser Section */}
        <section id="insights" aria-label="Latest insights preview" className="section-optimize">
          <InsightsTeaser />
        </section>

        {/* Tech Divider 2 */}
        <TechDivider variant="teal" pattern="radial" size="md" />

        {/* Impact Metrics Section */}
        <section id="impact-metrics" aria-label="Proven implementation results" className="section-optimize">
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
