import { PageHero } from "@/components/ui/page-hero";
import { AssetCard } from "@/components/ui/asset-card";
import { ImageIcon, FileText, Package, Image } from "lucide-react";

const PressKitPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Press Kit" 
        subtitle="Download official brand assets and media resources"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Brand Assets */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Brand Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <AssetCard
              title="Logo Package"
              description="Download our logo in various formats and sizes"
              icon={<ImageIcon className="w-6 h-6 text-purple-600" />}
              downloadUrl="/downloads/logo-package.zip"
            />
            <AssetCard
              title="Brand Guidelines"
              description="Our comprehensive brand style guide"
              icon={<FileText className="w-6 h-6 text-purple-600" />}
              downloadUrl="/downloads/brand-guidelines.pdf"
            />
            <AssetCard
              title="Media Kit"
              description="Press releases, fact sheets, and company information"
              icon={<Package className="w-6 h-6 text-purple-600" />}
              downloadUrl="/downloads/media-kit.zip"
            />
            <AssetCard
              title="Product Screenshots"
              description="High-resolution screenshots of our platform"
              icon={<Image className="w-6 h-6 text-purple-600" />}
              downloadUrl="/downloads/screenshots.zip"
            />
          </div>
        </div>

        {/* Company Facts */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Company Facts</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <dl className="space-y-6">
              {[
                { term: "Founded", description: "2023" },
                { term: "Headquarters", description: "San Francisco, CA" },
                { term: "Employees", description: "100+" },
                { term: "Students Trained", description: "50,000+" },
                { term: "Global Presence", description: "100+ countries" }
              ].map((fact, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-900">{fact.term}</dt>
                  <dd className="md:col-span-2 text-gray-600">{fact.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Press Contact */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Press Contact</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-xl text-gray-600 mb-4">For press inquiries, please contact:</p>
            <p className="text-purple-600 font-semibold">press@aicompany.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressKitPage;