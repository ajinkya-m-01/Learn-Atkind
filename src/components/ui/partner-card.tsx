import { cn } from "@/lib/utils";

interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  className?: string;
}

export function PartnerCard({ name, logo, description, className }: PartnerCardProps) {
  return (
    <div className={cn(
      "p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all text-center",
      className
    )}>
      <img 
        src={logo} 
        alt={`${name} logo`}
        className="h-16 w-auto mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}