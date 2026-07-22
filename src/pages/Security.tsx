// Header is rendered globally from App.tsx

const topics = [
  {
    index: "01",
    name: "Security philosophy",
    blocks: [
      {
        heading: "Defense in depth",
        body: "At Gaigentic AI, security is not an afterthought — it's fundamental to our platform architecture. We implement a defense-in-depth strategy that protects your data at every layer.",
      },
      {
        heading: "Zero trust",
        body: "Never trust, always verify. Every request is authenticated and authorized, regardless of where it originates.",
      },
      {
        heading: "Transparency",
        body: "Open security practices: we believe in open communication about our security measures and are committed to regular independent security assessments.",
      },
    ],
  },
  {
    index: "02",
    name: "Infrastructure security",
    blocks: [
      {
        heading: "Cloud infrastructure",
        body: "Our platform runs on industry-leading cloud providers with enterprise-grade security controls, including network segmentation, automated patching, and continuous monitoring.",
      },
      {
        heading: "Multi-cloud deployment",
        body: "We deploy across multiple cloud providers to ensure high availability and disaster recovery. Data is automatically replicated across regions for maximum resilience.",
      },
      {
        heading: "Container security",
        body: "All applications run in secure containers with image scanning, runtime protection, and automated vulnerability management.",
      },
    ],
  },
  {
    index: "03",
    name: "Data protection",
    blocks: [
      {
        heading: "Encryption at rest",
        body: "All data stored in our databases and file systems is encrypted using AES-256 encryption with regularly rotated encryption keys.",
      },
      {
        heading: "Encryption in transit",
        body: "All data transmission uses TLS 1.3 encryption with perfect forward secrecy and certificate pinning for maximum security.",
      },
      {
        heading: "Key management",
        body: "Encryption keys are managed through Hardware Security Modules (HSMs) with automated rotation and secure backup procedures.",
      },
      {
        heading: "Data residency",
        body: "You control where your data is stored. We support multiple geographic regions to comply with local data residency requirements.",
      },
    ],
  },
  {
    index: "04",
    name: "Access control",
    blocks: [
      {
        heading: "Multi-factor authentication",
        body: "All user accounts require MFA using industry-standard protocols like TOTP, WebAuthn, or hardware security keys for enhanced account protection.",
      },
      {
        heading: "Role-based access control",
        body: "Granular permissions ensure users only access the data and functions necessary for their role, following the principle of least privilege.",
      },
      {
        heading: "Session management",
        body: "Secure session handling with automatic timeouts, concurrent session limits, and comprehensive audit logging of all access events.",
      },
    ],
  },
  {
    index: "05",
    name: "Monitoring + response",
    blocks: [
      {
        heading: "24/7 security monitoring",
        body: "Our Security Operations Center (SOC) provides round-the-clock monitoring of all systems, networks, and applications for security threats and anomalies.",
      },
      {
        heading: "Threat detection",
        body: "Advanced threat detection using AI-powered analysis of logs, network traffic, and user behavior to identify and respond to security incidents.",
      },
      {
        heading: "Incident response",
        body: "Structured incident response procedures ensure rapid containment, investigation, and recovery from security incidents with full transparency to affected customers.",
      },
    ],
  },
  {
    index: "06",
    name: "Commitment + roadmap",
    blocks: [
      {
        heading: "Where we are",
        body: "As a young startup, we're committed to building security into every aspect of our platform from day one.",
      },
      {
        heading: "Security-first architecture",
        body: "We design with security in mind from the ground up, implementing industry best practices and zero-trust principles in every component.",
      },
      {
        heading: "Certification roadmap",
        body: "We're building our security practices from the ground up, implementing industry best practices and preparing for future compliance requirements as we grow.",
      },
      {
        heading: "Privacy by design",
        body: "Data protection and privacy are core to our mission. We implement GDPR-compliant practices and maintain strict data handling procedures.",
      },
    ],
  },
];

const Security = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      {/* Hero — paper */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <span className="eyebrow text-ink-faint">Trust</span>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.0] text-5xl md:text-7xl max-w-4xl">
              Security
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              Security is at the core of everything we do. This page describes our security
              measures, our certification roadmap, and how to reach us about security issues.
            </p>
            <div className="mt-6 font-mono text-xs text-ink-faint uppercase tracking-[0.14em]">
              Last updated · September 2025
            </div>
          </div>
        </div>
      </section>

      {/* Topics — dark index rows */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-12 py-14 md:py-20">
        <div className="border-t border-paper/10">
          {topics.map((topic) => (
            <div
              key={topic.index}
              className="grid md:grid-cols-[56px_220px_1fr] gap-4 md:gap-6 py-8 border-b border-paper/10"
            >
              <span className="font-mono text-xs text-paper/35 pt-1.5">{topic.index}</span>
              <h2 className="font-sans font-expanded font-bold text-2xl text-paper tracking-tight">
                {topic.name}
              </h2>
              <div className="space-y-5">
                {topic.blocks.map((block) => (
                  <div key={block.heading}>
                    <h3 className="font-sans font-semibold text-paper mb-1.5">{block.heading}</h3>
                    <p className="text-paper/60 leading-relaxed max-w-2xl">{block.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hatch divider */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-12">
        <div className="h-10 hatch-band rounded-sm" aria-hidden />
      </div>

      {/* Report security issues — paper sheet */}
      <section className="px-3 md:px-5 py-14 md:py-20 pb-3 md:pb-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-12 md:py-16">
            <span className="eyebrow text-ink-faint">Responsible disclosure</span>
            <h2 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-tight text-3xl md:text-4xl max-w-3xl">
              Report security issues
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed max-w-2xl">
              If you discover a security vulnerability or have concerns about our security
              practices, please contact us immediately.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-3xl">
              <div className="border-t-2 border-ink pt-5">
                <div className="font-mono text-xs text-ledger mb-2">SECURITY TEAM</div>
                <div className="text-ink">info@gaigentic.ai</div>
              </div>
              <div className="border-t-2 border-ink pt-5">
                <div className="font-mono text-xs text-ledger mb-2">EMERGENCY · 24/7</div>
                <div className="text-ink">+31 6 20343034</div>
              </div>
              <div className="border-t-2 border-ink pt-5">
                <div className="font-mono text-xs text-ledger mb-2">PGP KEY</div>
                <div className="text-ink">Available upon request</div>
              </div>
            </div>
            <p className="mt-8 text-ink-soft leading-relaxed max-w-2xl text-sm">
              <span className="font-semibold text-ink">Bug bounty:</span> we offer rewards for
              responsible disclosure of security vulnerabilities. Please review our responsible
              disclosure policy before reporting.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
