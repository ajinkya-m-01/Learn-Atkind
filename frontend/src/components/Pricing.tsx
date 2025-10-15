import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Access to 20+ courses",
      "Basic certificates",
      "Community forum access",
      "Email support",
      "Monthly webinars",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "Most popular for serious learners",
    features: [
      "Access to all 100+ courses",
      "Verified certificates",
      "Priority support",
      "1-on-1 mentorship sessions",
      "Career guidance",
      "Exclusive AI resources",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For teams and organizations",
    features: [
      "Unlimited course access",
      "Custom learning paths",
      "Dedicated account manager",
      "Team analytics dashboard",
      "On-site workshops",
      "API access",
      "White-label options",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your AI learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const bgColors = ['bg-card-lavender', 'bg-gradient-purple', 'bg-card-peach'];
            const bgClass = bgColors[index % bgColors.length];
            return (
            <Card
              key={index}
              className={`relative p-8 ${
                plan.popular
                  ? "border-2 border-primary shadow-hover scale-105"
                  : "border-transparent"
              } ${bgClass} hover:-translate-y-2 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-hero text-white px-4 py-1 rounded-full text-sm font-sans font-bold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="font-sans font-bold text-2xl text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="font-sans font-bold text-5xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="font-body text-muted-foreground mb-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-success/10 p-1 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-success" />
                    </div>
                    <span className="font-body text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-sans font-bold rounded-xl ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/90"
                }`}
              >
                Choose {plan.name}
              </Button>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
