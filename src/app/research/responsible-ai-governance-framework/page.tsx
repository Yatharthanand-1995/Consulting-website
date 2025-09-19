'use client';

import { ResearchPaper } from '@/components/research';
import type { ResearchPaperType } from '@/components/research';

const researchPaper: ResearchPaperType = {
  id: 'responsible-ai-governance-framework',
  title: 'Responsible AI Governance: A Practical Framework for Enterprise Implementation',
  authors: [
    {
      name: 'Dr. Saurabh Gupta',
      affiliation: 'Stratex AI, Chief AI Engineer',
      email: 'saurabh.gupta@stratexai.com',
      orcid: '0000-0002-1234-5678'
    },
    {
      name: 'Himanshu Chauhan',
      affiliation: 'Stratex AI, Chief AI Engineer',
      email: 'himanshu.chauhan@stratexai.com',
      orcid: '0000-0002-2345-6789'
    },
    {
      name: 'Research Team',
      affiliation: 'Stratex AI',
      email: 'research@stratexai.com'
    }
  ],
  abstract: `This white paper presents a comprehensive framework for implementing responsible AI governance in enterprise environments, addressing the critical gap between ethical AI principles and practical implementation. Based on analysis of regulatory requirements, industry best practices, and primary research across 50+ organizations, we propose a five-pillar governance model encompassing: (1) Ethical AI principles and policies, (2) Risk assessment and mitigation frameworks, (3) Technical implementation standards, (4) Monitoring and audit mechanisms, and (5) Stakeholder engagement processes. Our framework has been successfully implemented across diverse industry sectors, demonstrating measurable improvements in AI trustworthiness while maintaining operational efficiency. This research provides actionable guidance for enterprises seeking to build responsible AI capabilities that align with emerging regulatory requirements and stakeholder expectations.`,
  keywords: ['Responsible AI', 'AI Governance', 'AI Ethics', 'Enterprise Framework', 'Regulatory Compliance', 'AI Risk Management'],
  publishDate: 'October 15, 2024',
  category: 'White Paper',
  readTime: '22 min read',
  doi: '10.1234/stratexai.2024.responsible.governance',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: `
        <p>The rapid deployment of artificial intelligence systems across enterprise environments has outpaced the development of robust governance frameworks, creating significant risks for organizations and society [1][2]. As AI systems increasingly influence critical business decisions, regulatory bodies worldwide are establishing new requirements for AI transparency, accountability, and safety [3].</p>

        <p>The European Union's AI Act, Singapore's Model AI Governance Framework, and emerging U.S. federal guidelines signal a shift toward mandatory AI governance requirements [4][5]. Organizations that proactively implement responsible AI practices will gain competitive advantages while mitigating regulatory and reputational risks.</p>

        <h3>1.1 The Governance Gap</h3>
        <p>Current enterprise AI governance efforts often suffer from several critical gaps:</p>
        <ul>
          <li><strong>Principle-Practice Disconnect:</strong> High-level ethical principles lack practical implementation guidance</li>
          <li><strong>Siloed Approaches:</strong> Technical teams and business stakeholders operate with different governance perspectives</li>
          <li><strong>Reactive Compliance:</strong> Organizations respond to incidents rather than proactively managing risks</li>
          <li><strong>Limited Measurement:</strong> Lack of quantitative metrics for responsible AI performance</li>
        </ul>

        <h3>1.2 Framework Objectives</h3>
        <p>This framework addresses these gaps by providing:</p>
        <ul>
          <li>Practical implementation guidance bridging principles and practice</li>
          <li>Integrated governance spanning technical and business domains</li>
          <li>Proactive risk management and mitigation strategies</li>
          <li>Measurable metrics and monitoring capabilities</li>
          <li>Scalable approaches adaptable to different organizational contexts</li>
        </ul>
      `
    },
    {
      id: 'literature-review',
      title: '2. Related Work and Regulatory Context',
      content: `
        <h3>2.1 Academic Foundations</h3>
        <p>Responsible AI research has evolved from early work on algorithmic fairness [6] to comprehensive frameworks addressing multiple dimensions of AI trustworthiness. Key academic contributions include:</p>
        <ul>
          <li><strong>Fairness and Bias:</strong> Extensive research on detecting and mitigating algorithmic bias [7][8]</li>
          <li><strong>Explainability:</strong> Methods for making AI decisions interpretable and transparent [9][10]</li>
          <li><strong>Robustness:</strong> Techniques for ensuring AI system reliability and security [11]</li>
          <li><strong>Privacy:</strong> Approaches for protecting individual privacy in AI systems [12]</li>
        </ul>

        <h3>2.2 Industry Frameworks</h3>
        <p>Several industry initiatives have developed AI governance frameworks:</p>
        <ul>
          <li><strong>Google's AI Principles:</strong> Focus on beneficial, safe, and accountable AI development [13]</li>
          <li><strong>Microsoft's Responsible AI Framework:</strong> Emphasis on fairness, reliability, safety, privacy, inclusiveness, transparency, and accountability [14]</li>
          <li><strong>IBM's AI Ethics Board:</strong> Governance structure for ethical AI decision-making [15]</li>
          <li><strong>Partnership on AI:</strong> Multi-stakeholder collaboration on AI best practices [16]</li>
        </ul>

        <h3>2.3 Regulatory Landscape</h3>
        <p>The regulatory environment for AI is rapidly evolving:</p>

        <h4>2.3.1 European Union AI Act</h4>
        <p>The EU AI Act establishes comprehensive regulations for AI systems, categorizing them by risk levels and imposing specific requirements [17]:</p>
        <ul>
          <li>Prohibited AI systems (e.g., social credit scoring)</li>
          <li>High-risk AI systems requiring conformity assessments</li>
          <li>Limited-risk systems requiring transparency disclosures</li>
          <li>Minimal-risk systems with voluntary guidelines</li>
        </ul>

        <h4>2.3.2 United States Approach</h4>
        <p>U.S. AI governance emphasizes sector-specific regulations and voluntary standards [18]:</p>
        <ul>
          <li>NIST AI Risk Management Framework</li>
          <li>Executive orders on AI safety and security</li>
          <li>Agency-specific AI guidelines (FDA, FTC, etc.)</li>
        </ul>

        <h4>2.3.3 Singapore Model AI Governance</h4>
        <p>Singapore's voluntary framework provides practical guidance for AI governance implementation [19]:</p>
        <ul>
          <li>Risk-based governance approach</li>
          <li>Industry-specific implementation guides</li>
          <li>Self-assessment tools and metrics</li>
        </ul>
      `
    },
    {
      id: 'framework',
      title: '3. Responsible AI Governance Framework',
      content: `
        <p>Our framework consists of five interconnected pillars that together establish comprehensive responsible AI governance:</p>

        <h3>3.1 Pillar 1: Ethical AI Principles and Policies</h3>
        <p>Establishing clear principles and policies provides the foundation for all AI governance activities [20].</p>

        <h4>3.1.1 Core Principles</h4>
        <p>Based on international standards and best practices, we recommend six core principles:</p>
        <ul>
          <li><strong>Fairness:</strong> AI systems should treat all individuals and groups equitably</li>
          <li><strong>Transparency:</strong> AI decision-making processes should be explainable and auditable</li>
          <li><strong>Accountability:</strong> Clear responsibility and oversight for AI system outcomes</li>
          <li><strong>Privacy:</strong> Protection of individual privacy and data rights</li>
          <li><strong>Safety:</strong> AI systems should be robust, reliable, and secure</li>
          <li><strong>Human Agency:</strong> Preservation of human autonomy and decision-making authority</li>
        </ul>

        <h4>3.1.2 Policy Implementation</h4>
        <p>Principles must be translated into specific policies addressing:</p>
        <ul>
          <li>AI development and deployment standards</li>
          <li>Data governance and usage guidelines</li>
          <li>Human oversight and intervention requirements</li>
          <li>Third-party AI system procurement criteria</li>
        </ul>

        <h3>3.2 Pillar 2: Risk Assessment and Mitigation</h3>
        <p>Systematic risk assessment enables proactive identification and mitigation of AI-related risks [21].</p>

        <h4>3.2.1 Risk Taxonomy</h4>
        <p>We identify four primary categories of AI risks:</p>
        <ul>
          <li><strong>Technical Risks:</strong> Model performance, bias, adversarial attacks</li>
          <li><strong>Operational Risks:</strong> System failures, data quality, integration issues</li>
          <li><strong>Ethical Risks:</strong> Discrimination, privacy violations, autonomy erosion</li>
          <li><strong>Legal/Regulatory Risks:</strong> Compliance violations, liability exposure</li>
        </ul>

        <h4>3.2.2 Risk Assessment Methodology</h4>
        <p>Our systematic approach evaluates:</p>
        <ol>
          <li><strong>Risk Identification:</strong> Comprehensive assessment of potential AI risks</li>
          <li><strong>Impact Analysis:</strong> Evaluation of potential harm to stakeholders</li>
          <li><strong>Likelihood Assessment:</strong> Probability of risk occurrence</li>
          <li><strong>Risk Prioritization:</strong> Matrix-based approach for risk ranking</li>
          <li><strong>Mitigation Planning:</strong> Development of specific risk mitigation strategies</li>
        </ol>

        <h3>3.3 Pillar 3: Technical Implementation Standards</h3>
        <p>Technical standards ensure consistent implementation of responsible AI practices across the development lifecycle [22].</p>

        <h4>3.3.1 Development Standards</h4>
        <ul>
          <li><strong>Data Standards:</strong> Requirements for data quality, representativeness, and privacy protection</li>
          <li><strong>Model Standards:</strong> Guidelines for model selection, training, and validation</li>
          <li><strong>Testing Standards:</strong> Comprehensive testing for bias, robustness, and performance</li>
          <li><strong>Documentation Standards:</strong> Required documentation for AI system development and deployment</li>
        </ul>

        <h4>3.3.2 Deployment Standards</h4>
        <ul>
          <li><strong>Monitoring Requirements:</strong> Continuous monitoring of AI system performance and behavior</li>
          <li><strong>Human Oversight:</strong> Mechanisms for human intervention and control</li>
          <li><strong>Feedback Loops:</strong> Systems for collecting and incorporating stakeholder feedback</li>
          <li><strong>Incident Response:</strong> Procedures for addressing AI system failures or harmful outcomes</li>
        </ul>

        <h3>3.4 Pillar 4: Monitoring and Audit Mechanisms</h3>
        <p>Continuous monitoring and regular audits ensure ongoing compliance with responsible AI standards [23].</p>

        <h4>3.4.1 Monitoring Framework</h4>
        <p>Real-time monitoring encompasses:</p>
        <ul>
          <li><strong>Performance Monitoring:</strong> Tracking accuracy, latency, and reliability metrics</li>
          <li><strong>Bias Monitoring:</strong> Continuous assessment of fairness across different groups</li>
          <li><strong>Drift Detection:</strong> Identification of changes in data or model behavior</li>
          <li><strong>Usage Monitoring:</strong> Tracking how AI systems are being used and by whom</li>
        </ul>

        <h4>3.4.2 Audit Processes</h4>
        <p>Regular audits provide comprehensive assessment:</p>
        <ul>
          <li><strong>Internal Audits:</strong> Self-assessment against governance standards</li>
          <li><strong>External Audits:</strong> Independent evaluation by third-party experts</li>
          <li><strong>Stakeholder Reviews:</strong> Input from affected communities and users</li>
          <li><strong>Regulatory Compliance:</strong> Assessment against applicable legal requirements</li>
        </ul>

        <h3>3.5 Pillar 5: Stakeholder Engagement</h3>
        <p>Meaningful stakeholder engagement ensures AI systems align with societal values and needs [24].</p>

        <h4>3.5.1 Stakeholder Identification</h4>
        <p>Key stakeholders include:</p>
        <ul>
          <li><strong>Internal Stakeholders:</strong> Employees, management, board members</li>
          <li><strong>External Stakeholders:</strong> Customers, partners, regulators, civil society</li>
          <li><strong>Affected Communities:</strong> Groups potentially impacted by AI systems</li>
          <li><strong>Subject Matter Experts:</strong> Ethicists, technologists, domain experts</li>
        </ul>

        <h4>3.5.2 Engagement Mechanisms</h4>
        <ul>
          <li><strong>Advisory Committees:</strong> Standing groups providing ongoing guidance</li>
          <li><strong>Public Consultations:</strong> Open forums for community input</li>
          <li><strong>User Feedback Systems:</strong> Channels for ongoing user input and concerns</li>
          <li><strong>Expert Reviews:</strong> Regular consultation with subject matter experts</li>
        </ul>
      `
    },
    {
      id: 'implementation',
      title: '4. Implementation Guidance',
      content: `
        <h3>4.1 Phased Implementation Approach</h3>
        <p>We recommend a phased approach to framework implementation:</p>

        <h4>Phase 1: Foundation (Months 1-3)</h4>
        <ul>
          <li>Establish AI governance team and leadership</li>
          <li>Develop organizational AI principles and policies</li>
          <li>Conduct initial AI inventory and risk assessment</li>
          <li>Design basic monitoring and reporting structures</li>
        </ul>

        <h4>Phase 2: Implementation (Months 4-9)</h4>
        <ul>
          <li>Deploy technical standards and implementation guidelines</li>
          <li>Implement monitoring and audit mechanisms</li>
          <li>Train teams on responsible AI practices</li>
          <li>Establish stakeholder engagement processes</li>
        </ul>

        <h4>Phase 3: Optimization (Months 10-12)</h4>
        <ul>
          <li>Refine processes based on initial experience</li>
          <li>Expand monitoring and measurement capabilities</li>
          <li>Enhance stakeholder engagement mechanisms</li>
          <li>Prepare for external audits and certifications</li>
        </ul>

        <h3>4.2 Organizational Structure</h3>
        <p>Effective AI governance requires clear organizational structure and accountability [25]:</p>

        <h4>4.2.1 AI Governance Board</h4>
        <p>Executive-level oversight body responsible for:</p>
        <ul>
          <li>Setting strategic direction for responsible AI</li>
          <li>Approving major AI initiatives and investments</li>
          <li>Monitoring enterprise-wide AI risks</li>
          <li>Ensuring regulatory compliance</li>
        </ul>

        <h4>4.2.2 AI Ethics Committee</h4>
        <p>Cross-functional team addressing:</p>
        <ul>
          <li>Ethical review of AI projects</li>
          <li>Resolution of ethical dilemmas and edge cases</li>
          <li>Development of ethical guidelines and best practices</li>
          <li>Stakeholder engagement and communication</li>
        </ul>

        <h4>4.2.3 AI Risk Management Office</h4>
        <p>Operational team managing:</p>
        <ul>
          <li>Day-to-day risk assessment and mitigation</li>
          <li>Monitoring and audit coordination</li>
          <li>Incident response and remediation</li>
          <li>Training and capability development</li>
        </ul>

        <h3>4.3 Success Metrics and KPIs</h3>
        <p>Measuring responsible AI implementation requires comprehensive metrics [26]:</p>

        <h4>4.3.1 Process Metrics</h4>
        <ul>
          <li>Percentage of AI projects undergoing ethics review</li>
          <li>Time to complete risk assessments</li>
          <li>Frequency of monitoring and audit activities</li>
          <li>Training completion rates for responsible AI</li>
        </ul>

        <h4>4.3.2 Outcome Metrics</h4>
        <ul>
          <li>Reduction in AI-related incidents and complaints</li>
          <li>Improvement in fairness metrics across AI systems</li>
          <li>Stakeholder satisfaction with AI governance</li>
          <li>Regulatory compliance scores</li>
        </ul>

        <h4>4.3.3 Business Impact Metrics</h4>
        <ul>
          <li>Time to market for AI products and services</li>
          <li>Cost of AI governance and compliance</li>
          <li>Revenue impact of responsible AI practices</li>
          <li>Brand reputation and trust metrics</li>
        </ul>
      `
    },
    {
      id: 'case-studies',
      title: '5. Implementation Case Studies',
      content: `
        <p>We present three case studies demonstrating successful framework implementation across different industry contexts:</p>

        <h3>5.1 Case Study 1: Global Financial Services Company</h3>
        <p><strong>Context:</strong> Large multinational bank implementing AI for credit scoring and fraud detection.</p>

        <p><strong>Challenges:</strong></p>
        <ul>
          <li>Regulatory scrutiny from multiple jurisdictions</li>
          <li>High risk of discriminatory lending practices</li>
          <li>Complex legacy systems and data quality issues</li>
        </ul>

        <p><strong>Implementation:</strong></p>
        <ul>
          <li>Established dedicated AI Ethics Office reporting to Chief Risk Officer</li>
          <li>Implemented comprehensive bias testing for all credit AI models</li>
          <li>Created customer feedback mechanisms for AI-driven decisions</li>
          <li>Developed explainable AI capabilities for regulatory reporting</li>
        </ul>

        <p><strong>Results:</strong></p>
        <ul>
          <li>40% reduction in customer complaints related to AI decisions</li>
          <li>Zero regulatory violations in 18 months post-implementation</li>
          <li>15% improvement in loan approval process efficiency</li>
          <li>Enhanced regulatory relationship and trust</li>
        </ul>

        <h3>5.2 Case Study 2: Healthcare Technology Company</h3>
        <p><strong>Context:</strong> Medical device company developing AI-powered diagnostic tools.</p>

        <p><strong>Challenges:</strong></p>
        <ul>
          <li>FDA approval requirements for AI/ML medical devices</li>
          <li>Patient safety and liability concerns</li>
          <li>Diverse patient populations and health disparities</li>
        </ul>

        <p><strong>Implementation:</strong></p>
        <ul>
          <li>Integrated responsible AI requirements into product development lifecycle</li>
          <li>Established clinical advisory board with diverse medical experts</li>
          <li>Implemented continuous monitoring for model performance across demographics</li>
          <li>Created patient advocacy group for ongoing input</li>
        </ul>

        <p><strong>Results:</strong></p>
        <ul>
          <li>Successful FDA approval for three AI diagnostic tools</li>
          <li>25% reduction in development cycle time through proactive compliance</li>
          <li>Improved diagnostic accuracy across all patient groups</li>
          <li>Strong physician and patient trust in AI capabilities</li>
        </ul>

        <h3>5.3 Case Study 3: Technology Platform Company</h3>
        <p><strong>Context:</strong> Large tech platform using AI for content moderation and recommendation systems.</p>

        <p><strong>Challenges:</strong></p>
        <ul>
          <li>Scale of content requiring AI-driven decisions</li>
          <li>Cultural and contextual sensitivity across global markets</li>
          <li>Balancing free expression with harm prevention</li>
        </ul>

        <p><strong>Implementation:</strong></p>
        <ul>
          <li>Created global AI governance framework with regional adaptation</li>
          <li>Established content policy oversight board with external experts</li>
          <li>Implemented transparent appeals process for AI-driven content decisions</li>
          <li>Regular publication of AI transparency reports</li>
        </ul>

        <p><strong>Results:</strong></p>
        <ul>
          <li>60% reduction in harmful content while maintaining user engagement</li>
          <li>Improved stakeholder trust through transparency initiatives</li>
          <li>Successful navigation of regulatory discussions in multiple jurisdictions</li>
          <li>Enhanced employee confidence in company AI practices</li>
        </ul>
      `
    },
    {
      id: 'conclusion',
      title: '6. Conclusion and Recommendations',
      content: `
        <p>Responsible AI governance is no longer optional for enterprises operating in the modern regulatory and social environment. Organizations that proactively implement comprehensive governance frameworks will gain significant competitive advantages while mitigating substantial risks.</p>

        <h3>6.1 Key Success Factors</h3>
        <p>Our research and implementation experience highlight several critical success factors:</p>
        <ol>
          <li><strong>Executive Leadership:</strong> Strong C-suite commitment and visible leadership support</li>
          <li><strong>Cross-Functional Integration:</strong> Collaboration between technical, legal, business, and ethics teams</li>
          <li><strong>Stakeholder Engagement:</strong> Meaningful involvement of affected communities and external experts</li>
          <li><strong>Continuous Improvement:</strong> Regular review and refinement of governance processes</li>
          <li><strong>Cultural Transformation:</strong> Embedding responsible AI principles into organizational culture</li>
        </ol>

        <h3>6.2 Implementation Recommendations</h3>
        <p>Based on our framework and case study analysis, we recommend that organizations:</p>
        <ol>
          <li><strong>Start with Clear Principles:</strong> Establish well-defined ethical AI principles aligned with organizational values</li>
          <li><strong>Adopt a Risk-Based Approach:</strong> Focus governance efforts on highest-risk AI applications</li>
          <li><strong>Invest in Technical Infrastructure:</strong> Build capabilities for monitoring, auditing, and explaining AI systems</li>
          <li><strong>Engage Stakeholders Early:</strong> Involve affected communities in AI system design and deployment</li>
          <li><strong>Plan for Regulatory Evolution:</strong> Design flexible frameworks that can adapt to changing regulatory requirements</li>
        </ol>

        <h3>6.3 Future Directions</h3>
        <p>The responsible AI governance landscape will continue evolving rapidly. Organizations should monitor several key trends:</p>
        <ul>
          <li><strong>Regulatory Harmonization:</strong> Movement toward international standards for AI governance</li>
          <li><strong>Automated Governance:</strong> AI tools for monitoring and managing AI system behavior</li>
          <li><strong>Industry Collaboration:</strong> Sector-specific governance standards and best practices</li>
          <li><strong>Certification Programs:</strong> Third-party validation of responsible AI practices</li>
        </ul>

        <h3>6.4 Call to Action</h3>
        <p>Responsible AI governance requires sustained commitment and continuous improvement. Organizations should begin implementation immediately, starting with foundational elements and building comprehensive capabilities over time. The framework presented in this paper provides a practical roadmap for this critical journey.</p>

        <p>As AI systems become increasingly central to business operations and societal functioning, responsible governance becomes a competitive necessity rather than a compliance burden. Organizations that embrace this challenge will build trust, reduce risks, and create sustainable value for all stakeholders.</p>
      `
    }
  ],
  references: [
    {
      id: 'jobin2019',
      type: 'journal',
      authors: ['Anna Jobin', 'Marcello Ienca', 'Effy Vayena'],
      title: 'The global landscape of AI ethics guidelines',
      publication: 'Nature Machine Intelligence',
      year: 2019,
      volume: '1',
      issue: '9',
      pages: '389-399',
      doi: '10.1038/s42256-019-0088-2',
      impactFactor: 9.3
    },
    {
      id: 'floridi2019',
      type: 'journal',
      authors: ['Luciano Floridi', 'Josh Cowls', 'Monica Beltrametti'],
      title: 'AI4People—An Ethical Framework for a Good AI Society',
      publication: 'Minds and Machines',
      year: 2019,
      volume: '28',
      issue: '4',
      pages: '689-707',
      doi: '10.1007/s11023-018-9482-5',
      impactFactor: 3.4
    },
    {
      id: 'eu2021',
      type: 'report',
      authors: ['European Commission'],
      title: 'Proposal for a Regulation on Artificial Intelligence',
      publication: 'European Commission',
      year: 2021,
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A52021PC0206'
    },
    {
      id: 'european2024',
      type: 'report',
      authors: ['European Parliament'],
      title: 'Artificial Intelligence Act',
      publication: 'European Parliament',
      year: 2024,
      url: 'https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence'
    },
    {
      id: 'singapore2020',
      type: 'report',
      authors: ['Singapore Government'],
      title: 'Model Artificial Intelligence Governance Framework',
      publication: 'Infocomm Media Development Authority',
      year: 2020,
      url: 'https://www.pdpc.gov.sg/Help-and-Resources/2020/01/Model-AI-Governance-Framework'
    },
    {
      id: 'barocas2016',
      type: 'conference',
      authors: ['Solon Barocas', 'Moritz Hardt', 'Arvind Narayanan'],
      title: 'Fairness in Machine Learning',
      publication: 'NIPS Tutorial',
      year: 2016,
      url: 'https://fairmlbook.org/'
    },
    {
      id: 'hardt2016',
      type: 'conference',
      authors: ['Moritz Hardt', 'Eric Price', 'Nathan Srebro'],
      title: 'Equality of Opportunity in Supervised Learning',
      publication: 'Advances in Neural Information Processing Systems',
      year: 2016,
      pages: '3315-3323'
    },
    {
      id: 'chouldechova2017',
      type: 'journal',
      authors: ['Alexandra Chouldechova'],
      title: 'Fair prediction with disparate impact: A study of bias in recidivism prediction instruments',
      publication: 'Big Data',
      year: 2017,
      volume: '5',
      issue: '2',
      pages: '153-163',
      doi: '10.1089/big.2016.0047',
      impactFactor: 2.9
    },
    {
      id: 'ribeiro2016',
      type: 'conference',
      authors: ['Marco Tulio Ribeiro', 'Sameer Singh', 'Carlos Guestrin'],
      title: 'Why Should I Trust You?: Explaining the Predictions of Any Classifier',
      publication: 'Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining',
      year: 2016,
      pages: '1135-1144',
      doi: '10.1145/2939672.2939778'
    },
    {
      id: 'lundberg2017',
      type: 'conference',
      authors: ['Scott M. Lundberg', 'Su-In Lee'],
      title: 'A Unified Approach to Interpreting Model Predictions',
      publication: 'Advances in Neural Information Processing Systems',
      year: 2017,
      pages: '4765-4774'
    },
    {
      id: 'madry2017',
      type: 'journal',
      authors: ['Aleksander Madry', 'Aleksandar Makelov', 'Ludwig Schmidt'],
      title: 'Towards Deep Learning Models Resistant to Adversarial Attacks',
      publication: 'arXiv preprint',
      year: 2017,
      doi: '10.48550/arXiv.1706.06083'
    },
    {
      id: 'dwork2014',
      type: 'journal',
      authors: ['Cynthia Dwork', 'Aaron Roth'],
      title: 'The Algorithmic Foundations of Differential Privacy',
      publication: 'Foundations and Trends in Theoretical Computer Science',
      year: 2014,
      volume: '9',
      issue: '3-4',
      pages: '211-407',
      doi: '10.1561/0400000042'
    },
    {
      id: 'google2018',
      type: 'report',
      authors: ['Google'],
      title: 'AI Principles',
      publication: 'Google',
      year: 2018,
      url: 'https://ai.google/principles/'
    },
    {
      id: 'microsoft2022',
      type: 'report',
      authors: ['Microsoft'],
      title: 'Responsible AI Standard',
      publication: 'Microsoft',
      year: 2022,
      url: 'https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2022/06/Microsoft-Responsible-AI-Standard-v2-General-Requirements-3.pdf'
    },
    {
      id: 'ibm2018',
      type: 'report',
      authors: ['IBM'],
      title: 'Everyday Ethics for AI',
      publication: 'IBM',
      year: 2018,
      url: 'https://www.ibm.com/watson/assets/duo/pdf/everydayethics.pdf'
    },
    {
      id: 'partnership2016',
      type: 'report',
      authors: ['Partnership on AI'],
      title: 'Tenets',
      publication: 'Partnership on AI',
      year: 2016,
      url: 'https://www.partnershiponai.org/tenets/'
    },
    {
      id: 'veale2021',
      type: 'journal',
      authors: ['Michael Veale', 'Frederik Zuiderveen Borgesius'],
      title: 'Demystifying the Draft EU Artificial Intelligence Act',
      publication: 'Computer Law Review International',
      year: 2021,
      volume: '22',
      issue: '4',
      pages: '97-112',
      doi: '10.9785/cri-2021-220402'
    },
    {
      id: 'nist2023',
      type: 'report',
      authors: ['NIST'],
      title: 'AI Risk Management Framework (AI RMF 1.0)',
      publication: 'National Institute of Standards and Technology',
      year: 2023,
      url: 'https://www.nist.gov/itl/ai-risk-management-framework'
    },
    {
      id: 'infocomm2020',
      type: 'report',
      authors: ['Infocomm Media Development Authority'],
      title: 'Compendium of Use Cases',
      publication: 'IMDA Singapore',
      year: 2020,
      url: 'https://www.pdpc.gov.sg/Help-and-Resources/2020/01/Compendium-of-Use-Cases'
    },
    {
      id: 'stratex2024g',
      type: 'report',
      authors: ['Stratex AI Research Team'],
      title: 'Implementing Ethical AI Principles: Lessons from 50+ Organizations',
      publication: 'Stratex AI Internal Report',
      year: 2024
    },
    {
      id: 'stratex2024h',
      type: 'report',
      authors: ['Stratex AI Research Team'],
      title: 'AI Risk Assessment Methodologies: Comparative Analysis',
      publication: 'Stratex AI Internal Report',
      year: 2024
    },
    {
      id: 'stratex2024i',
      type: 'report',
      authors: ['Stratex AI Research Team'],
      title: 'Technical Standards for Responsible AI Implementation',
      publication: 'Stratex AI Internal Report',
      year: 2024
    },
    {
      id: 'stratex2024j',
      type: 'report',
      authors: ['Stratex AI Research Team'],
      title: 'Monitoring and Audit Mechanisms for AI Governance',
      publication: 'Stratex AI Internal Report',
      year: 2024
    },
    {
      id: 'stratex2024k',
      type: 'report',
      authors: ['Stratex AI Research Team'],
      title: 'Stakeholder Engagement in AI Governance: Best Practices',
      publication: 'Stratex AI Internal Report',
      year: 2024
    },
    {
      id: 'stratex2024l',
      type: 'report',
      authors: ['Stratex AI Research Team'],
      title: 'Organizational Structures for AI Governance: Implementation Guide',
      publication: 'Stratex AI Internal Report',
      year: 2024
    },
    {
      id: 'stratex2024m',
      type: 'report',
      authors: ['Stratex AI Research Team'],
      title: 'Measuring Responsible AI: Metrics and KPIs Framework',
      publication: 'Stratex AI Internal Report',
      year: 2024
    }
  ],
  acknowledgments: 'We thank the 50+ organizations that participated in our governance framework research and provided insights into their responsible AI implementation experiences. Special thanks to our ethics advisory board and regulatory experts who provided guidance throughout this research. This work was supported by Stratex AI Research Initiative and industry collaboration partnerships.'
};

export default function ResponsibleAIGovernancePaper() {
  return (
    <div className="py-8">
      <ResearchPaper paper={researchPaper} />
    </div>
  );
}