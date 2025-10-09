import { Card } from "@/components/ui/card";
import { Linkedin, Award } from "lucide-react";

const instructors = [
  {
    name: "Dr. Alex Morgan",
    role: "AI Research Lead",
    initials: "AM",
    expertise: "Deep Learning & Neural Networks",
    experience: "15+ years",
  },
  {
    name: "Dr. Priya Patel",
    role: "NLP Specialist",
    initials: "PP",
    expertise: "Natural Language Processing",
    experience: "12+ years",
  },
  {
    name: "James Chen",
    role: "Computer Vision Expert",
    initials: "JC",
    expertise: "Image Recognition & CV",
    experience: "10+ years",
  },
  {
    name: "Sophie Anderson",
    role: "ML Engineer",
    initials: "SA",
    expertise: "Machine Learning Systems",
    experience: "8+ years",
  },
];

const Instructors = () => {
  return (
    <section id="instructors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            Learn from Top AI Experts
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Our instructors are industry leaders with proven track records in AI and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => {
            const bgColors = ['bg-card-blue', 'bg-card-mint', 'bg-card-peach', 'bg-card-lavender'];
            const bgClass = bgColors[index % bgColors.length];
            return (
            <Card
              key={index}
              className={`group p-8 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-2 ${bgClass} border-transparent`}
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-hero flex items-center justify-center text-white font-sans font-bold text-3xl group-hover:scale-110 transition-transform">
                  {instructor.initials}
                </div>
                <div className="absolute bottom-0 right-1/2 translate-x-16 translate-y-2 bg-success p-2 rounded-full">
                  <Award className="h-5 w-5 text-success-foreground" />
                </div>
              </div>
              <h3 className="font-sans font-bold text-xl text-foreground mb-2">
                {instructor.name}
              </h3>
              <p className="font-body text-sm text-primary font-semibold mb-3">
                {instructor.role}
              </p>
              <p className="font-body text-muted-foreground text-sm mb-2">
                {instructor.expertise}
              </p>
              <p className="font-body text-muted-foreground text-xs mb-4">
                {instructor.experience} experience
              </p>
              <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="font-body text-sm font-semibold">Connect</span>
              </button>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
