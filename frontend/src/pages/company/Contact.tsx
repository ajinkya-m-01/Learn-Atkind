import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with our team for any questions or inquiries"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-900" htmlFor="firstName">
                    First Name
                  </label>
                  <Input id="firstName" className="mt-1" placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900" htmlFor="lastName">
                    Last Name
                  </label>
                  <Input id="lastName" className="mt-1" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-900" htmlFor="email">
                  Email
                </label>
                <Input id="email" type="email" className="mt-1" placeholder="john@example.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-900" htmlFor="subject">
                  Subject
                </label>
                <Input id="subject" className="mt-1" placeholder="How can we help?" />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-900" htmlFor="message">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  className="mt-1" 
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                />
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 AI Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (800) AI-ACADEMY</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@aicompany.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map (placeholder) */}
            <div className="bg-gray-200 rounded-xl h-64">
              {/* Add your map component or embed here */}
              <div className="w-full h-full rounded-xl bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600">Map Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;