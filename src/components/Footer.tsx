import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/training", label: "Training" },
    { to: "/contact", label: "Contact" },
  ];

  const socials = [
    { href: "https://www.facebook.com/profile.php?id=61578774855523", icon: Facebook },
    { href: "https://www.linkedin.com/company/107144620", icon: Linkedin },
    { href: "https://x.com/spydX_", icon: Twitter },
    { href: "https://www.instagram.com/spydx_tech/", icon: Instagram },
  ];

  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
          Spyd<span className="text-brand-x">X</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          Innovating your future with AI-powered solutions.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {socials.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © 2026{" "}
          <span className="text-primary">thespydx.com</span> — All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
