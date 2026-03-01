import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80 py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-poppins font-bold text-lg text-background mb-4">Sri Narayani Construction</h4>
          <p className="text-sm leading-relaxed">Building your vision, Creating reality. 25+ years of construction experience across Chennai.</p>
        </div>
        <div>
          <h4 className="font-poppins font-bold text-lg text-background mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Packages", "Projects", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-poppins font-bold text-lg text-background mb-4">Contact Info</h4>
          <div className="space-y-3 text-sm">
            <a href="mailto:snc.harimaran@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> snc.harimaran@gmail.com
            </a>
            <a href="tel:+919444283942" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> +91-94442 83942
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Madipakkam, Chennai
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-6 text-center text-xs">
        © 2024 Sri Narayani Construction. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
