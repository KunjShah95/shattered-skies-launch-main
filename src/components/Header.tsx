import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full border-b-2 border-foreground/10 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <NavLink to="/" className="text-xl font-black text-foreground hover:opacity-70">
            Aarav Sen
          </NavLink>

          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="nav-link font-bold text-foreground/70 hover:text-foreground transition-colors"
                activeClassName="text-primary font-black"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/buy">Get the Book</Link>
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
          <div className="md:hidden border-t-2 border-foreground/10 bg-white">
            <nav className="container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="px-4 py-3 text-base font-bold text-foreground/60 hover:text-foreground transition-colors"
                  activeClassName="text-primary font-black bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t-2 border-foreground/10 mt-4">
                <Button asChild className="w-full btn-primary">
                  <Link to="/buy" onClick={() => setIsMenuOpen(false)}>
                    Get the Book
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
