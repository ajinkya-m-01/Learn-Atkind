import { GlassCard } from "@/components/ui/glass-card";
import { PageHero } from "@/components/ui/page-hero";
import { MessageCircle, Users, Calendar } from "lucide-react";

const CommunityPage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-purple-900 to-purple-800 text-white">
        <PageHero 
          title="Community" 
          subtitle="Join our thriving community of AI learners and educators"
        />
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <GlassCard
              icon={<MessageCircle className="w-6 h-6 text-white" />}
              title="Discussion Forum"
              description="Join discussions, ask questions, and share your knowledge with fellow learners."
              onClick={() => console.log("Navigate to forum")}
            />
            <GlassCard
              icon={<Users className="w-6 h-6 text-white" />}
              title="Discord Community"
              description="Real-time chat, collaboration, and community events in our Discord server."
              onClick={() => console.log("Open Discord invite")}
            />
            <GlassCard
              icon={<Calendar className="w-6 h-6 text-white" />}
              title="Events Calendar"
              description="Stay updated with webinars, workshops, and community meetups."
              onClick={() => console.log("View events")}
            />
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Growing Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "50K+", label: "Members" },
              { metric: "100+", label: "Countries" },
              { metric: "1000+", label: "Daily Posts" },
              { metric: "24/7", label: "Support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{item.metric}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "AI in Education Webinar",
                date: "October 15, 2025",
                time: "2:00 PM EST",
                type: "Virtual"
              },
              {
                title: "Community Meetup",
                date: "October 20, 2025",
                time: "6:00 PM EST",
                type: "In-Person"
              },
              {
                title: "ML Workshop Series",
                date: "October 25, 2025",
                time: "10:00 AM EST",
                type: "Hybrid"
              }
            ].map((event, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <div className="text-gray-600">
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                  <p className="text-purple-600">{event.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;