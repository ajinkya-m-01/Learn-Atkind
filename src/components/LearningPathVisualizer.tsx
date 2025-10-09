import { useState } from 'react';
import { BookOpen, Code, Brain, Rocket, Award, CheckCircle, Lock } from 'lucide-react';

const LearningPathRoadmap = () => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const learningPath = [
    {
      id: 1,
      title: "Foundations",
      subtitle: "Python & Math Basics",
      icon: BookOpen,
      duration: "4 weeks",
      courses: 8,
      description: "Master Python programming, linear algebra, calculus, and statistics fundamentals",
      skills: ["Python", "NumPy", "Pandas", "Linear Algebra", "Statistics"],
      locked: false
    },
    {
      id: 2,
      title: "Machine Learning",
      subtitle: "Core Algorithms",
      icon: Code,
      duration: "6 weeks",
      courses: 12,
      description: "Learn supervised and unsupervised learning, neural networks, and model evaluation",
      skills: ["Scikit-learn", "TensorFlow", "Regression", "Classification", "Clustering"],
      locked: false
    },
    {
      id: 3,
      title: "Deep Learning",
      subtitle: "Neural Networks",
      icon: Brain,
      duration: "8 weeks",
      courses: 15,
      description: "Deep dive into CNNs, RNNs, LSTMs, and advanced neural network architectures",
      skills: ["PyTorch", "Keras", "CNNs", "RNNs", "Transfer Learning"],
      locked: false
    },
    {
      id: 4,
      title: "LLMs & NLP",
      subtitle: "Language Models",
      icon: Rocket,
      duration: "10 weeks",
      courses: 18,
      description: "Master transformers, BERT, GPT, and build production-ready NLP applications",
      skills: ["Transformers", "BERT", "GPT", "Hugging Face", "Fine-tuning"],
      locked: completedSteps.length < 3
    },
    {
      id: 5,
      title: "Mastery",
      subtitle: "Production & Deployment",
      icon: Award,
      duration: "6 weeks",
      courses: 10,
      description: "Deploy models at scale, MLOps, monitoring, and real-world project completion",
      skills: ["MLOps", "Docker", "Kubernetes", "AWS/GCP", "Model Monitoring"],
      locked: completedSteps.length < 4
    }
  ];

  const toggleComplete = (stepId) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const progress = Math.round((completedSteps.length / learningPath.length) * 100);
  const totalCourses = learningPath.reduce((sum, step) => sum + step.courses, 0);

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block border border-gray-900 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold tracking-wide uppercase">Learning Path</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Your Roadmap to AI Mastery
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            A structured journey from beginner to expert. Each step builds on the previous one.
          </p>
        </div>

        {/* Progress Stats */}
        <div className="mb-16 border border-gray-200 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {completedSteps.length} of {learningPath.length}
              </div>
              <div className="text-sm text-gray-600">Steps completed</div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {totalCourses}
              </div>
              <div className="text-sm text-gray-600">Total courses</div>
            </div>
          </div>
          
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gray-900 transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Learning Path Steps */}
        <div className="space-y-6">
          {learningPath.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.includes(step.id);
            const isLast = index === learningPath.length - 1;

            return (
              <div key={step.id} className="relative">
                {/* Connecting Line */}
                {!isLast && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-gray-200 -mb-6" />
                )}

                <div
                  className={`
                    relative bg-white border-2 rounded-2xl p-8 transition-all duration-300
                    ${step.locked 
                      ? 'border-gray-200 opacity-60' 
                      : isCompleted
                      ? 'border-gray-900'
                      : 'border-gray-200 hover:border-gray-400 cursor-pointer'
                    }
                  `}
                  onClick={() => !step.locked && toggleComplete(step.id)}
                >
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        w-12 h-12 rounded-xl border-2 flex items-center justify-center
                        ${step.locked 
                          ? 'border-gray-300 bg-gray-50' 
                          : isCompleted
                          ? 'border-gray-900 bg-gray-900'
                          : 'border-gray-900 bg-white'
                        }
                      `}>
                        {step.locked ? (
                          <Lock className="w-5 h-5 text-gray-400" />
                        ) : isCompleted ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <Icon className="w-5 h-5 text-gray-900" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          Step {step.id}
                        </span>
                        {isCompleted && (
                          <span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                            • Completed
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      
                      <p className="text-base text-gray-600 font-medium mb-4">
                        {step.subtitle}
                      </p>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {step.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 border border-gray-200 text-gray-700 rounded-lg text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                        <span>{step.courses} courses</span>
                        <span>•</span>
                        <span>{step.duration}</span>
                      </div>

                      {/* Action Button */}
                      {!step.locked && (
                        <button
                          className={`
                            px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors
                            ${isCompleted 
                              ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
                              : 'bg-gray-900 text-white hover:bg-gray-800'
                            }
                          `}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleComplete(step.id);
                          }}
                        >
                          {isCompleted ? 'Mark as Incomplete' : 'Start Learning'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-16">
          <p className="text-gray-600 mb-6">
            Ready to begin your AI journey?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningPathRoadmap;