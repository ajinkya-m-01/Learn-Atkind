import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Clock, Award } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Learn from Experts",
    description: "Industry professionals with years of real-world AI experience teaching you the latest techniques and best practices.",
  },
  {
    icon: Briefcase,
    title: "Hands-on Projects",
    description: "Build real AI applications and create a portfolio that showcases your skills to potential employers.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Learn at your own pace with lifetime access to course materials, 24/7 availability, and mobile support.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Earn recognized certificates upon completion to validate your skills and boost your career prospects.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bold text-4xl md:text-5xl text-black mb-4">
            Why Choose Atkind AI Academy?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to succeed in your AI learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group p-8 text-center bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gray-50 p-4 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-10 w-10 text-gray-900" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
