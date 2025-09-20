import { Metadata } from 'next';
import { PageHero } from '@/components/ui';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Stratex AI',
  description:
    'Learn how Stratex AI protects your privacy and handles your personal information in compliance with global privacy regulations.',
  keywords: [
    'privacy policy',
    'data protection',
    'GDPR',
    'CCPA',
    'AI consulting privacy',
  ],
};

const breadcrumbItems = [
  { label: 'Legal', href: '/privacy' },
  { label: 'Privacy Policy', current: true },
];

export default function PrivacyPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <PageHero
          title="Privacy Policy"
          subtitle="We are committed to protecting your privacy and ensuring the security of your personal information"
          breadcrumbs={breadcrumbItems}
          variant="simple"
        />

        <section className="section-professional">
          <div className="container-professional">
            <div className="mx-auto max-w-4xl space-y-8">
              {/* Last Updated */}
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-center space-x-2 text-blue-700">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">
                    Last Updated: January 15, 2024
                  </span>
                </div>
                <p className="mt-2 text-sm text-blue-600">
                  This Privacy Policy is effective as of the date above and
                  applies to all users of our services.
                </p>
              </div>

              {/* Introduction */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Introduction
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="leading-relaxed text-gray-600">
                    Stratex AI (&quot;we,&quot; &quot;our,&quot; or
                    &quot;us&quot;) is committed to protecting your privacy and
                    ensuring the security of your personal information. This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you visit our website, use
                    our services, or engage with us in any capacity.
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    As a leading AI consulting firm serving Fortune 500
                    companies, we understand the critical importance of data
                    privacy and security. We adhere to the highest standards of
                    data protection and comply with applicable privacy laws,
                    including GDPR, CCPA, and other relevant regulations.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Information We Collect
                </h2>

                <h3 className="mb-3 text-xl font-medium text-gray-900">
                  Personal Information
                </h3>
                <div className="mb-6 rounded-lg bg-gray-50 p-6">
                  <p className="mb-4 text-gray-600">
                    We may collect the following types of personal information:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                      <span>
                        <strong>Contact Information:</strong> Name, email
                        address, phone number, job title, company name
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                      <span>
                        <strong>Professional Information:</strong> Industry,
                        company size, business requirements
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                      <span>
                        <strong>Communication Data:</strong> Messages,
                        inquiries, consultation requests
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></span>
                      <span>
                        <strong>Technical Information:</strong> IP address,
                        browser type, device information, usage patterns
                      </span>
                    </li>
                  </ul>
                </div>

                <h3 className="mb-3 text-xl font-medium text-gray-900">
                  Automatically Collected Information
                </h3>
                <div className="prose prose-lg max-w-none">
                  <p className="leading-relaxed text-gray-600">
                    When you visit our website, we automatically collect certain
                    information through cookies, web beacons, and similar
                    technologies. This includes your IP address, browser type,
                    operating system, referring URLs, pages viewed, and time
                    spent on our site.
                  </p>
                </div>
              </section>

              {/* How We Use Information */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  How We Use Your Information
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 p-6">
                    <h3 className="mb-3 text-lg font-medium text-gray-900">
                      Service Delivery
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Provide AI consulting services</li>
                      <li>• Respond to inquiries and requests</li>
                      <li>• Schedule consultations and meetings</li>
                      <li>• Deliver project deliverables</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-6">
                    <h3 className="mb-3 text-lg font-medium text-gray-900">
                      Communication
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Send newsletters and insights</li>
                      <li>• Provide support and assistance</li>
                      <li>• Share relevant industry updates</li>
                      <li>• Notify about service changes</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-6">
                    <h3 className="mb-3 text-lg font-medium text-gray-900">
                      Website Improvement
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Analyze usage patterns</li>
                      <li>• Improve user experience</li>
                      <li>• Optimize content and features</li>
                      <li>• Troubleshoot technical issues</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-6">
                    <h3 className="mb-3 text-lg font-medium text-gray-900">
                      Legal Compliance
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Comply with legal obligations</li>
                      <li>• Respond to legal requests</li>
                      <li>• Protect rights and interests</li>
                      <li>• Prevent fraud and abuse</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Information Sharing and Disclosure
                </h2>
                <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-6">
                  <div className="mb-2 flex items-center space-x-2 text-red-700">
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
                  <p className="text-sm text-red-600">
                    We do not sell, trade, or rent your personal information to
                    third parties for marketing purposes.
                  </p>
                </div>

                <p className="mb-4 leading-relaxed text-gray-600">
                  We may share your information only in the following
                  circumstances:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-gray-900">
                      Service Providers
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      With trusted third-party service providers who assist us
                      in operating our website, conducting business, or serving
                      our clients, provided they agree to keep information
                      confidential.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-gray-900">
                      Legal Requirements
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      When required by law, legal process, or to respond to
                      valid government requests.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-gray-900">
                      Business Transfers
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      In connection with any merger, acquisition, or sale of
                      company assets, subject to confidentiality agreements.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-gray-900">Consent</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      With your explicit consent for specific purposes not
                      covered by this policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Data Security
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
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">
                      Enterprise-Grade Security
                    </span>
                  </div>
                  <p className="text-sm text-green-600">
                    We implement industry-leading security measures to protect
                    your personal information.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-2 font-medium text-gray-900">
                      Encryption
                    </h4>
                    <p className="text-sm text-gray-600">
                      All data transmission and storage uses industry-standard
                      encryption
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-2 font-medium text-gray-900">
                      Access Controls
                    </h4>
                    <p className="text-sm text-gray-600">
                      Strict access controls and authentication for all systems
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h4 className="mb-2 font-medium text-gray-900">
                      Monitoring
                    </h4>
                    <p className="text-sm text-gray-600">
                      24/7 security monitoring and threat detection systems
                    </p>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Your Privacy Rights
                </h2>
                <p className="mb-6 leading-relaxed text-gray-600">
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-xs font-bold text-white">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Right to Access
                        </h4>
                        <p className="text-sm text-gray-600">
                          Request access to your personal information we hold
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-xs font-bold text-white">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Right to Rectification
                        </h4>
                        <p className="text-sm text-gray-600">
                          Request correction of inaccurate information
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-xs font-bold text-white">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Right to Erasure
                        </h4>
                        <p className="text-sm text-gray-600">
                          Request deletion of your personal information
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-xs font-bold text-white">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Right to Portability
                        </h4>
                        <p className="text-sm text-gray-600">
                          Request transfer of your data to another service
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-xs font-bold text-white">5</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Right to Object
                        </h4>
                        <p className="text-sm text-gray-600">
                          Object to processing of your personal information
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-xs font-bold text-white">6</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Right to Restrict
                        </h4>
                        <p className="text-sm text-gray-600">
                          Request restriction of processing activities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-6">
                  <h4 className="mb-2 font-medium text-blue-900">
                    How to Exercise Your Rights
                  </h4>
                  <p className="mb-3 text-sm text-blue-700">
                    To exercise any of these rights, please contact us using the
                    information provided below. We will respond to your request
                    within 30 days.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <a
                      href="mailto:privacy@stratex-ai.com"
                      className="font-medium text-blue-600 hover:text-blue-700"
                    >
                      privacy@stratex-ai.com
                    </a>
                    <span className="text-blue-400">|</span>
                    <span className="text-blue-700">1-800-STRATEX</span>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Contact Us
                </h2>
                <div className="rounded-lg bg-gray-50 p-6">
                  <p className="mb-4 text-gray-600">
                    If you have any questions about this Privacy Policy or our
                    privacy practices, please contact us:
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-medium text-gray-900">
                        General Privacy Inquiries
                      </h4>
                      <p className="mb-1 text-sm text-gray-600">
                        Email: privacy@stratex-ai.com
                      </p>
                      <p className="text-sm text-gray-600">
                        Phone: 1-800-STRATEX
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-gray-900">
                        Data Protection Officer
                      </h4>
                      <p className="mb-1 text-sm text-gray-600">
                        Email: dpo@stratex-ai.com
                      </p>
                      <p className="text-sm text-gray-600">
                        Response Time: Within 72 hours
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <h4 className="mb-2 font-medium text-gray-900">
                      Mailing Address
                    </h4>
                    <p className="text-sm text-gray-600">
                      Stratex AI, Inc.
                      <br />
                      Attn: Privacy Officer
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

              {/* Policy Updates */}
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  Policy Updates
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="leading-relaxed text-gray-600">
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices, technology, legal
                    requirements, or other factors. We will notify you of any
                    material changes by posting the updated policy on our
                    website with a new effective date.
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    For significant changes that materially affect your rights,
                    we will provide additional notice through email or prominent
                    website notifications at least 30 days before the changes
                    take effect.
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
