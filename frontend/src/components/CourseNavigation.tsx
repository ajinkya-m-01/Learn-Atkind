import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 'ai-engineer', title: 'AI Engineer' },
  { id: 'ai-internship', title: 'AI Internship Program' },
  { id: 'ai-bootcamp', title: 'Bootcamp Of AI' },
];

interface CourseNavigationProps {
  currentCourseId: string;
}

const CourseNavigation: React.FC<CourseNavigationProps> = ({ currentCourseId }) => {
  const currentIndex = courses.findIndex((course) => course.id === currentCourseId);
  const prevCourse = currentIndex > 0 ? courses[currentIndex - 1] : null;
  const nextCourse = currentIndex < courses.length - 1 ? courses[currentIndex + 1] : null;

  return (
    <div className="border-t border-gray-200 mt-16 pt-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {prevCourse ? (
            <Link
              to={`/courses/${prevCourse.id}`}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <div className="text-right">
                <div className="text-sm text-gray-500">Previous Course</div>
                <div className="font-medium">{prevCourse.title}</div>
              </div>
            </Link>
          ) : (
            <div /> // empty div for layout balance
          )}

          <div className="flex gap-2">
            {courses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  course.id === currentCourseId
                    ? 'bg-black scale-150'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                title={course.title}
              />
            ))}
          </div>

          {nextCourse ? (
            <Link
              to={`/courses/${nextCourse.id}`}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
            >
              <div className="text-left">
                <div className="text-sm text-gray-500">Next Course</div>
                <div className="font-medium">{nextCourse.title}</div>
              </div>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div /> // empty div for layout balance
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseNavigation;
