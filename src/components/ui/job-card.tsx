import { cn } from "@/lib/utils";
import { Button } from "./button";

interface JobCardProps {
  title: string;
  location: string;
  department: string;
  type: string;
  className?: string;
  onApply?: () => void;
}

export function JobCard({ title, location, department, type, className, onApply }: JobCardProps) {
  return (
    <div className={cn(
      "p-6 border rounded-xl hover:shadow-lg transition-all bg-white",
      className
    )}>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="space-y-2 mb-4">
        <p className="text-gray-600">{department}</p>
        <p className="text-gray-600">{location} • {type}</p>
      </div>
      <Button 
        onClick={onApply}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
      >
        Apply Now →
      </Button>
    </div>
  );
}