import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Clock, Award, Users, BookOpen } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CourseNavigation from '@/components/CourseNavigation';
import { courses } from './Courses';

const FeatureCard = ({ icon: Icon, title, children }) => (
  <div className="bg-white rounded-lg border border-gray-100 p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-black/5 rounded-lg">
        <Icon className="w-6 h-6 text-black" />
      </div>
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
    </div>
    {children}
  </div>
);

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Hero */}
      <div className="bg-white border-b border-gray-100 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">{course.title}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                {course.duration} Duration
              </span>
              <span className="px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-medium">
                {course.level} Level
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Course Overview - All Courses */}
          <FeatureCard icon={BookOpen} title="Course Overview">
            <p className="text-gray-600 mb-4">{course.overview}</p>
            {course.skills && (
              <div className="mt-4">
                <h4 className="font-medium text-black mb-2">Skills Covered:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {course.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
            {course.style && (
              <div className="mt-4">
                <h4 className="font-medium text-black mb-2">Training Style:</h4>
                <p className="text-gray-600">{course.style}</p>
              </div>
            )}
          </FeatureCard>

          {/* Course Details - All Courses */}
          <FeatureCard icon={Users} title="Course Details">
            {course.whoShouldApply && (
              <>
                <h4 className="font-medium text-black mb-2">Who Should Apply:</h4>
                <p className="text-gray-600 mb-4">{course.whoShouldApply}</p>
              </>
            )}
            
            <div className="space-y-2">
              {course.details && course.details.map((detail, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/80"></div>
                  <span className="text-gray-600">{detail}</span>
                </div>
              ))}
              {course.projects && (
                <div className="mt-4">
                  <h4 className="font-medium text-black mb-2">Projects:</h4>
                  {course.projects.map((project, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/80"></div>
                      <span className="text-gray-600">{project}</span>
                    </div>
                  ))}
                </div>
              )}
              {course.structure && (
                <div className="mt-4">
                  <h4 className="font-medium text-black mb-2">Program Structure:</h4>
                  {course.structure.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/80"></div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </FeatureCard>

          {/* Outcomes - If Available */}
          {(course.outcomes || course.careerOutcomes) && (
            <div className="col-span-2">
              <FeatureCard icon={Award} title="Learning Outcomes">
                <div className="grid md:grid-cols-2 gap-8">
                  {course.outcomes && (
                    <div>
                      <h4 className="font-medium text-black mb-2">What You'll Achieve:</h4>
                      <ul className="space-y-2">
                        {course.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-black/80"></div>
                            <span className="text-gray-600">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {course.careerOutcomes && (
                    <div>
                      <h4 className="font-medium text-black mb-2">Career Outcomes:</h4>
                      <ul className="space-y-2">
                        {course.careerOutcomes.map((outcome, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-black/80"></div>
                            <span className="text-gray-600">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {course.certification && (
                  <div className="mt-6">
                    <h4 className="font-medium text-black mb-2">Certification:</h4>
                    <p className="text-gray-600">{course.certification}</p>
                  </div>
                )}
              </FeatureCard>
            </div>
          )}
        </div>

        {/* Apply Now Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Apply Now
          </button>
        </div>

        {/* Course Navigation */}
        <CourseNavigation currentCourseId={courseId} />
      </div>
    </div>
  );
};

export default CourseDetailPage;