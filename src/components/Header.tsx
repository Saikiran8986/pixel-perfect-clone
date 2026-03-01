import { useState, useEffect } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Packages", href: "#packages" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href="mailto:snc.harimaran@gmail.com" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">snc.harimaran@gmail.com</span>
            </a>
            <a href="tel:+919444283942" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors">
              <Phone size={14} />
              <span>+91-94442 83942</span>
            </a>
            <span className="hidden md:flex items-center gap-2 text-secondary-foreground/80">
              <MapPin size={14} />
              Madipakkam Chennai
            </span>
          </div>
          <div className="flex items-center gap-3">
            {["facebook", "linkedin", "youtube"].map((s) => (
              <a key={s} href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors text-xs uppercase">{s.charAt(0).toUpperCase()}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-shadow duration-300 bg-background ${isScrolled ? "shadow-lg" : "shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-poppins font-bold text-primary-foreground text-lg">
              SNC
            </div>
            <div>
              <span className="font-poppins font-bold text-secondary text-lg leading-tight block">Sri Narayani Construction</span>
              <span className="text-xs text-muted-foreground italic">Building your vision Creating reality</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="font-poppins font-medium text-foreground hover:text-primary transition-colors text-sm">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="font-poppins font-medium text-foreground hover:text-primary py-2 border-b border-border/50">
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
