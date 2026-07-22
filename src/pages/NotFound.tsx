import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-ink min-h-screen pt-16">
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5">
        <div className="text-center">
          <span className="eyebrow text-paper/45">404</span>
          <h1 className="mt-6 font-sans font-expanded font-extrabold text-paper tracking-tight leading-[1.0] text-5xl md:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-paper/60 leading-relaxed max-w-md mx-auto">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link
            to="/"
            className="eyebrow inline-flex items-center gap-2 bg-paper text-ink rounded-full px-7 py-4 mt-9 hover:bg-paper-bright transition-colors"
          >
            Return home
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
