import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AILearningHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: 'AI Fundamentals',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      description: 'Master the core concepts'
    },
    {
      id: 2,
      title: 'Neural Intelligence',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
      description: 'Deep learning networks'
    },
    {
      id: 3,
      title: 'Data Mastery',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
      description: 'Transform raw data'
    },
    {
      id: 4,
      title: 'Future Tech Insights',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
      description: 'Tomorrow\'s innovations'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4
  }));

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12 overflow-hidden relative">

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-black rounded-full opacity-20"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut'
          }}
        />
      ))}

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 lg:pl-12"
        >
          <div className="relative">
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold text-black leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              All-in-One
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">AI Learning</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </span>
              <br />
              Platform
            </motion.h1>

            {/* Neural Network Animation */}
            <svg className="absolute -right-20 top-0 w-64 h-64 opacity-10" viewBox="0 0 200 200">
              {[...Array(6)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx="100"
                  cy="100"
                  r={20 + i * 15}
                  fill="none"
                  stroke="black"
                  strokeWidth="0.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </svg>
          </div>

          <motion.p
            className="text-xl text-gray-600 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Master artificial intelligence with cutting-edge courses, hands-on projects, 
            and expert guidance. Transform your future with AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            <button className="px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-2xl">
              Start Learning
            </button>
            <button className="px-8 py-4 bg-white text-black rounded-xl font-semibold border-2 border-black hover:bg-gray-50 transition-all hover:scale-105">
              Explore Courses
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Stacked Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-md h-[500px]">
            {cards.map((card, index) => {
              const position = (index - activeIndex + cards.length) % cards.length;
              const isActive = position === 0;
              const isNext = position === 1;
              const isAfterNext = position === 2;
              
              return (
                <motion.div
                  key={card.id}
                  className="absolute top-1/2 left-1/2 w-80 h-96 rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    transformOrigin: 'center center'
                  }}
                  initial={false}
                  animate={{
                    x: isActive ? '-50%' : isNext ? '-45%' : isAfterNext ? '-40%' : '-35%',
                    y: isActive ? '-50%' : isNext ? '-45%' : isAfterNext ? '-40%' : '-35%',
                    scale: isActive ? 1 : isNext ? 0.95 : isAfterNext ? 0.9 : 0.85,
                    opacity: isActive ? 1 : isNext ? 0.7 : isAfterNext ? 0.4 : 0,
                    zIndex: cards.length - position,
                    rotateY: isActive ? 0 : isNext ? -5 : isAfterNext ? -10 : -15,
                    filter: isActive ? 'blur(0px)' : `blur(${position * 2}px)`
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1]
                  }}
                  whileHover={isActive ? { 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  } : {}}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Card Content */}
                  <div className="relative w-full h-full group">
                    {/* Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" />
                    
                    {/* Glassmorphism Card Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm bg-white/10 border-t border-white/20">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {card.description}
                      </p>
                    </div>

                    {/* Hover Glow Effect */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>

                  {/* Card Shadow */}
                  <div className="absolute inset-0 shadow-2xl rounded-2xl pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
            {cards.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-2 h-2 rounded-full bg-black/30 hover:bg-black/60 transition-colors"
                animate={{
                  scale: activeIndex === index ? 1.5 : 1,
                  backgroundColor: activeIndex === index ? '#000' : 'rgba(0,0,0,0.3)'
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AILearningHero;