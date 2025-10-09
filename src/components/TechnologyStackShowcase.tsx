import { useState } from 'react';
import { Code, TrendingUp, Zap, Grid } from 'lucide-react';

const TechnologyStackShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Grid },
    { id: 'frameworks', name: 'Frameworks', icon: Code },
    { id: 'cloud', name: 'Cloud & MLOps', icon: TrendingUp },
    { id: 'tools', name: 'Tools', icon: Zap }
  ];

  const technologies = [
    {
      name: 'Python',
      category: 'frameworks',
      logo: '🐍',
      level: 'Core',
      description: 'Primary programming language for AI/ML development',
      popularity: 95
    },
    {
      name: 'TensorFlow',
      category: 'frameworks',
      logo: '🔶',
      level: 'Advanced',
      description: 'Production-ready deep learning framework',
      popularity: 90
    },
    {
      name: 'PyTorch',
      category: 'frameworks',
      logo: '🔥',
      level: 'Advanced',
      description: 'Research-focused deep learning library',
      popularity: 92
    },
    {
      name: 'Hugging Face',
      category: 'frameworks',
      logo: '🤗',
      level: 'Specialized',
      description: 'Transformers and NLP model hub',
      popularity: 88
    },
    {
      name: 'Scikit-learn',
      category: 'tools',
      logo: '📊',
      level: 'Core',
      description: 'Classical machine learning algorithms',
      popularity: 85
    },
    {
      name: 'Pandas',
      category: 'tools',
      logo: '🐼',
      level: 'Core',
      description: 'Data manipulation and analysis',
      popularity: 93
    },
    {
      name: 'NumPy',
      category: 'tools',
      logo: '🔢',
      level: 'Core',
      description: 'Numerical computing foundation',
      popularity: 94
    },
    {
      name: 'LangChain',
      category: 'frameworks',
      logo: '⛓️',
      level: 'Specialized',
      description: 'LLM application development framework',
      popularity: 82
    },
    {
      name: 'AWS',
      category: 'cloud',
      logo: '☁️',
      level: 'Deployment',
      description: 'Cloud infrastructure and ML services',
      popularity: 89
    },
    {
      name: 'Docker',
      category: 'cloud',
      logo: '🐳',
      level: 'Deployment',
      description: 'Containerization and deployment',
      popularity: 87
    },
    {
      name: 'Kubernetes',
      category: 'cloud',
      logo: '⚓',
      level: 'Deployment',
      description: 'Container orchestration at scale',
      popularity: 83
    },
    {
      name: 'MLflow',
      category: 'cloud',
      logo: '📈',
      level: 'Deployment',
      description: 'ML lifecycle and experiment tracking',
      popularity: 78
    },
    {
      name: 'Jupyter',
      category: 'tools',
      logo: '📓',
      level: 'Core',
      description: 'Interactive development environment',
      popularity: 91
    },
    {
      name: 'OpenAI API',
      category: 'frameworks',
      logo: '🤖',
      level: 'Specialized',
      description: 'GPT models and AI services',
      popularity: 86
    },
    {
      name: 'Weights & Biases',
      category: 'cloud',
      logo: '📊',
      level: 'Deployment',
      description: 'ML experiment tracking and visualization',
      popularity: 75
    },
    {
      name: 'Keras',
      category: 'frameworks',
      logo: '🔷',
      level: 'Core',
      description: 'High-level neural networks API',
      popularity: 84
    }
  ];

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Core': return 'bg-blue-50 text-blue-700 border border-blue-200';
      case 'Advanced': return 'bg-purple-50 text-purple-700 border border-purple-200';
      case 'Specialized': return 'bg-green-50 text-green-700 border border-green-200';
      case 'Deployment': return 'bg-orange-50 text-orange-700 border border-orange-200';
      default: return 'bg-gray-50 text-gray-700 border border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-gray-900 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold tracking-wide uppercase">Tech Stack</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Technologies You'll Master
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Learn the industry-standard tools and frameworks used by leading AI companies. 
            Build real-world skills with hands-on practice.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-gray-200">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                  transition-all duration-200
                  ${selectedCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-900'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="group border-2 border-gray-200 rounded-xl p-6 hover:border-gray-900 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center text-2xl group-hover:border-gray-900 transition-colors">
                    {tech.logo}
                  </div>
                  
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getLevelColor(tech.level)}`}>
                    {tech.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {tech.name}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {tech.description}
                </p>
              </div>

              {/* Popularity Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Popularity</span>
                  <span className="font-semibold">{tech.popularity}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gray-900 transition-all duration-700"
                    style={{ width: `${tech.popularity}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="border-2 border-gray-200 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '16+', label: 'Technologies' },
              { value: '100%', label: 'Industry Used' },
              { value: '50+', label: 'Real Projects' },
              { value: '24/7', label: 'Practice Access' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
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

export default TechnologyStackShowcase;