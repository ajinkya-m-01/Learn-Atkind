import { cn } from "@/lib/utils";

interface GlassCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

export function GlassCard({ icon, title, description, className, onClick }: GlassCardProps) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "group p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20",
        "hover:bg-white/20 hover:scale-105 transition-all cursor-pointer",
        className
      )}
    >
      <div className="p-3 bg-white/10 rounded-lg w-fit mb-4 group-hover:bg-white/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}