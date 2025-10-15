import { useState } from 'react';
import { ExternalLink, Github, Play, Trophy, Users } from 'lucide-react';

const ProjectShowcaseGallery = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Content Generator',
      category: 'NLP',
      student: 'Sarah Chen',
      description: 'GPT-powered content generation platform with fine-tuned models for marketing copy, blog posts, and social media content.',
      technologies: ['GPT-4', 'LangChain', 'React', 'FastAPI'],
      image: '📝',
      stats: { users: '10K+', accuracy: '95%' },
      featured: true
    },
    {
      id: 2,
      title: 'Medical Image Classifier',
      category: 'Computer Vision',
      student: 'David Kumar',
      description: 'CNN-based diagnostic tool for detecting diseases from X-rays and MRI scans with 98% accuracy.',
      technologies: ['TensorFlow', 'ResNet', 'Flask', 'Docker'],
      image: '🏥',
      stats: { accuracy: '98%', speed: '0.5s' },
      featured: true
    },
    {
      id: 3,
      title: 'Smart Chatbot Assistant',
      category: 'NLP',
      student: 'Emily Rodriguez',
      description: 'Context-aware customer service bot using RAG and vector databases for instant, accurate responses.',
      technologies: ['OpenAI', 'Pinecone', 'Node.js', 'Redis'],
      image: '💬',
      stats: { users: '50K+', uptime: '99.9%' },
      featured: false
    },
    {
      id: 4,
      title: 'Voice Clone Studio',
      category: 'Audio AI',
      student: 'Michael Zhang',
      description: 'Text-to-speech system with custom voice cloning capabilities using transformer architectures.',
      technologies: ['PyTorch', 'Tacotron', 'FastAPI', 'AWS'],
      image: '🎙️',
      stats: { voices: '1000+', quality: '4.8/5' },
      featured: false
    },
    {
      id: 5,
      title: 'Real-time Object Detector',
      category: 'Computer Vision',
      student: 'Lisa Thompson',
      description: 'YOLO-based real-time detection system for security and surveillance applications.',
      technologies: ['YOLOv8', 'OpenCV', 'Python', 'Kubernetes'],
      image: '👁️',
      stats: { fps: '60 FPS', accuracy: '92%' },
      featured: true
    },
    {
      id: 6,
      title: 'Stock Predictor AI',
      category: 'Time Series',
      student: 'Alex Johnson',
      description: 'LSTM-based stock market prediction with sentiment analysis from news and social media.',
      technologies: ['LSTM', 'Pandas', 'Scikit-learn', 'Streamlit'],
      image: '📈',
      stats: { accuracy: '87%', trades: '5K+' },
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-gray-900 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold tracking-wide uppercase">Student Projects</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Real Projects, Real Impact
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            See what our students have built. From production-ready applications to 
            innovative research projects, these are real AI solutions making a difference.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => {
            const isHovered = hoveredProject === project.id;
            
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative cursor-pointer"
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute -top-2 -right-2 z-20 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}

                {/* Card */}
                <div
                  className="relative h-full rounded-xl border-2 bg-white overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: isHovered ? '#111827' : '#e5e7eb',
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: isHovered 
                      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                      : '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Top section */}
                  <div className="relative p-6 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-16 h-16 rounded-lg border border-gray-200 flex items-center justify-center text-4xl transition-all duration-300"
                        style={{
                          transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0)',
                          borderColor: isHovered ? '#111827' : '#e5e7eb'
                        }}
                      >
                        {project.image}
                      </div>
                      
                      <div className="flex gap-2">
                        <button 
                          className="p-2 bg-white border border-gray-200 rounded-lg hover:border-gray-900 transition-all"
                          aria-label="View demo"
                          style={{
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                          }}
                        >
                          <Play className="w-4 h-4 text-gray-700" />
                        </button>
                        <button 
                          className="p-2 bg-white border border-gray-200 rounded-lg hover:border-gray-900 transition-all"
                          aria-label="View on GitHub"
                          style={{
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                          }}
                        >
                          <Github className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-700 mb-3">
                      {project.category}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">by {project.student}</span>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between py-4 border-t border-gray-200 mb-4">
                      {Object.entries(project.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl font-bold text-gray-900">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 font-medium uppercase">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View Details */}
                    <button
                      className="w-full px-4 py-3 rounded-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        transform: isHovered ? 'scale(1.02)' : 'scale(1)'
                      }}
                    >
                      View Project
                      <ExternalLink 
                        className="w-4 h-4 transition-transform" 
                        style={{
                          transform: isHovered ? 'translateX(2px)' : 'translateX(0)'
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center border-2 border-gray-200 rounded-2xl p-12 hover:border-gray-900 transition-all duration-300">
          <div className="mb-4">
            <Trophy className="w-12 h-12 mx-auto text-gray-900 mb-4" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Your Own AI Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their ideas into reality. 
            Start building production-ready AI applications today.
          </p>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all">
            Start Building Now
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcaseGallery;