// Header is rendered globally from App.tsx

const TermsOfService = () => {
  return (
    <div className="bg-ink min-h-screen pt-16">
      <section className="px-3 md:px-5 py-3 md:py-5">
        <div className="bg-paper rounded-2xl md:rounded-3xl">
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
            <span className="eyebrow text-ink-faint">Legal</span>
            <h1 className="mt-6 font-sans font-expanded font-extrabold text-ink tracking-tight leading-[1.05] text-4xl md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              These terms govern your use of Gaigentic AI&rsquo;s services and platform. By using
              our services, you agree to these terms.
            </p>
            <div className="mt-5 font-mono text-xs text-ink-faint uppercase tracking-[0.14em]">
              Effective · September 2025
            </div>

            {/* 01 — Acceptance of Terms */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">01</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                Acceptance of Terms
              </h2>
              <p className="text-ink-soft leading-relaxed">
                By accessing and using Gaigentic AI's services, you accept and agree to be bound by
                the terms and provision of this agreement. If you do not agree to abide by the
                above, please do not use this service.
              </p>
            </div>

            {/* 02 — Service Description */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">02</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                Service Description
              </h2>
              <p className="text-ink-soft leading-relaxed mb-4">
                Gaigentic AI provides autonomous AI agent technology for financial compliance and
                regulatory operations, including but not limited to:
              </p>
              <ul className="space-y-2.5 text-ink-soft leading-relaxed list-disc pl-5">
                <li>KYC (Know Your Customer) automation</li>
                <li>Transaction monitoring and AML compliance</li>
                <li>Lending compliance and risk assessment</li>
                <li>Regulatory reporting and compliance management</li>
                <li>AI-powered fraud detection and prevention</li>
              </ul>
            </div>

            {/* 03 — User Responsibilities */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">03</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                User Responsibilities
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Account Security</h3>
                  <p className="text-ink-soft leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account
                    credentials and for all activities that occur under your account. You must
                    immediately notify us of any unauthorized use.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Lawful Use</h3>
                  <p className="text-ink-soft leading-relaxed">
                    You agree to use our services only for lawful purposes and in compliance with
                    all applicable laws, regulations, and our acceptable use policy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Data Accuracy</h3>
                  <p className="text-ink-soft leading-relaxed">
                    You are responsible for the accuracy and completeness of data provided to our
                    services. We are not liable for issues arising from inaccurate or incomplete
                    data.
                  </p>
                </div>
              </div>
            </div>

            {/* 04 — Intellectual Property */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">04</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                Intellectual Property
              </h2>
              <p className="text-ink-soft leading-relaxed mb-4">
                All content, features, and functionality of our services are owned by Gaigentic AI
                and are protected by international copyright, trademark, and other intellectual
                property laws.
              </p>
              <p className="text-ink-soft leading-relaxed border-l-2 border-rule-dark pl-4">
                <strong className="text-ink">License:</strong> We grant you a limited,
                non-exclusive, non-transferable license to use our services in accordance with
                these terms. This license does not include any resale or commercial use of our
                services or their contents.
              </p>
            </div>

            {/* 05 — Service Availability & Support */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">05</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                Service Availability &amp; Support
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Uptime Commitment</h3>
                  <p className="text-ink-soft leading-relaxed">
                    We strive to maintain 99.9% uptime for our services but do not guarantee
                    uninterrupted access. We reserve the right to perform maintenance that may
                    temporarily disrupt service availability.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Support Services</h3>
                  <p className="text-ink-soft leading-relaxed">
                    Technical support is provided during business hours. Emergency support for
                    critical issues is available 24/7. Response times vary based on support tier
                    and issue severity.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">Claims and metrics</h3>
                  <p className="text-ink-soft leading-relaxed">
                    Any percentages, accuracy rates, performance metrics, or other quantitative
                    claims published by Gaigentic AI are based on controlled datasets and testing
                    conditions used during development. These figures are provided for
                    informational purposes and do not constitute a guarantee or warranty of future
                    results; actual performance may vary in production depending on factors such as
                    data quality, data volume, configuration, integration, and the operating
                    environment.
                  </p>
                </div>
              </div>
            </div>

            {/* 06 — Limitation of Liability */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">06</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                Limitation of Liability
              </h2>
              <p className="text-ink-soft leading-relaxed mb-4">
                In no event shall Gaigentic AI be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or relating to your use of our
                services.
              </p>
              <p className="text-ink-soft leading-relaxed border-l-2 border-rule-dark pl-4">
                <strong className="text-ink">Important:</strong> Our total liability shall not
                exceed the amount paid by you for the services during the twelve (12) months
                preceding the claim.
              </p>
            </div>

            {/* 07 — Termination */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">07</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                Termination
              </h2>
              <p className="text-ink-soft leading-relaxed mb-4">
                Either party may terminate this agreement at any time. Upon termination:
              </p>
              <ul className="space-y-2.5 text-ink-soft leading-relaxed list-disc pl-5">
                <li>Your access to the services will be immediately terminated</li>
                <li>We will delete your data within 30 days unless legally required to retain it</li>
                <li>Outstanding payments for services rendered will remain due</li>
                <li>Certain provisions will survive termination (data protection, liability, etc.)</li>
              </ul>
            </div>

            {/* 08 — Contact */}
            <div className="mt-12 border-t border-rule pt-8">
              <div className="font-mono text-xs text-ledger mb-3">08</div>
              <h2 className="font-sans font-expanded font-bold text-2xl text-ink tracking-tight mb-5">
                Questions About Terms?
              </h2>
              <p className="text-ink-soft leading-relaxed mb-5">
                If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;
