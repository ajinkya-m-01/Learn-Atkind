import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Download } from "lucide-react";

interface AssetCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  downloadUrl: string;
  className?: string;
}

export function AssetCard({ title, description, icon, downloadUrl, className }: AssetCardProps) {
  return (
    <div className={cn(
      "p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all",
      className
    )}>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-purple-100 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button 
        onClick={() => window.open(downloadUrl, '_blank')}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
      >
        <Download className="w-4 h-4 mr-2" />
        Download
      </Button>
    </div>
  );
}