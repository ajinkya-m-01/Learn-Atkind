import { Card } from "@/components/ui/card";
import { Brain, Cpu, Eye, MessageSquare, Sparkles, ChartBar } from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "AI Basics",
    description: "Foundational AI concepts and introduction",
    courses: 24,
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "ML algorithms and practical applications",
    courses: 32,
  },
  {
    icon: ChartBar,
    title: "Deep Learning",
    description: "Neural networks and advanced techniques",
    courses: 28,
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Text analysis and language models",
    courses: 18,
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image recognition and visual AI",
    courses: 22,
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description: "Create content with AI models",
    courses: 16,
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-black mb-4">
            Browse by Category
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive AI learning paths tailored to your interests
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const bgColors = ['bg-card-purple', 'bg-card-peach', 'bg-card-mint', 'bg-card-lavender', 'bg-card-blue', 'bg-gradient-purple'];
            const iconBgs = ['bg-primary', 'bg-accent', 'bg-success', 'bg-primary', 'bg-accent', 'bg-success'];
            const bgClass = bgColors[index % bgColors.length];
            const iconBg = iconBgs[index % iconBgs.length];
            return (
              <Card
                key={index}
                className={`group p-8 hover:shadow-hover transition-all duration-300 hover:-translate-y-2 cursor-pointer ${bgClass} border-transparent`}
              >
                <div className={`${iconBg} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform shadow-subtle`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-sans font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="font-body text-sm text-primary font-semibold">
                  {category.courses} Courses Available
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
