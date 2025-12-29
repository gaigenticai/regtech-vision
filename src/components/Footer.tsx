import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Solutions", href: "/solutions" },
        { name: "Platform", href: "/platform" },
        { name: "Sentinel", href: "/sentinel" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ];

  return (
    <footer className="bg-muted-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="inline-block">
                <span className="text-white text-lg font-normal leading-none">Gaigentic AI</span>
              </div>
            </div>
            <p className="text-sm text-muted-300 mb-6 leading-relaxed">
              Autonomous AI agents for financial compliance excellence. 
              Transforming BFSI operations with intelligent automation.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-300">
                <Mail className="h-4 w-4" />
                <span>info@gaigentic.ai</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-300">
                <Phone className="h-4 w-4" />
                <span>+31 6 20343034 / +91 9841206769</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-300">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <div>Amsterdam • Chennai</div>
                  <div className="text-xs mt-1">HQ: Gustav Mahlerplein 2, 1082MA<br />Amsterdam, Netherlands</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.href} className="text-sm text-muted-300 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-300">
              © 2025 Gaigentic AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-muted-300 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-muted-300 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/security" className="text-sm text-muted-300 hover:text-primary transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
