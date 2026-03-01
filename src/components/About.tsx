import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";

const highlights = [
  "Top Quality Assurance",
  "Zero Cost Overruns",
  "On Time Delivery",
  "Best Customer Support",
];

const About = () => (
  <section id="about" className="py-16 lg:py-20 bg-section-bg">
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2">
        <img src={aboutImg} alt="Completed house project" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
      </div>
      <div className="w-full lg:w-1/2">
        <span className="text-primary font-poppins font-semibold text-sm uppercase tracking-wide">Sri Narayani Construction</span>
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mt-2 mb-6">About Us</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Sri Narayani Construction Company is a value-added construction services provider with 25 years of experience, serving areas including Nandanam, Madipakkam, Velachery, Kolathur, Guduvancheri, Ponmar, and more across Chennai. Founded in 2017, we bring decades of expertise to every project.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {highlights.map((h) => (
            <span key={h} className="flex items-center gap-2 text-foreground font-medium text-sm">
              <CheckCircle2 size={18} className="text-primary" />
              {h}
            </span>
          ))}
        </div>
        <a href="#contact" className="inline-block bg-primary hover:bg-orange-dark text-primary-foreground font-poppins font-semibold px-8 py-3 rounded transition-colors">
          Know More
        </a>
      </div>
    </div>
  </section>
);

export default About;
