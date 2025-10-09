import { useState } from 'react';
import { Brain, Zap, Code, MessageSquare, Database, Sparkles, ArrowRight } from 'lucide-react';



const AIFeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Brain,
      title: "Large Language Models",
      description: "Master cutting-edge LLMs including GPT, BERT, and T5 architectures",
      image: '/src/assets/LLM.png',

    },
    {
      icon: Zap,
      title: "Transformer Architecture",
      description: "Deep dive into attention mechanisms and transformer implementations",
      image: '/src/assets/Transformer Architecture.png',
    },
    {
      icon: Code,
      title: "Fine-tuning & Optimization",
      description: "Learn model optimization, quantization, and deployment strategies",
      image: '/src/assets/Fine-tuning & Optimization.png',
    },
    {
      icon: MessageSquare,
      title: "Prompt Engineering",
      description: "Develop expertise in crafting effective prompts for various use cases",
      image: '/src/assets/Prompt Engineering.png',
    },
    {
      icon: Database,
      title: "Vector Databases",
      description: "Work with embeddings, semantic search, and RAG implementations",
      image: '/src/assets/Vector Databases.png',
    },
    {
      icon: Sparkles,
      title: "Generative AI Applications",
      description: "Build real-world applications with LLMs and generative models",
      image: '/src/assets/Generative AI Applications.png',
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-gray-900 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold tracking-wide uppercase">Advanced AI</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Master the Future of AI
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            From foundational transformers to production-ready LLM applications, 
            gain hands-on experience with the technologies shaping AI's future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  borderColor: isHovered ? '#111827' : '#e5e7eb',
                  boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon on Image */}
                  <div 
                    className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center transition-all duration-300"
                    style={{
                      transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                    }}
                  >
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6 bg-white">
                  {/* Subtle background on hover */}
                  <div 
                    className="absolute inset-0 bg-gray-50 transition-opacity duration-300"
                    style={{ opacity: isHovered ? 1 : 0 }}
                  />

                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {feature.description}
                    </p>

                    {/* Hover arrow */}
                    <div 
                      className="flex items-center gap-2 text-sm font-semibold text-gray-900 transition-all duration-300"
                      style={{ 
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateX(0)' : 'translateX(-10px)'
                      }}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div 
          className="border-2 border-gray-200 rounded-2xl p-10 transition-all duration-300 hover:border-gray-900 hover:shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "LLM Projects" },
              { value: "15+", label: "AI Frameworks" },
              { value: "100%", label: "Hands-on Learning" },
              { value: "24/7", label: "Expert Support" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer"
              >
                <div 
                  className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 transition-transform duration-300 group-hover:scale-110"
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFeaturesSection;