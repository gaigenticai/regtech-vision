import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronRight, Home, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { kind: "link" as const, name: "Home", href: "/" },
    {
      kind: "menu" as const,
      name: "Products",
      href: "/solutions",
      children: [
        { name: "Regulens", href: "/solutions/regulens" },
        { name: "CollectEye", href: "/solutions/collecteye" },
        { name: "Galileo", href: "/solutions/galileo" },
        { name: "CredAI", href: "/solutions/credai" },
        { name: "Canopy", href: "/solutions/canopy" },
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
    { kind: "external" as const, name: "Agent Hub", href: "https://hub.gaigentic.ai" },
    { kind: "link" as const, name: "Contact Us", href: "/contact" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Generate breadcrumbs based on current path
  const getBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    if (pathSegments.length === 0) return null;

    const breadcrumbs = [
      { name: 'Home', href: '/' }
    ];

    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({ name, href });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  const isActivePath = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
  <header className="fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 z-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 min-w-0">
              <Link to="/" className="flex items-center min-w-0" aria-label="Gaigentic AI home">
        <div className="h-8 w-auto relative max-w-[120px] md:max-w-[160px]">
                  <img
                    src="https://i.ibb.co/DH06Ghnf/Ligh-Mode-logo.jpg"
                    alt="Gaigentic AI"
          className="h-7 md:h-8 w-auto object-contain max-w-full"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                      const fallback = img.parentElement?.querySelector('.logo-fallback') as HTMLElement | null;
                      if (fallback) fallback.style.display = 'inline-flex';
                    }}
                  />
                  <span className="logo-fallback hidden inline-flex items-baseline font-extrabold text-xl leading-none">
                    <span className="text-xl text-foreground">G</span>
                    <span className="text-red-600 text-xs font-extrabold -translate-y-0.5 ml-0.5">ai</span>
                    <span className="text-xl text-foreground ml-0.5">igentic</span>
                    <span className="ml-3 text-sm font-semibold text-foreground">AI</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => {
                if (item.kind === "menu") {
                  const active = isActivePath(item.href);
                  return (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger asChild>
                        <button
                          type="button"
                          className={`text-sm font-medium transition-colors relative py-2 inline-flex items-center gap-1 ${
                            active ? "text-primary" : "text-neutral-dark/60 hover:text-neutral-dark"
                          }`}
                          aria-label={`${item.name} menu`}
                        >
                          {item.name}
                          <ChevronDown className="h-4 w-4 opacity-70" />
                          {active && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56">
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.href} asChild>
                            <Link to={child.href} className="cursor-pointer">
                              {child.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                if (item.kind === "external") {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors relative py-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700"
                    >
                      {item.name}
                    </a>
                  );
                }

                const active = isActivePath(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors relative py-2 ${
                      active ? "text-primary" : "text-neutral-dark/60 hover:text-neutral-dark"
                    }`}
                  >
                    {item.name}
                    {active && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button removed as requested */}

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-dark/60 hover:text-neutral-dark hover:bg-neutral-light/50 transition-all duration-200 p-2 bg-white border border-gray-200"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <Menu 
                    className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                      isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                      isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                    }`} 
                  />
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out bg-white ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-2">
              {navigation.map((item) => {
                if (item.kind === "menu") {
                  return (
                    <div key={item.name} className="px-2">
                      <div className="px-2 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-dark/50">{item.name}</div>
                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg touch-manipulation ${
                              isActivePath(child.href)
                                ? "text-primary bg-neutral-light"
                                : "text-neutral-dark/60 hover:text-neutral-dark hover:bg-neutral-light/50"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-center justify-between">
                              {child.name}
                              {isActivePath(child.href) && <div className="w-2 h-2 bg-primary rounded-full" />}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (item.kind === "external") {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-4 text-base font-medium transition-all duration-200 rounded-lg touch-manipulation bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-4 text-base font-medium transition-all duration-200 rounded-lg touch-manipulation ${
                      isActivePath(item.href)
                        ? "text-primary bg-neutral-light"
                        : "text-neutral-dark/60 hover:text-neutral-dark hover:bg-neutral-light/50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      {item.name}
                      {isActivePath(item.href) && <div className="w-2 h-2 bg-primary rounded-full" />}
                    </div>
                  </Link>
                );
              })}
              {/* Mobile CTA removed by request */}
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 1 && (
        <div className="fixed top-16 w-full bg-neutral-light border-b border-neutral-light z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center py-3 text-sm overflow-x-auto">
              <nav className="flex items-center space-x-2 whitespace-nowrap">
                {breadcrumbs.map((crumb, index) => (
                  <div key={crumb.href} className="flex items-center">
                    {index > 0 && (
                      <ChevronRight className="h-4 w-4 text-neutral-dark/40 mx-2" />
                    )}
                    {index === 0 ? (
                      <Link
                        to={crumb.href}
                        className="flex items-center text-neutral-dark/60 hover:text-primary transition-colors"
                      >
                        <Home className="h-4 w-4 mr-1" />
                        {crumb.name}
                      </Link>
                    ) : index === breadcrumbs.length - 1 ? (
                      <span className="text-neutral-dark font-medium">{crumb.name}</span>
                    ) : (
                      <Link
                        to={crumb.href}
                        className="text-neutral-dark/60 hover:text-primary transition-colors"
                      >
                        {crumb.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
