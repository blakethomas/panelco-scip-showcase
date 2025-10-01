import { Shield, Zap, Clock, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Superior Durability",
    description: "SCIP construction withstands extreme weather, earthquakes, and fire, ensuring your building lasts for generations.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Exceptional insulation properties reduce heating and cooling costs by up to 60%, creating comfortable, sustainable spaces.",
  },
  {
    icon: Clock,
    title: "Faster Construction",
    description: "Streamlined installation process cuts construction time by 40-50%, getting your project completed ahead of schedule.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable materials and reduced energy consumption make SCIP the environmentally responsible choice.",
  },
];

const Benefits = () => {
  return (
    <section id="solutions" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose SCIP Construction?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of building technology with proven performance and cost savings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
