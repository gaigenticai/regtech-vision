import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { kind: "link" as const, name: "Verify", href: "/verify" },
    {
      kind: "menu" as const,
      name: "Products",
      href: "/solutions",
      children: [
        { name: "Regulens", href: "/solutions/regulens" },
        { name: "CollectEye", href: "/solutions/collecteye" },
        { name: "Galileo", href: "/solutions/galileo" },
        { name: "CredAI", href: "/solutions/credai" },
        { name: "CardOS", href: "/solutions/cardos" },
        { name: "Greenshield", href: "/solutions/greenshield" },
      ],
    },
    { kind: "link" as const, name: "Platform", href: "/platform" },
    {
      kind: "menu" as const,
      name: "Infrastructure",
      href: "/infrastructure",
      children: [
        { name: "Sentinel", href: "/infrastructure/sentinel" },
        { name: "Cognito", href: "/infrastructure/cognito" },
      ],
    },
    { kind: "link" as const, name: "About", href: "/about" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActivePath = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-ink z-50">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link to="/" className="flex items-center gap-2.5 min-w-0" aria-label="Gaigentic AI home">
            <span className="inline-block w-2.5 h-4 rounded-full bg-ledger" aria-hidden />
            <span className="font-sans font-bold text-lg leading-none text-paper tracking-tight">
              gaigentic<span className="text-tick">.ai</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navigation.map((item) => {
              if (item.kind === "menu") {
                const active = isActivePath(item.href);
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={`eyebrow inline-flex items-center gap-1.5 py-2 transition-colors ${
                          active ? "text-paper" : "text-paper/55 hover:text-paper"
                        }`}
                        aria-label={`${item.name} menu`}
                      >
                        {item.name}
                        <ChevronDown className="h-3 w-3 opacity-60" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-52 bg-ink border-rule-inkline text-paper rounded-lg"
                    >
                      {item.children.map((child) => (
                        <DropdownMenuItem
                          key={child.href}
                          asChild
                          className="focus:bg-paper/10 focus:text-paper"
                        >
                          <Link to={child.href} className="cursor-pointer font-mono text-xs uppercase tracking-[0.14em] py-2.5">
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              const active = isActivePath(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`eyebrow py-2 transition-colors ${
                    active ? "text-paper" : "text-paper/55 hover:text-paper"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="eyebrow inline-flex items-center bg-paper text-ink rounded-full px-5 py-2.5 hover:bg-paper-bright transition-colors"
            >
              Talk to us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-paper/70 hover:text-paper"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen
              ? "max-h-[calc(100vh-4rem)] overflow-y-auto opacity-100 pb-6"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="pt-2 space-y-1 border-t border-paper/10">
            {navigation.map((item) => {
              if (item.kind === "menu") {
                return (
                  <div key={item.name} className="pt-2">
                    <div className="eyebrow text-paper/40 px-1 py-2">{item.name}</div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`block px-4 py-2.5 font-mono text-xs uppercase tracking-[0.14em] rounded-md ${
                          isActivePath(child.href) ? "text-paper bg-paper/10" : "text-paper/60 hover:text-paper"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-1 py-2.5 eyebrow rounded-md ${
                    isActivePath(item.href) ? "text-paper" : "text-paper/60 hover:text-paper"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="eyebrow inline-flex items-center bg-paper text-ink rounded-full px-5 py-2.5 mt-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
