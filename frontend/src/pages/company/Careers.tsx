import { PageHero } from "@/components/ui/page-hero";
import { JobCard } from "@/components/ui/job-card";

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Careers" 
        subtitle="Join us in shaping the future of AI education"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Why Join Us */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Join Us?</h2>
          <p className="text-xl text-gray-600">
            Be part of a mission-driven team that's transforming how people learn and work with AI. 
            We offer competitive benefits, remote-first culture, and opportunities for growth and impact.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Senior AI Engineer",
                department: "Engineering",
                location: "Remote",
                type: "Full-time"
              },
              {
                title: "Curriculum Designer",
                department: "Education",
                location: "Remote",
                type: "Full-time"
              },
              {
                title: "Community Manager",
                department: "Community",
                location: "Remote",
                type: "Full-time"
              },
              {
                title: "Product Manager",
                department: "Product",
                location: "Remote",
                type: "Full-time"
              },
              {
                title: "Content Writer",
                department: "Marketing",
                location: "Remote",
                type: "Contract"
              },
              {
                title: "UI/UX Designer",
                department: "Design",
                location: "Remote",
                type: "Full-time"
              }
            ].map((job, index) => (
              <JobCard
                key={index}
                {...job}
                onApply={() => console.log(`Applying for ${job.title}`)}
              />
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Remote-First Culture",
              "Competitive Salary",
              "Health Insurance",
              "Flexible Hours",
              "Learning Budget",
              "Home Office Setup",
              "Paid Time Off",
              "Stock Options"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all text-center"
              >
                <span className="text-gray-900 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;