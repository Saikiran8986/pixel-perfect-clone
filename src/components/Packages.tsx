import { Building2, Crown, Gem } from "lucide-react";

const packages = [
  {
    title: "Prime",
    price: "₹2100",
    unit: "sq.ft",
    desc: "Minimum 2000sq.ft\nGround Floor + First Floor",
    icon: Building2,
  },
  {
    title: "Prime Plus",
    price: "₹2300",
    unit: "sq.ft",
    desc: "Minimum 2000sq.ft\nGround Floor + First Floor",
    icon: Crown,
    featured: true,
  },
  {
    title: "Luxury",
    price: "₹3000",
    unit: "sq.ft",
    desc: "Above G+2 Building",
    icon: Gem,
  },
];

const Packages = () => (
  <section id="packages" className="py-16 lg:py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className={`text-center border border-border rounded-lg p-8 hover:shadow-xl transition-shadow ${
              pkg.featured ? "ring-2 ring-primary" : ""
            }`}
          >
            <h3 className="font-poppins font-bold text-xl text-foreground mb-4">{pkg.title}</h3>
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-primary">
              <pkg.icon size={40} strokeWidth={1.5} />
            </div>
            <div className="font-poppins font-bold text-3xl text-primary mb-1">
              {pkg.price}<span className="text-base font-normal text-muted-foreground">{pkg.unit}</span>
            </div>
            <p className="text-sm text-muted-foreground whitespace-pre-line mt-3 mb-6">{pkg.desc}</p>
            <div className="flex gap-3 justify-center">
              <a href="#" className="bg-primary hover:bg-orange-dark text-primary-foreground font-poppins text-sm font-medium px-5 py-2 rounded transition-colors">
                Download
              </a>
              <a href="#" className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-poppins text-sm font-medium px-5 py-2 rounded transition-colors">
                More details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Packages;
