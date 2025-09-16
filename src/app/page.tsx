'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  ThemeToggle,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalContent,
  AILoader,
  TechnologyBadge,
  FeatureCard
} from '@/components/ui';
import { Header, Footer } from '@/components/layout';
import { Hero, ServicesTeaser, CaseStudiesTeaser, InsightsTeaser, ImpactMetrics } from '@/components/sections';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAIDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>

        {/* Services Teaser Section */}
        <section id="services" aria-label="Our services overview">
          <ServicesTeaser />
        </section>

        {/* Case Studies Teaser Section */}
        <section id="case-studies" aria-label="Client success highlights">
          <CaseStudiesTeaser />
        </section>

        {/* Insights Teaser Section */}
        <section id="insights" aria-label="Latest insights preview">
          <InsightsTeaser />
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
              This is a demonstration of our modal component with backdrop blur and smooth animations.
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

              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold mb-2">Modal Features:</h4>
                <ul className="text-sm text-slate-600 space-y-1" role="list">
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
