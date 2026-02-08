import { NavLink } from "./NavLink";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/buy", label: "Get the Book" },
    { to: "/newsletter", label: "Newsletter" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-lg font-serif font-bold gradient-text">
            <Sparkles className="h-5 w-5" />
            <span>Aarav Sen</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="nav-link px-4 py-2"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild size="sm" className="btn-primary">
              <Link to="/buy">Buy Now</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <nav className="container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  activeClassName="text-primary bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-border/50 mt-4">
                <Button asChild className="w-full btn-primary">
                  <Link to="/buy" onClick={() => setIsMenuOpen(false)}>
                    Buy Now
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
