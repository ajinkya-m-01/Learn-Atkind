import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AyushantImg from '../assets/Ayushant.jpg';
import AjinkyaImg from '../assets/Ajinkya.png';

const instructors = [
  {
    name: "Er. Ayushant Khandekar",
    title: "AI Expert",
    description: "Er. Ayushant Khandekar – AI Research Lead. Passionate about advancing AI and machine learning technologies with hands-on projects and real-world solutions. Experienced in LLMs, computer vision, and AI system design.",
    image: AyushantImg
  },
  {
    name: "Er. Ajinkya Mhetre",
    title: "AI Research Lead",
    description: "Ajinkya Mhetre – AI Research Lead. Passionate about AI and machine learning, specializing in LLMs, NLP, and building real-world AI solutions.",
    image: AjinkyaImg
  },
];

const InstructorsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Instructors</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts with years of experience in AI and machine learning.
          </p>
        </div>

        {/* Centered Instructor Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-4xl">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center">
                  {/* Profile Image */}
                  <div className="w-36 h-36 rounded-full overflow-hidden bg-gradient-to-tr from-purple-100 to-blue-100 mb-6 shadow-inner flex items-center justify-center">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name and Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{instructor.name}</h3>
                  <p className="text-purple-600 font-medium mb-4 text-center">{instructor.title}</p>

                  {/* Short Bio */}
                  {instructor.description && (
                    <p className="text-gray-600 text-center">{instructor.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InstructorsPage;
