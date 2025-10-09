import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  className?: string;
}

export function TeamCard({ name, role, image, className }: TeamCardProps) {
  return (
    <div className={cn(
      "flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all",
      className
    )}>
      <Avatar className="w-24 h-24 mb-4">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}