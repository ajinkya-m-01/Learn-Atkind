import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "AI Engineer",
    description:
      "Master the foundations of AI engineering with hands-on projects in machine learning, deep learning, and advanced AI concepts",
    image: "/images/courses/ai-engineer.jpg",
    duration: "6 months",
    level: "Advanced",
    features: [
      "ML | AI Engineer | Math + DL",
      "Python | Gen AI | Fine Tuning",
      "LLMs | Transformer | RAG System",
    ],
    slug: "ai-engineer",
  },
  {
    title: "AI Internship Program",
    description:
      "Gain real-world experience through our structured internship program with expert mentorship",
    image: "/images/courses/ai-internship.jpg",
    duration: "3 months",
    level: "Intermediate",
    features: [],
    slug: "ai-internship",
  },
  {
    title: "Bootcamp Of AI",
    description:
      "Intensive training program covering AI fundamentals to advanced concepts with practical implementation",
    image: "/images/courses/bootcamp-of-ai.jpg",
    duration: "12 weeks",
    level: "Beginner-Friendly",
    features: [],
    slug: "bootcamp-of-ai",
  },
];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Featured AI Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive selection of AI courses and programs
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white border rounded-xl overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 text-purple-600 text-sm font-semibold rounded-full">
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <CardContent className="p-6">
                <h3 className="font-sans text-2xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                {course.features.length > 0 && (
                  <div className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-lg"
                      >
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>

              {/* Footer with Button */}
              <CardFooter className="p-6 pt-0">
                <Link to={`/courses/${course.slug}`} className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl py-3">
                    View Details →
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-sans font-bold"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
