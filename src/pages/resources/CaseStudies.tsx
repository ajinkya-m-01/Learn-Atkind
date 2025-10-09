import { CaseStudyCard } from "@/components/ui/case-study-card";
import { PageHero } from "@/components/ui/page-hero";

const caseStudies = [
  {
    company: "TechCorp Global",
    logo: "/images/partners/techcorp.svg",
    title: "Transforming Tech Education with AI",
    description: "How TechCorp improved their employee training efficiency by 200% using our AI education platform."
  },
  {
    company: "EduTech Solutions",
    logo: "/images/partners/edutech.svg",
    title: "Scaling AI Education Nationwide",
    description: "EduTech Solutions reached 50,000 students across the country with our AI curriculum."
  },
  {
    company: "Future Innovations",
    logo: "/images/partners/future-innovations.svg",
    title: "AI Training for Enterprise",
    description: "How Future Innovations upskilled their entire workforce in AI fundamentals in just 6 months."
  }
];

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-purple-900 to-purple-800 text-white">
        <PageHero 
          title="Case Studies" 
          subtitle="See how organizations are transforming their businesses with our AI education solutions"
        />
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                {...study}
                onReadMore={() => console.log(`Reading case study: ${study.title}`)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Impact Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "500K+", label: "Students Trained" },
              { metric: "95%", label: "Satisfaction Rate" },
              { metric: "200%", label: "Average ROI" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{item.metric}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;