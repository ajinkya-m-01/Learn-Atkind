import { Card, CardContent, CardFooter } from "./card";

interface ContentCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  action?: React.ReactNode;
}

export const ContentCard = ({ title, description, icon, image, action }: ContentCardProps) => (
  <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
    <CardContent className="p-6">
      {image && (
        <div className="aspect-video mb-4 overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      {icon && <div className="text-purple-600 mb-4">{icon}</div>}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
    {action && <CardFooter className="p-6 pt-0">{action}</CardFooter>}
  </Card>
);