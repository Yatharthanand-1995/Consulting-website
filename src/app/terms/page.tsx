import { Metadata } from 'next';
import { PageHero } from '@/components/ui';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Stratex AI',
  description:
    'Review the terms and conditions governing the use of Stratex AI consulting services and website.',
  keywords: [
    'terms of service',
    'terms and conditions',
    'AI consulting terms',
    'legal agreement',
  ],
};

const breadcrumbItems = [
  { label: 'Legal', href: '/terms' },
  { label: 'Terms of Service', current: true },
];

export default function TermsPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <PageHero
          title="Terms of Service"
          subtitle="Please read these terms carefully before using our services or website"
          breadcrumbs={breadcrumbItems}
          variant="simple"
        />

        <section className="section-professional">
          <div className="container-professional">
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Last Updated */}
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-center space-x-2 text-amber-700">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">
                    Last Updated: January 15, 2024
                  </span>
                </div>
                <p className="mt-2 text-sm text-amber-600">
                  By accessing or using our services, you agree to be bound by
                  these Terms of Service.
                </p>
              </div>

              {/* Introduction */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Agreement to Terms
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="leading-relaxed text-gray-600">
                    These Terms of Service (&quot;Terms&quot;) constitute a
                    legally binding agreement between you and Stratex AI, Inc.
                    (&quot;Stratex AI,&quot; &quot;we,&quot; &quot;our,&quot; or
                    &quot;us&quot;) regarding your use of our website, services,
                    and any related applications or platforms (collectively, the
                    &quot;Services&quot;).
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    By accessing or using our Services, you acknowledge that you
                    have read, understood, and agree to be bound by these Terms.
                    If you do not agree to these Terms, you may not access or
                    use our Services.
                  </p>
                </div>
              </section>

              {/* Services Description */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Our Services
                </h2>

                <div className="mb-6 grid gap-6 md:grid-cols-3">
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                    <h3 className="mb-3 text-lg font-medium text-blue-900">
                      AI Strategy Consulting
                    </h3>
                    <p className="text-sm text-blue-700">
                      Strategic planning and implementation guidance for
                      enterprise AI transformation initiatives.
                    </p>
                  </div>
                  <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                    <h3 className="mb-3 text-lg font-medium text-green-900">
                      Technical Implementation
                    </h3>
                    <p className="text-sm text-green-700">
                      Hands-on AI solution development, deployment, and
                      integration services.
                    </p>
                  </div>
                  <div className="rounded-lg border border-purple-200 bg-purple-50 p-6">
                    <h3 className="mb-3 text-lg font-medium text-purple-900">
                      Training & Support
                    </h3>
                    <p className="text-sm text-purple-700">
                      Team training, change management, and ongoing support for
                      AI initiatives.
                    </p>
                  </div>
                </div>

                <p className="leading-relaxed text-gray-600">
                  Stratex AI provides enterprise AI consulting services
                  including strategy development, technical implementation, and
                  ongoing support. Our services are designed exclusively for
                  business entities and are subject to separate service
                  agreements.
                </p>
              </section>

              {/* Eligibility */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Eligibility and Account Requirements
                </h2>

                <div className="mb-6 rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-lg font-medium text-gray-900">
                    Who Can Use Our Services
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                      <span>
                        Business entities and organizations seeking AI
                        consulting services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                      <span>
                        Individuals acting in a professional capacity on behalf
                        of an organization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                      <span>
                        Users who are at least 18 years old and legally capable
                        of entering contracts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                      <span>
                        Entities not prohibited by applicable laws from
                        receiving our services
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                  <h4 className="mb-2 font-medium text-red-900">
                    Account Security
                  </h4>
                  <p className="text-sm text-red-700">
                    You are responsible for maintaining the confidentiality of
                    your account credentials and for all activities that occur
                    under your account. Notify us immediately of any
                    unauthorized use.
                  </p>
                </div>
              </section>

              {/* Acceptable Use */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Acceptable Use Policy
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-green-900">
                      ✓ Permitted Uses
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start">
                        <span className="mr-2 text-green-600">•</span>
                        <span>Accessing our website for business purposes</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-600">•</span>
                        <span>Requesting information about our services</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-600">•</span>
                        <span>Engaging with our content and resources</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-600">•</span>
                        <span>Communicating with our team professionally</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-green-600">•</span>
                        <span>
                          Using our services for legitimate business needs
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium text-red-900">
                      ✗ Prohibited Uses
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start">
                        <span className="mr-2 text-red-600">•</span>
                        <span>
                          Violating any applicable laws or regulations
                        </span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-red-600">•</span>
                        <span>Attempting to gain unauthorized access</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-red-600">•</span>
                        <span>Distributing malware or harmful code</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-red-600">•</span>
                        <span>Impersonating our company or employees</span>
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2 text-red-600">•</span>
                        <span>Using services for competitive intelligence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Intellectual Property Rights
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="mb-2 text-lg font-medium text-gray-900">
                      Our Intellectual Property
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      All content, features, and functionality of our Services,
                      including but not limited to text, graphics, logos,
                      images, software, methodologies, frameworks, and designs
                      are owned by Stratex AI and are protected by copyright,
                      trademark, and other intellectual property laws.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="mb-2 text-lg font-medium text-gray-900">
                      Your Intellectual Property
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      You retain ownership of any intellectual property you
                      provide to us. By engaging our services, you grant us a
                      limited license to use your IP solely for the purpose of
                      delivering the agreed-upon services.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="mb-2 text-lg font-medium text-gray-900">
                      Work Product
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Intellectual property rights in deliverables and work
                      product created specifically for your project will be
                      addressed in separate service agreements and statement of
                      work documents.
                    </p>
                  </div>
                </div>
              </section>

              {/* Service Agreements */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Service Agreements and Payment Terms
                </h2>

                <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-6">
                  <h3 className="mb-3 text-lg font-medium text-blue-900">
                    Professional Services
                  </h3>
                  <p className="text-sm leading-relaxed text-blue-700">
                    Our consulting services are provided under separate Master
                    Service Agreements (MSA) and Statements of Work (SOW) that
                    detail specific terms, deliverables, timelines, and payment
                    schedules.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 p-6">
                    <h4 className="mb-3 font-medium text-gray-900">
                      Payment Terms
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Invoices are due within 30 days of receipt</li>
                      <li>• Late payments may incur interest charges</li>
                      <li>• All fees are non-refundable unless specified</li>
                      <li>• Expenses are billed separately</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6">
                    <h4 className="mb-3 font-medium text-gray-900">
                      Service Delivery
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Timelines specified in SOW documents</li>
                      <li>• Client cooperation required for delivery</li>
                      <li>• Changes may affect timeline and cost</li>
                      <li>• Quality assurance processes apply</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Confidentiality */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Confidentiality and Data Protection
                </h2>

                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-6">
                  <div className="mb-2 flex items-center space-x-2 text-green-700">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">
                      Confidentiality Commitment
                    </span>
                  </div>
                  <p className="text-sm text-green-700">
                    We maintain strict confidentiality regarding all client
                    information and business data shared during our engagement.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Non-Disclosure
                      </h4>
                      <p className="text-sm text-gray-600">
                        All confidential information shared by clients is
                        protected under separate Non-Disclosure Agreements
                        (NDAs).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Data Security
                      </h4>
                      <p className="text-sm text-gray-600">
                        We implement enterprise-grade security measures to
                        protect all client data and business information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Access Controls
                      </h4>
                      <p className="text-sm text-gray-600">
                        Only authorized team members have access to client
                        information on a need-to-know basis.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Disclaimers */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Disclaimers and Limitations
                </h2>

                <div className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-6">
                  <div className="mb-2 flex items-center space-x-2 text-yellow-700">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">Important Notice</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Please read these disclaimers carefully as they limit our
                    liability and define the scope of our services.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-lg font-medium text-gray-900">
                      Service &quot;As Is&quot; Basis
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Our services are provided on an &quot;as is&quot; and
                      &quot;as available&quot; basis. While we strive for
                      excellence, we make no warranties regarding specific
                      outcomes or results unless explicitly stated in separate
                      service agreements.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium text-gray-900">
                      Limitation of Liability
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Our liability for any damages arising from our services is
                      limited to the amount paid for the specific services that
                      gave rise to the claim, unless otherwise specified in
                      separate service agreements.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium text-gray-900">
                      Third-Party Services
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      We are not responsible for the availability, content, or
                      practices of third-party services or platforms that may be
                      integrated with or recommended as part of our consulting
                      services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Termination */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Termination
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 p-6">
                    <h3 className="mb-3 text-lg font-medium text-gray-900">
                      By You
                    </h3>
                    <p className="mb-3 text-sm text-gray-600">
                      You may terminate your use of our Services at any time by
                      ceasing to access our website and providing written notice
                      for ongoing service engagements.
                    </p>
                    <p className="text-sm text-gray-600">
                      Termination terms for specific projects are governed by
                      separate service agreements.
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6">
                    <h3 className="mb-3 text-lg font-medium text-gray-900">
                      By Us
                    </h3>
                    <p className="mb-3 text-sm text-gray-600">
                      We reserve the right to terminate or suspend access to our
                      Services immediately, without prior notice, for violations
                      of these Terms.
                    </p>
                    <p className="text-sm text-gray-600">
                      Upon termination, your right to use our Services ceases
                      immediately.
                    </p>
                  </div>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Governing Law and Dispute Resolution
                </h2>

                <div className="rounded-lg bg-gray-50 p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium text-gray-900">
                        Governing Law
                      </h4>
                      <p className="text-sm text-gray-600">
                        These Terms are governed by and construed in accordance
                        with the laws of the State of California, United States,
                        without regard to conflict of law principles.
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-2 font-medium text-gray-900">
                        Dispute Resolution
                      </h4>
                      <p className="text-sm text-gray-600">
                        Any disputes arising from these Terms or our Services
                        will be resolved through binding arbitration in San
                        Francisco, California, in accordance with the rules of
                        the American Arbitration Association.
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-2 font-medium text-gray-900">
                        Jurisdiction
                      </h4>
                      <p className="text-sm text-gray-600">
                        You consent to the personal jurisdiction of the state
                        and federal courts located in San Francisco, California
                        for any actions not subject to arbitration.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Contact Information
                </h2>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                  <p className="mb-4 text-blue-700">
                    If you have questions about these Terms of Service, please
                    contact us:
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-medium text-blue-900">
                        Legal Department
                      </h4>
                      <p className="mb-1 text-sm text-blue-700">
                        Email: legal@stratex-ai.com
                      </p>
                      <p className="text-sm text-blue-700">
                        Phone: 1-800-STRATEX
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-blue-900">
                        General Inquiries
                      </h4>
                      <p className="mb-1 text-sm text-blue-700">
                        Email: info@stratex-ai.com
                      </p>
                      <p className="text-sm text-blue-700">
                        Response Time: Within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-blue-200 pt-4">
                    <h4 className="mb-2 font-medium text-blue-900">
                      Mailing Address
                    </h4>
                    <p className="text-sm text-blue-700">
                      Stratex AI, Inc.
                      <br />
                      Attn: Legal Department
                      <br />
                      123 Business District
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Changes to These Terms
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="leading-relaxed text-gray-600">
                    We reserve the right to modify these Terms at any time.
                    Material changes will be communicated through email
                    notification to registered users and prominent website
                    notices at least 30 days before the effective date.
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    Your continued use of our Services after any modifications
                    constitutes acceptance of the updated Terms. If you do not
                    agree to the changes, you must stop using our Services.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
