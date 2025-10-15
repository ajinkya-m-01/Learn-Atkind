import AIEngineer from "../assets/AI Engineer.jpg";
import AIInternship from "../assets/AI Internship Program.jpg";
import BootcampAI from "../assets/Bootcamp Of AI.jpg";
// NOTE: Assuming Link is imported from a routing library like react-router-dom
import { Link } from "react-router-dom"; 
import { Button } from "./ui/button";

const courses = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    description: "Master the foundations of AI engineering with hands-on projects in machine learning, deep learning, and advanced AI concepts",
    image: AIEngineer,
    duration: "6 months",
    level: "Advanced",
    features: [
      "ML | AI Engineer | Math + DL",
      "Python | Gen AI | Fine Tuning",
      "LLMs | Transformer | RAG System"
    ]
  },
  {
    id: "ai-internship",
    title: "AI Internship Program",
    description: "Gain real-world experience through our structured internship program with expert mentorship",
    image: AIInternship,
    duration: "3 months",
    level: "Intermediate",
    features: [
      "Weekly Mentorship",
      "Hands-on Projects",
      "Industry Experience"
    ]
  },
  {
    id: "ai-bootcamp",
    title: "Bootcamp Of AI",
    description: "Intensive training program covering AI fundamentals to advanced concepts with practical implementation",
    image: BootcampAI,
    duration: "2 weeks",
    level: "Beginner-Friendly",
    features: [
      "AI Foundations",
      "Practical Projects",
      "Career Support"
    ]
  }
];

const Courses = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Featured Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master the latest AI technologies with our comprehensive courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <article 
              key={course.id}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-gray-900/80 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-gray-900/80 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                {course.features && (
                  <div className="space-y-2 mb-4">
                    {course.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="bg-gray-100 text-gray-900 text-sm px-3 py-1.5 rounded-lg"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
                
                {/* *** MODIFIED SECTION: Replaced <Button> with <Link> for navigation *** The 'to' prop uses the course's unique 'id' to create the URL. 
                  e.g., /courses/ai-engineer
                */}
                <Link to={`/courses/${course.id}`}>
                  <Button 
                    className="w-full bg-black hover:bg-gray-900 text-white font-medium py-2 rounded-lg transition-colors"
                  >
                    View Details →
                  </Button>
                </Link>
                {/* END MODIFIED SECTION */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;