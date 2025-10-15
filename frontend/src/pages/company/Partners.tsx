import { PageHero } from "@/components/ui/page-hero";
import { PartnerCard } from "@/components/ui/partner-card";
import { Button } from "@/components/ui/button";

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Partners" 
        subtitle="Collaborating with industry leaders to deliver world-class AI education"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Featured Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "TechCorp Global",
                logo: "/images/partners/techcorp.svg",
                description: "Leading technology solutions provider helping enterprises embrace AI innovation."
              },
              {
                name: "EduTech Solutions",
                logo: "/images/partners/edutech.svg",
                description: "Pioneer in digital education platforms and learning management systems."
              },
              {
                name: "Future Innovations",
                logo: "/images/partners/future-innovations.svg",
                description: "Research and development firm specializing in AI applications."
              },
              {
                name: "Global Learning Institute",
                logo: "/images/partners/gli.svg",
                description: "International education network with presence in 50+ countries."
              },
              {
                name: "AI Research Labs",
                logo: "/images/partners/ai-labs.svg",
                description: "Leading AI research organization developing cutting-edge algorithms."
              },
              {
                name: "Tech Academy",
                logo: "/images/partners/tech-academy.svg",
                description: "Professional development and certification provider for tech skills."
              }
            ].map((partner, index) => (
              <PartnerCard
                key={index}
                {...partner}
              />
            ))}
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Partner Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Co-branded Solutions",
                description: "Create custom AI education programs tailored to your organization"
              },
              {
                title: "Revenue Sharing",
                description: "Attractive revenue sharing models for course distribution"
              },
              {
                title: "Technical Support",
                description: "Priority access to our technical support and implementation team"
              },
              {
                title: "Marketing Support",
                description: "Joint marketing initiatives and promotional opportunities"
              },
              {
                title: "Custom Integration",
                description: "API access and custom integration support"
              },
              {
                title: "Partner Portal",
                description: "Exclusive access to partner resources and analytics"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="p-6 border border-purple-100 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Become a Partner</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our partner network and help shape the future of AI education. 
            We're always looking for innovative organizations to collaborate with.
          </p>
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
            onClick={() => console.log("Navigate to partner application")}
          >
            Apply Now →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;