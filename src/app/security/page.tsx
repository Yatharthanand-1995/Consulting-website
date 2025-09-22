import { Metadata } from 'next';
import { PageHero, Badge } from '@/components/ui';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Security & Compliance | Stratex AI',
  description:
    'Learn about our enterprise-grade security measures, compliance certifications, and data protection practices.',
  keywords: [
    'security',
    'compliance',
    'data protection',
    'SOC 2',
    'GDPR',
    'enterprise security',
  ],
};

const breadcrumbItems = [
  { label: 'Company', href: '/security' },
  { label: 'Security & Compliance', current: true },
];

export default function SecurityPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <PageHero
          title="Security & Compliance"
          description="Enterprise-grade security and compliance practices that Fortune 500 companies trust"
        />

        <section className="section-professional">
          <div className="container-professional">
            <div className="mx-auto max-w-6xl space-y-12">
              {/* Security Overview */}
              <section>
                <div className="mb-12 text-center">
                  <div className="mb-4 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2">
                    <svg
                      className="mr-2 h-5 w-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium text-green-700">
                      Security First Approach
                    </span>
                  </div>
                  <h2 className="mb-4 text-3xl font-semibold text-gray-900">
                    Your Data Security is Our Priority
                  </h2>
                  <p className="mx-auto max-w-3xl text-lg text-gray-600">
                    We implement comprehensive security measures and maintain
                    industry-leading compliance standards to protect your most
                    sensitive business information and AI implementations.
                  </p>
                </div>

                <div className="mb-12 grid gap-6 lg:grid-cols-4">
                  <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <svg
                        className="h-6 w-6 text-white"
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
                    <h3 className="mb-2 font-semibold text-blue-900">
                      Zero Trust Architecture
                    </h3>
                    <p className="text-sm text-blue-700">
                      End-to-end security with no implicit trust
                    </p>
                  </div>

                  <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="mb-2 font-semibold text-green-900">
                      SOC 2 Type II
                    </h3>
                    <p className="text-sm text-green-700">
                      Independently verified security controls
                    </p>
                  </div>

                  <div className="rounded-lg border border-purple-200 bg-purple-50 p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                      <svg
                        className="h-6 w-6 text-white"
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
                    <h3 className="mb-2 font-semibold text-purple-900">
                      GDPR Compliant
                    </h3>
                    <p className="text-sm text-purple-700">
                      Full data protection compliance
                    </p>
                  </div>

                  <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600">
                      <svg
                        className="h-6 w-6 text-white"
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
                    <h3 className="mb-2 font-semibold text-red-900">
                      24/7 Monitoring
                    </h3>
                    <p className="text-sm text-red-700">
                      Continuous threat detection and response
                    </p>
                  </div>
                </div>
              </section>

              {/* Compliance Certifications */}
              <section>
                <h2 className="mb-8 text-2xl font-semibold text-gray-900">
                  Compliance Certifications & Standards
                </h2>

                <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg">
                    <div className="mb-4 flex items-center justify-between">
                      <img
                        src="/img/certifications/soc2-logo.svg"
                        alt="SOC 2 Type II"
                        className="h-12 w-auto"
                      />
                      <Badge variant="success" className="text-xs">
                        Current
                      </Badge>
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      SOC 2 Type II
                    </h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Independently audited security, availability, and
                      confidentiality controls.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div>Audit Period: Jan 2024 - Dec 2024</div>
                      <div>Auditor: Deloitte & Touche LLP</div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg">
                    <div className="mb-4 flex items-center justify-between">
                      <img
                        src="/img/certifications/iso27001-logo.svg"
                        alt="ISO 27001"
                        className="h-12 w-auto"
                      />
                      <Badge variant="success" className="text-xs">
                        Current
                      </Badge>
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      ISO 27001:2013
                    </h3>
                    <p className="mb-3 text-sm text-gray-600">
                      International standard for information security management
                      systems.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div>Certification: Valid until Dec 2025</div>
                      <div>Authority: BSI Group</div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg">
                    <div className="mb-4 flex items-center justify-between">
                      <img
                        src="/img/certifications/gdpr-logo.svg"
                        alt="GDPR Compliant"
                        className="h-12 w-auto"
                      />
                      <Badge variant="success" className="text-xs">
                        Compliant
                      </Badge>
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      GDPR Compliance
                    </h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Full compliance with EU General Data Protection
                      Regulation.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div>DPO: Certified Data Protection Officer</div>
                      <div>Privacy by Design Framework</div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg">
                    <div className="mb-4 flex items-center justify-between">
                      <img
                        src="/img/certifications/hipaa-logo.svg"
                        alt="HIPAA Compliant"
                        className="h-12 w-auto"
                      />
                      <Badge variant="success" className="text-xs">
                        Compliant
                      </Badge>
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      HIPAA Compliance
                    </h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Healthcare data protection for medical AI implementations.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div>BAA: Business Associate Agreements</div>
                      <div>PHI: Protected Health Information</div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg">
                    <div className="mb-4 flex items-center justify-between">
                      <img
                        src="/img/certifications/pci-logo.svg"
                        alt="PCI DSS"
                        className="h-12 w-auto"
                      />
                      <Badge variant="success" className="text-xs">
                        Level 1
                      </Badge>
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      PCI DSS Level 1
                    </h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Payment card industry data security standards compliance.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div>QSA: Qualified Security Assessor</div>
                      <div>Annual Validation</div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg">
                    <div className="mb-4 flex items-center justify-between">
                      <img
                        src="/img/certifications/fedramp-logo.svg"
                        alt="FedRAMP"
                        className="h-12 w-auto"
                      />
                      <Badge variant="warning" className="text-xs">
                        In Progress
                      </Badge>
                    </div>
                    <h3 className="mb-2 font-semibold text-gray-900">
                      FedRAMP Moderate
                    </h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Federal Risk and Authorization Management Program.
                    </p>
                    <div className="text-xs text-gray-500">
                      <div>ATO: Expected Q2 2024</div>
                      <div>3PAO: Third Party Assessment</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security Architecture */}
              <section>
                <h2 className="mb-8 text-2xl font-semibold text-gray-900">
                  Security Architecture
                </h2>

                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h3 className="mb-2 text-lg font-medium text-gray-900">
                        Infrastructure Security
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                          • Multi-cloud architecture with AWS, Azure, and GCP
                        </li>
                        <li>
                          • Private cloud environments for sensitive workloads
                        </li>
                        <li>• Network segmentation and micro-segmentation</li>
                        <li>• DDoS protection and Web Application Firewall</li>
                        <li>
                          • Encrypted data in transit and at rest (AES-256)
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-600 pl-6">
                      <h3 className="mb-2 text-lg font-medium text-gray-900">
                        Access Controls
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Multi-factor authentication (MFA) mandatory</li>
                        <li>• Role-based access control (RBAC)</li>
                        <li>• Principle of least privilege</li>
                        <li>
                          • Just-in-time (JIT) access for privileged operations
                        </li>
                        <li>• Regular access reviews and certifications</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-600 pl-6">
                      <h3 className="mb-2 text-lg font-medium text-gray-900">
                        Data Protection
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Data classification and labeling</li>
                        <li>• Encryption key management (HSM)</li>
                        <li>• Data loss prevention (DLP) solutions</li>
                        <li>• Secure data disposal and retention policies</li>
                        <li>• Data residency and sovereignty controls</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="border-l-4 border-red-600 pl-6">
                      <h3 className="mb-2 text-lg font-medium text-gray-900">
                        Monitoring & Response
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 24/7 Security Operations Center (SOC)</li>
                        <li>• SIEM and behavioral analytics</li>
                        <li>• Automated threat detection and response</li>
                        <li>• Incident response and business continuity</li>
                        <li>• Regular penetration testing and red teams</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-yellow-600 pl-6">
                      <h3 className="mb-2 text-lg font-medium text-gray-900">
                        Application Security
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Secure development lifecycle (SDLC)</li>
                        <li>
                          • Static and dynamic application security testing
                        </li>
                        <li>
                          • Dependency scanning and vulnerability management
                        </li>
                        <li>• Container security and image scanning</li>
                        <li>• API security and rate limiting</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-indigo-600 pl-6">
                      <h3 className="mb-2 text-lg font-medium text-gray-900">
                        AI/ML Security
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                          • Model security and adversarial attack protection
                        </li>
                        <li>• Training data privacy and anonymization</li>
                        <li>• Federated learning and differential privacy</li>
                        <li>• AI model versioning and audit trails</li>
                        <li>• Bias detection and fairness monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security Practices */}
              <section>
                <h2 className="mb-8 text-2xl font-semibold text-gray-900">
                  Security Practices & Policies
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-4 text-lg font-medium text-gray-900">
                      Employee Security
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Background Verification
                          </h4>
                          <p className="text-xs text-gray-600">
                            Comprehensive background checks for all employees
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Security Training
                          </h4>
                          <p className="text-xs text-gray-600">
                            Mandatory security awareness training and phishing
                            simulations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Confidentiality Agreements
                          </h4>
                          <p className="text-xs text-gray-600">
                            All staff sign comprehensive NDAs and security
                            policies
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Access Termination
                          </h4>
                          <p className="text-xs text-gray-600">
                            Immediate access revocation upon employment
                            termination
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="mb-4 text-lg font-medium text-gray-900">
                      Vendor Management
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Security Assessments
                          </h4>
                          <p className="text-xs text-gray-600">
                            All vendors undergo comprehensive security
                            evaluations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Contractual Obligations
                          </h4>
                          <p className="text-xs text-gray-600">
                            Security requirements included in all vendor
                            contracts
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Continuous Monitoring
                          </h4>
                          <p className="text-xs text-gray-600">
                            Ongoing monitoring of vendor security posture
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Risk Management
                          </h4>
                          <p className="text-xs text-gray-600">
                            Regular vendor risk assessments and remediation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Incident Response */}
              <section>
                <h2 className="mb-8 text-2xl font-semibold text-gray-900">
                  Incident Response & Business Continuity
                </h2>

                <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-6">
                  <div className="mb-3 flex items-center space-x-2 text-red-700">
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
                    <span className="font-medium">24/7 Incident Response</span>
                  </div>
                  <p className="text-sm text-red-700">
                    Our dedicated security team is available around the clock to
                    respond to any security incidents and ensure rapid
                    containment and recovery.
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-4">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                      <span className="text-xl font-bold text-red-600">1</span>
                    </div>
                    <h3 className="mb-2 font-medium text-gray-900">
                      Detection
                    </h3>
                    <p className="text-sm text-gray-600">
                      Automated monitoring systems detect potential threats
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                      <span className="text-xl font-bold text-orange-600">
                        2
                      </span>
                    </div>
                    <h3 className="mb-2 font-medium text-gray-900">
                      Assessment
                    </h3>
                    <p className="text-sm text-gray-600">
                      Security team evaluates and categorizes the incident
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                      <span className="text-xl font-bold text-yellow-600">
                        3
                      </span>
                    </div>
                    <h3 className="mb-2 font-medium text-gray-900">
                      Containment
                    </h3>
                    <p className="text-sm text-gray-600">
                      Immediate actions to prevent further damage
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xl font-bold text-green-600">
                        4
                      </span>
                    </div>
                    <h3 className="mb-2 font-medium text-gray-900">Recovery</h3>
                    <p className="text-sm text-gray-600">
                      System restoration and service continuity
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 p-6">
                    <h4 className="mb-3 font-medium text-gray-900">
                      Response Times
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Critical Incidents:
                        </span>
                        <span className="font-medium text-red-600">
                          &lt; 15 minutes
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">High Priority:</span>
                        <span className="font-medium text-orange-600">
                          &lt; 1 hour
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Medium Priority:</span>
                        <span className="font-medium text-yellow-600">
                          &lt; 4 hours
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Low Priority:</span>
                        <span className="font-medium text-blue-600">
                          &lt; 24 hours
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6">
                    <h4 className="mb-3 font-medium text-gray-900">
                      Communication
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>• Immediate notification to affected clients</div>
                      <div>• Regular status updates during incidents</div>
                      <div>• Post-incident analysis and lessons learned</div>
                      <div>• Transparent reporting and documentation</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Client Security */}
              <section>
                <h2 className="mb-8 text-2xl font-semibold text-gray-900">
                  Client Data Protection
                </h2>

                <div className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-8">
                  <div className="mb-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-blue-900">
                      Your Data, Your Control
                    </h3>
                    <p className="text-blue-700">
                      We implement the highest standards of data protection to
                      ensure your sensitive business information remains secure
                      and under your control.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 p-6">
                    <h4 className="mb-3 font-medium text-gray-900">
                      Data Isolation
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Dedicated virtual private clouds</li>
                      <li>• Customer-specific encryption keys</li>
                      <li>• Logical and physical segregation</li>
                      <li>• Multi-tenant architecture isolation</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6">
                    <h4 className="mb-3 font-medium text-gray-900">
                      Data Governance
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Data classification and tagging</li>
                      <li>• Retention and disposal policies</li>
                      <li>• Access logging and auditing</li>
                      <li>• Right to deletion compliance</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-gray-200 p-6">
                    <h4 className="mb-3 font-medium text-gray-900">
                      Client Controls
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Data portability and export</li>
                      <li>• Access control management</li>
                      <li>• Audit log access</li>
                      <li>• Incident notification preferences</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section>
                <div className="rounded-lg bg-gray-50 p-8 text-center">
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                    Security Questions or Concerns?
                  </h2>
                  <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                    Our security team is available to answer any questions about
                    our security practices, compliance status, or to discuss
                    specific requirements for your organization.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                      href="mailto:security@stratex-ai.com"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
                    >
                      Contact Security Team
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Schedule Security Review
                    </a>
                  </div>
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
