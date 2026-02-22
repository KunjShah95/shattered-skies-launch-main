import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center px-6 max-w-2xl">
        <div className="mb-8 text-7xl md:text-9xl font-black text-foreground/10">404</div>
        <h1 className="text-5xl md:text-6xl font-black mb-6">
          Page<br />
          <span className="gradient-text">Not Found</span>
        </h1>
        <p className="text-xl text-foreground/60 mb-12 max-w-lg mx-auto">
          The page you're looking for doesn't exist. It might have been moved, or you might have taken a wrong turn.
        </p>
        <Button asChild size="lg" className="btn-primary">
          <Link to="/">
            Back to Home
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
