import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import posters (make sure these file names/paths match your assets folder)
import AIEngineer from '../assets/AI Engineer.jpg';
import AIInternship from '../assets/AI Internship Program.jpg';
import BootcampPoster from '../assets/Bootcamp Of AI.jpg';

export const courses = [
  // --- REMOVED: 'Machine Learning' course object ---
  // --- REMOVED: 'Deep Learning' course object ---
  // --- REMOVED: 'Computer Vision' course object ---
  
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    description: 'Master the foundations of AI engineering with hands-on projects in machine learning, deep learning, and natural language processing.',
    image: AIEngineer, // ✅ Correct poster
    duration: '6 months',
    level: 'Advanced',
    overview: 'Comprehensive program covering all aspects of AI engineering',
    skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'],
    whoShouldApply: 'Software engineers looking to specialize in AI, data scientists wanting to build production-ready AI systems',
    details: [
      'Build end-to-end AI systems',
      'Deploy models to production',
      'Work on real-world projects',
      'Learn best practices in AI engineering'
    ]
  },
  {
    id: 'ai-internship',
    title: 'AI Internship Program',
    description: 'Gain real-world experience through our structured internship program with expert mentorship and hands-on project work.',
    image: AIInternship, // ✅ Correct poster
    duration: '3 months',
    level: 'Intermediate',
    overview: 'Structured internship with real-world AI project experience',
    structure: [
      'Weekly mentorship sessions',
      'Hands-on project work',
      'Team collaboration',
      'Industry exposure'
    ],
    outcomes: [
      'Portfolio of AI projects',
      'Industry experience',
      'Professional network',
      'Career guidance'
    ],
    certification: 'Recognized internship completion certificate'
  },
  {
    id: 'ai-bootcamp',
    title: 'Bootcamp Of AI',
    description: 'Intensive training program covering AI fundamentals to advanced concepts with practical projects and career guidance.',
    image: BootcampPoster, // ✅ Fixed — now shows Bootcamp poster
    duration: '2 weeks',
    level: 'Beginner-Friendly',
    overview: 'Fast-paced, intensive AI training program',
    style: 'Full-time, immersive learning experience',
    projects: [
      'Image Classification System',
      'Natural Language Processing Application',
      'Recommender System',
      'AI-powered Web Application'
    ],
    careerOutcomes: [
      'Job-ready AI skills',
      'Interview preparation',
      'Industry connections',
      'Career transition support'
    ]
  }
];

const CourseCard = ({ course }) => (
  <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
    <div className="w-full h-60 bg-white flex items-center justify-center">
      <img 
        src={course.image} 
        alt={course.title} 
        className="max-h-full object-contain rounded-t-xl"
      />
    </div>
    <div className="flex flex-col flex-grow p-6">
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
            {course.duration}
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
            {course.level}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
      </div>
      <Link 
        to={`/courses/${course.id}`}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors group"
      >
        View Details
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
);

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our AI Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Transform your career with our comprehensive AI education programs. Choose the path that best fits your goals and experience level.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* This map will now only iterate over the remaining three courses */}
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;