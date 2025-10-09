import { Brain, Facebook, Twitter, Linkedin, Github, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Courses: [
      { name: "AI Basics", href: "/courses/ai-basics" },
      { name: "Machine Learning", href: "/courses/machine-learning" },
      { name: "Deep Learning", href: "/courses/deep-learning" },
      { name: "Computer Vision", href: "/courses/computer-vision" },
    ],
    Resources: [
      { name: "Documentation", href: "/documentation" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Community", href: "/community" },
    ],
    Company: [
      { name: "About Us", href: "/about-us" },
      { name: "Careers", href: "/careers" },
      { name: "Press Kit", href: "/press-kit" },
      { name: "Partners", href: "/partners" },
    ],
    Support: [
      { name: "Help Center", href: "/help-center" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
    { Icon: Facebook, url: "https://facebook.com/atkind" },
    { Icon: Twitter, url: "https://twitter.com/atkind" },
    { Icon: Linkedin, url: "https://linkedin.com/company/atkind" },
    { Icon: Github, url: "https://github.com/atkind" },
    { Icon: Instagram, url: "https://instagram.com/atkind" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-gray-900 text-gray-400">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand + About */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600/20 p-2 rounded-lg">
              <Brain className="text-purple-500 h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Atkind AI</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Empowering learners to master Artificial Intelligence with world-class online courses and industry-ready projects.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            {socialLinks.map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-all duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Footer Links */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h3 className="text-lg font-semibold text-white mb-4">{section}</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-purple-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Subscription */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter to get the latest AI courses, tutorials, and offers.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed successfully!");
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none flex-grow"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-all duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Section */}
      <div className="py-6 text-center text-sm text-gray-500">
        <p>© {currentYear} Atkind AI Academy. All rights reserved.</p>
        <p className="mt-2 text-xs">
          Designed & Developed by{" "}
          <span className="text-purple-400 font-semibold">Atkind Dev Team</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
