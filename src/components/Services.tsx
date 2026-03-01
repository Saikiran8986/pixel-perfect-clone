import { Shield, DollarSign, Clock, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Top Quality Assurance",
    desc: "We are committed to deliver the right product at the right place and hence our products are highly safe for construction.",
  },
  {
    icon: DollarSign,
    title: "Zero Cost Overruns",
    desc: "We are committed to deliver the right product at the right place and hence our products are highly safe for construction.",
  },
  {
    icon: Clock,
    title: "On Time Delivery",
    desc: "Our team is always keen to develop and design the best solution for our customers with cost-effectiveness and quality.",
  },
  {
    icon: HeadphonesIcon,
    title: "Best Customer Support",
    desc: "By modernisation and by introduction of new products we keep our pace to cater the requirements of our customers.",
  },
];

const Services = () => (
  <section className="py-16 lg:py-20 bg-section-bg">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground text-center mb-4">What Makes Us Different</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {services.map((s) => (
          <div key={s.title} className="text-center bg-background rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <s.icon size={32} />
            </div>
            <h4 className="font-poppins font-semibold text-foreground mb-3">{s.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
