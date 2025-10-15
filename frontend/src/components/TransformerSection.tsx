import { useState, useEffect } from 'react';
import { Cpu, Layers, Zap, ArrowRight, GitBranch, Network } from 'lucide-react';

export default function TransformerSection() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const layers = [
    { name: 'Input Embedding', icon: Layers },
    { name: 'Positional Encoding', icon: GitBranch },
    { name: 'Multi-Head Attention', icon: Network },
    { name: 'Feed Forward', icon: Zap },
    { name: 'Layer Normalization', icon: Cpu },
    { name: 'Output Layer', icon: ArrowRight }
  ];

  const features = [
    {
      title: 'Self-Attention Mechanism',
      description: 'Learn how transformers process sequences in parallel, understanding relationships between all tokens simultaneously',
      stat: '100x',
      statLabel: 'Faster Training'
    },
    {
      title: 'Positional Encoding',
      description: 'Master the mathematical foundations that allow transformers to understand word order and sequential relationships',
      stat: '512+',
      statLabel: 'Token Context'
    },
    {
      title: 'Multi-Head Attention',
      description: 'Discover how multiple attention heads capture different aspects of language and meaning in parallel',
      stat: '16+',
      statLabel: 'Attention Heads'
    }
  ];

  return (
    <div className="relative bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-gray-900 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold tracking-wide uppercase">Transformer Architecture</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Decode the Architecture Behind Modern AI
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Visualize and understand the revolutionary transformer architecture powering GPT, BERT, and the future of AI
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Transformer Visualization */}
          <div className="relative">
            <div className="bg-white rounded-xl border-2 border-gray-200 p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Layer Flow</h3>
                <button
                  onClick={() => setIsAnimating(!isAnimating)}
                  className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition-colors"
                >
                  {isAnimating ? 'Pause' : 'Play'}
                </button>
              </div>
              
              {/* Visual Diagram */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-16 h-16 border-2 border-gray-900 rounded-lg flex items-center justify-center text-xs font-bold">
                    INPUT
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <div className="flex-1 grid grid-cols-3 gap-2">
                    {[1,2,3,4,5,6].map((i) => (
                      <div 
                        key={i}
                        className="h-12 rounded border transition-all duration-300"
                        style={{
                          borderWidth: '2px',
                          borderColor: activeLayer + 1 >= i ? '#111827' : '#e5e7eb',
                          backgroundColor: activeLayer + 1 >= i ? '#f9fafb' : 'white'
                        }}
                      />
                    ))}
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <div className="w-16 h-16 border-2 border-gray-900 rounded-lg flex items-center justify-center text-xs font-bold">
                    OUTPUT
                  </div>
                </div>
                <div className="text-center text-xs text-gray-500 font-medium">
                  Active Layer: {layers[activeLayer].name}
                </div>
              </div>

              {/* Layer List */}
              <div className="space-y-2">
                {layers.map((layer, index) => {
                  const Icon = layer.icon;
                  const isActive = activeLayer === index;
                  
                  return (
                    <div key={index} className="relative">
                      <div
                        onClick={() => {
                          setActiveLayer(index);
                          setIsAnimating(false);
                        }}
                        className="relative p-4 rounded-lg cursor-pointer transition-all duration-300 border-2"
                        style={{
                          borderColor: isActive ? '#111827' : '#e5e7eb',
                          backgroundColor: isActive ? '#f9fafb' : 'white',
                          transform: isActive ? 'translateX(4px)' : 'translateX(0)'
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-10 h-10 rounded-lg border-2 flex items-center justify-center transition-all"
                            style={{
                              borderColor: isActive ? '#111827' : '#e5e7eb',
                              backgroundColor: isActive ? '#111827' : 'white'
                            }}
                          >
                            <Icon 
                              className="w-5 h-5 transition-colors" 
                              style={{ color: isActive ? 'white' : '#6b7280' }}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className={`font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                                {layer.name}
                              </span>
                              <span className="text-xs text-gray-500 font-medium">
                                Layer {index + 1}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Connection Line */}
                      {index < layers.length - 1 && (
                        <div className="absolute left-8 bottom-0 w-px h-2 bg-gray-300 translate-y-full" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const isHovered = hoveredFeature === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="bg-white border-2 rounded-xl p-6 transition-all duration-300 cursor-pointer"
                  style={{
                    borderColor: isHovered ? '#111827' : '#e5e7eb',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: isHovered 
                      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                      : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div 
                        className="text-3xl font-bold text-gray-900 transition-transform"
                        style={{
                          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                        }}
                      >
                        {feature.stat}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 font-medium">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="border-2 border-gray-200 rounded-2xl p-10 hover:border-gray-900 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Build with Transformers?
              </h3>
              <p className="text-gray-600">
                Start your journey into advanced AI architecture today
              </p>
            </div>
            <button className="group px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all whitespace-nowrap flex items-center gap-2">
              Start Learning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}