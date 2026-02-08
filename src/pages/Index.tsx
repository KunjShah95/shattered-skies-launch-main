import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background hero-pattern">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="mb-4 text-4xl font-serif font-bold">
          Welcome to <span className="gradient-text">Shattered Skies</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover a story that will change everything you thought you knew about reality.
        </p>
        <Button asChild size="lg" className="btn-primary">
          <Link to="/">
            Start Reading
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
