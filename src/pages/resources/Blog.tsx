import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Machine Learning in 2025",
    description: "Explore the latest advancements in ML algorithms and their real-world applications across industries.",
    author: "Sarah Chen",
    date: "October 1, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Understanding Neural Networks",
    description: "A comprehensive guide to neural network architectures and how they power modern AI systems.",
    author: "Michael Roberts",
    date: "September 28, 2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "AI Ethics and Responsible Development",
    description: "Examining the ethical considerations and best practices for developing AI systems responsibly.",
    author: "Dr. Emily Watson",
    date: "September 25, 2025",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Natural Language Processing Breakthroughs",
    description: "Recent innovations in NLP and how they're transforming human-computer interaction.",
    author: "James Liu",
    date: "September 20, 2025",
    image: "https://media.istockphoto.com/id/1790814384/photo/natural-language-processing.webp?a=1&b=1&s=612x612&w=0&k=20&c=VZVntTM2y0UNF3w08ZxLGA-l8i9EPwPojbgbwdVdj4I="
  },
  {
    id: 5,
    title: "Computer Vision Applications",
    description: "Discover how computer vision is revolutionizing industries from healthcare to autonomous vehicles.",
    author: "Rachel Green",
    date: "September 15, 2025",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Getting Started with Deep Learning",
    description: "A beginner-friendly introduction to deep learning concepts and practical implementation tips.",
    author: "David Kumar",
    date: "September 10, 2025",
    image: "https://plus.unsplash.com/premium_photo-1678834890201-47674c716347?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVlcCUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Insights & Updates
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and innovations in Artificial Intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center text-xs text-gray-500 space-x-2">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;