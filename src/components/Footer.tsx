import { Link } from "react-router-dom";

const Footer = () => {
  const columns = [
    {
      title: "Product",
      links: [
        { name: "Gaigentic Verify", href: "/verify" },
        { name: "Products", href: "/solutions" },
        { name: "Platform", href: "/platform" },
        { name: "Infrastructure", href: "/infrastructure" },
      ],
    },
    {
      title: "Infrastructure",
      links: [
        { name: "Sentinel", href: "/infrastructure/sentinel" },
        { name: "Cognito", href: "/infrastructure/cognito" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Security", href: "/security" },
      ],
    },
  ];

  return (
    <footer className="bg-ink text-paper">
      {/* Hatch divider */}
      <div className="h-10 hatch-band" aria-hidden />

      <div className="max-w-[1400px] mx-auto px-5 md:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="inline-block w-2.5 h-4 rounded-full bg-ledger" aria-hidden />
              <span className="font-sans font-bold text-lg leading-none tracking-tight">
                gaigentic<span className="text-tick">.ai</span>
              </span>
            </div>
            <p className="text-sm text-paper/60 leading-relaxed max-w-xs">
              The independent verification layer for AI-driven finance. Your AI does the work —
              we're the independent check that lets you sign it.
            </p>

            <div className="mt-6 space-y-1.5 font-mono text-xs text-paper/50">
              <div>info@gaigentic.ai</div>
              <div>+31 6 20343034 · +91 9841206769</div>
              <div className="pt-2 text-paper/40">
                Gustav Mahlerplein 2, 1082 MA Amsterdam
                <br />
                Amsterdam · Chennai
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="eyebrow text-paper/40 mb-5">{col.title}</div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-paper/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-xs text-paper/40">© 2026 Gaigentic AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="font-mono text-xs text-paper/40 hover:text-paper/80 transition-colors">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="font-mono text-xs text-paper/40 hover:text-paper/80 transition-colors">
              Terms
            </Link>
            <Link to="/security" className="font-mono text-xs text-paper/40 hover:text-paper/80 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
