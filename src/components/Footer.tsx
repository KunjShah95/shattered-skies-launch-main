import { Instagram, Twitter, Youtube, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  const footerLinks = {
    product: [
      { label: "Buy the Book", href: "/buy" },
      { label: "Sample Chapters", href: "#" },
      { label: "Pricing", href: "/buy" },
    ],
    company: [
      { label: "About the Author", href: "/about" },
      { label: "Contact", href: "/about" },
      { label: "Press Kit", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container py-12">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-serif font-bold gradient-text mb-4">
              <Sparkles className="h-5 w-5" />
              <span>Aarav Sen</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Award-winning author crafting stories that blur the line between reality and imagination.
              Join thousands of readers on this journey.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <Button key={index} variant="ghost" size="icon" asChild>
                  <a href={social.href} aria-label={social.icon.name}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive exclusive content and early access to new releases.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
              <Button type="submit" variant="secondary" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aarav Sen. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
