import { PageHero } from "@/components/ui/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GlassCard } from "@/components/ui/glass-card";
import { MessageCircle, Phone, Mail } from "lucide-react";

const HelpCenterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Help Center" 
        subtitle="Find answers to your questions and get the support you need"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Quick Help Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          <GlassCard
            icon={<MessageCircle className="w-6 h-6 text-purple-600" />}
            title="Live Chat"
            description="Chat with our support team for immediate assistance"
            className="bg-white"
          />
          <GlassCard
            icon={<Phone className="w-6 h-6 text-purple-600" />}
            title="Phone Support"
            description="Call us at 1-800-AI-HELP for direct support"
            className="bg-white"
          />
          <GlassCard
            icon={<Mail className="w-6 h-6 text-purple-600" />}
            title="Email Support"
            description="Email us at support@aicompany.com"
            className="bg-white"
          />
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I get started with the courses?</AccordionTrigger>
              <AccordionContent>
                Getting started is easy! Simply create an account, choose your preferred course, and begin learning at your own pace. Our platform will guide you through the course materials step by step.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What are the payment options?</AccordionTrigger>
              <AccordionContent>
                We accept all major credit cards, PayPal, and bank transfers. You can choose to pay monthly or annually, with significant savings on annual plans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer certificates?</AccordionTrigger>
              <AccordionContent>
                Yes! Upon completion of each course, you'll receive a verified certificate that you can share on your LinkedIn profile or with potential employers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What if I'm not satisfied with a course?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day money-back guarantee. If you're not satisfied with your learning experience, simply contact our support team for a full refund.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Help Categories */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Help Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Getting Started",
              "Account & Billing",
              "Technical Support",
              "Course Access",
              "Certificates",
              "Mobile App",
              "Enterprise Solutions",
              "Community Guidelines"
            ].map((category, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all text-center cursor-pointer"
              >
                <span className="text-gray-900 font-medium">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;