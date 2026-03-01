import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const locations = [
  "Nandanam", "Pallikaranai", "Velachery", "Porur", "Perungudi", "Anna Nagar",
  "Madipakkam", "Ullagaram", "Mannivakkam", "Guduvancheri", "Ponmar", "Urapakkam",
];

const Hero = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[650px]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Construction site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-20 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Left content */}
        <div className="flex-1 pt-4">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-background leading-tight mb-6">
            Welcome To Sri Narayani Construction
            <span className="block text-xl md:text-2xl font-medium text-primary mt-2">(Construction and Architect)</span>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 mb-8">
            {locations.map((loc) => (
              <span key={loc} className="flex items-center gap-2 text-background/90 text-sm">
                <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                {loc}
              </span>
            ))}
          </div>
          <a href="#contact" className="inline-block bg-primary hover:bg-orange-dark text-primary-foreground font-poppins font-semibold px-8 py-3 rounded transition-colors">
            View More
          </a>
        </div>

        {/* Enquiry Form */}
        <div className="w-full lg:w-[400px] bg-background rounded-lg shadow-xl p-6 lg:p-8">
          <h3 className="font-poppins font-bold text-xl text-foreground mb-6">Enquire Now</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text" placeholder="Name" required
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email" placeholder="E-Mail" required
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="tel" placeholder="Phone Number" required
              value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              placeholder="Your Message Here" rows={3}
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button type="submit" className="bg-primary hover:bg-orange-dark text-primary-foreground font-poppins font-semibold py-3 rounded transition-colors">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
