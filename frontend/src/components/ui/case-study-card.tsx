import { cn } from "@/lib/utils";
import { Button } from "./button";

interface CaseStudyCardProps {
  company: string;
  logo: string;
  title: string;
  description: string;
  className?: string;
  onReadMore?: () => void;
}

export function CaseStudyCard({ company, logo, title, description, className, onReadMore }: CaseStudyCardProps) {
  return (
    <div className={cn(
      "p-6 bg-white/10 backdrop-blur-md rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all",
      className
    )}>
      <img 
        src={logo} 
        alt={`${company} logo`}
        className="h-12 w-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <Button 
        onClick={onReadMore}
        className="w-full bg-white/20 hover:bg-white/30 text-white"
      >
        Read Case Study →
      </Button>
    </div>
  );
}