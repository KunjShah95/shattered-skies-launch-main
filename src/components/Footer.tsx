import { Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "Get the Book", href: "/buy" },
      { label: "About", href: "/about" },
      { label: "Newsletter", href: "/newsletter" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  };

  return (
    <footer className="border-t-2 border-foreground/10 bg-white">
      <div className="container max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-black text-foreground mb-6 block hover:opacity-70">
              Aarav Sen
            </Link>
            <p className="text-foreground/60 text-base leading-relaxed max-w-xs">
              Author of <em>Shattered Skies</em>. Creating stories that make you think, feel, and question everything.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black text-lg text-foreground mb-6">Navigate</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-foreground/60 hover:text-foreground font-bold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-black text-lg text-foreground mb-6">Follow</h4>
            <div className="flex gap-6">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center hover:bg-foreground/10 transition"
                >
                  <social.icon className="h-5 w-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-foreground/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-sm text-foreground/60">
          <p className="font-bold">© {new Date().getFullYear()} Aarav Sen. All rights reserved.</p>
          <div className="flex gap-8">
            {footerLinks.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-bold hover:text-foreground transition-colors"
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
