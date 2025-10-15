import { PageHero } from "@/components/ui/page-hero";
import { TeamCard } from "@/components/ui/team-card";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="About Us" 
        subtitle="Empowering the next generation of AI innovators"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Mission & Vision */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            To democratize AI education and empower individuals worldwide with the knowledge and skills needed to shape the future of technology.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-xl text-gray-600">
            A world where AI expertise is accessible to all, fostering innovation and responsible technology development across every industry and community.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Dr. Emma Chen",
                role: "Founder & CEO",
                image: "/images/team/emma-chen.jpg"
              },
              {
                name: "Michael Rodriguez",
                role: "CTO",
                image: "/images/team/michael-rodriguez.jpg"
              },
              {
                name: "Dr. Sarah Johnson",
                role: "Head of Education",
                image: "/images/team/sarah-johnson.jpg"
              },
              {
                name: "David Kim",
                role: "Head of AI Research",
                image: "/images/team/david-kim.jpg"
              },
              {
                name: "Lisa Thompson",
                role: "Community Director",
                image: "/images/team/lisa-thompson.jpg"
              },
              {
                name: "James Wilson",
                role: "Course Director",
                image: "/images/team/james-wilson.jpg"
              },
              {
                name: "Maria Garcia",
                role: "Product Manager",
                image: "/images/team/maria-garcia.jpg"
              },
              {
                name: "Alex Chen",
                role: "Lead Developer",
                image: "/images/team/alex-chen.jpg"
              }
            ].map((member, index) => (
              <TeamCard
                key={index}
                {...member}
              />
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing the boundaries of AI education through cutting-edge technology and teaching methods."
              },
              {
                title: "Accessibility",
                description: "Making AI education available to everyone, regardless of their background or location."
              },
              {
                title: "Excellence",
                description: "Maintaining the highest standards in our curriculum, platform, and student support."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;