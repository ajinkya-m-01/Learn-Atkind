import { cn } from "@/lib/utils";
import { Button } from "./button";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  className?: string;
  onReadMore?: () => void;
}

export function BlogCard({ title, excerpt, image, author, date, className, onReadMore }: BlogCardProps) {
  return (
    <div className={cn(
      "overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all",
      className
    )}>
      <div className="aspect-video relative">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
          <Button 
            onClick={onReadMore}
            variant="ghost" 
            className="text-purple-600 hover:text-purple-700"
          >
            Read More →
          </Button>
        </div>
      </div>
    </div>
  );
}