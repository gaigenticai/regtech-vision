// Header is rendered globally from App.tsx

const PrivacyPolicy = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      <section className="px-3 md:px-5 py-3 md:py-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
            <span className="eyebrow text-ink-faint">Legal</span>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.05] text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Your privacy and data security are fundamental to our mission. This policy outlines
              how we protect and handle your information.
            </p>
            <div className="mt-5 font-mono text-xs text-ink-faint uppercase tracking-[0.14em]">
              Last updated · September 2025
            </div>

            {/* 01 — Information We Collect */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">01</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                Information We Collect
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Personal Information</h3>
                  <p className="text-ink-soft leading-relaxed">
                    We collect information you provide directly to us, such as when you create an
                    account, use our services, or contact us for support. This may include your
                    name, email address, phone number, and company information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Usage Data</h3>
                  <p className="text-ink-soft leading-relaxed">
                    We automatically collect certain information about your use of our services,
                    including IP addresses, browser types, access times, pages viewed, and the
                    referring website.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Compliance Data</h3>
                  <p className="text-ink-soft leading-relaxed">
                    For our RegTech services, we may process compliance-related data as necessary
                    to provide our services, always in accordance with applicable privacy laws and
                    regulations.
                  </p>
                </div>
              </div>
            </div>

            {/* 02 — How We Use Your Information */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">02</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                How We Use Your Information
              </h2>
              <ul className="space-y-2.5 text-ink-soft leading-relaxed list-disc pl-5">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </div>

            {/* 03 — Data Security & Protection */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">03</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                Data Security &amp; Protection
              </h2>
              <p className="text-ink-soft leading-relaxed mb-5">
                We implement comprehensive security measures to protect your personal information:
              </p>
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Encryption</h3>
                  <p className="text-ink-soft leading-relaxed">
                    All data is encrypted in transit and at rest using industry-standard protocols.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Access Controls</h3>
                  <p className="text-ink-soft leading-relaxed">
                    Strict access controls and regular security audits ensure data protection.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Compliance</h3>
                  <p className="text-ink-soft leading-relaxed">
                    Regular compliance audits and certifications maintain security standards.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Monitoring</h3>
                  <p className="text-ink-soft leading-relaxed">
                    Continuous monitoring and threat detection protect against unauthorized access.
                  </p>
                </div>
              </div>
            </div>

            {/* 04 — Information Sharing & Disclosure */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">04</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                Information Sharing &amp; Disclosure
              </h2>
              <p className="text-ink-soft leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third
                parties without your consent, except in the following circumstances:
              </p>
              <ul className="space-y-2.5 text-ink-soft leading-relaxed list-disc pl-5">
                <li>
                  <strong className="text-ink">Service Providers:</strong> Trusted third-party
                  service providers who assist in operating our services
                </li>
                <li>
                  <strong className="text-ink">Legal Requirements:</strong> When required by law or
                  to protect our rights and safety
                </li>
                <li>
                  <strong className="text-ink">Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong className="text-ink">Consent:</strong> With your explicit consent for
                  specific purposes
                </li>
              </ul>
            </div>

            {/* 05 — Contact */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">05</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                Questions About Privacy?
              </h2>
              <p className="text-ink-soft leading-relaxed mb-5">
                If you have any questions about this Privacy Policy or our data practices, please
                contact us:
              </p>
              <div className="space-y-2 text-ink-soft leading-relaxed">
                <p>
                  <strong className="text-ink">Email:</strong> info@gaigentic.ai
                </p>
                <p>
                  <strong className="text-ink">Phone:</strong> +31 6 20343034
                </p>
                <p>
                  <strong className="text-ink">Address:</strong> Gustav Mahlerplein 2, 1082MA
                  Amsterdam, Netherlands
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
