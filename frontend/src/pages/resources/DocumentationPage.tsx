// src/pages/resources/DocumentationPage.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Book,
  Code,
  Lightbulb,
  HelpCircle,
  ArrowRight,
  Play,
  Download,
  FileText,
} from "lucide-react";

type DocSection = {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  link: string;
};

type Poster = {
  title: string;
  subtitle: string;
  description: string;
  gradient: string; // tailwind gradient classes, e.g. "from-purple-600 to-pink-600"
  icon: React.ComponentType<any>;
  badge?: string;
  stats?: string;
  link?: string;
};

const documentationSections: DocSection[] = [
  {
    title: "Getting Started",
    description: "Learn the basics and get up to speed with our platform quickly.",
    icon: Book,
    link: "/docs/getting-started",
  },
  {
    title: "API Reference",
    description: "Comprehensive API documentation for developers.",
    icon: Code,
    link: "/docs/api",
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides and practical examples.",
    icon: Lightbulb,
    link: "/docs/tutorials",
  },
  {
    title: "FAQs",
    description: "Find answers to commonly asked questions.",
    icon: HelpCircle,
    link: "/docs/faqs",
  },
];

const posterCards: Poster[] = [
  {
    title: "Complete Developer Guide 2025",
    subtitle: "Master the Platform",
    description:
      "A comprehensive 150-page guide covering everything from basics to advanced techniques.",
    gradient: "from-purple-600 to-pink-600",
    icon: FileText,
    badge: "FREE",
    stats: "150+ Pages",
    link: "/resources/complete-developer-guide-2025",
  },
  {
    title: "Video Course Series",
    subtitle: "Learn by Watching",
    description:
      "20+ hours of video content with hands-on projects and real-world examples.",
    gradient: "from-blue-600 to-cyan-600",
    icon: Play,
    badge: "NEW",
    stats: "20+ Hours",
    link: "/resources/video-course-series",
  },
  {
    title: "Quick Start Templates",
    subtitle: "Ready to Use",
    description:
      "Download pre-built templates and boilerplates to kickstart your projects instantly.",
    gradient: "from-orange-600 to-yellow-600",
    icon: Download,
    badge: "POPULAR",
    stats: "50+ Templates",
    link: "/resources/quick-start-templates",
  },
  {
    title: "Advanced Integration Guide",
    subtitle: "Power User Tips",
    description:
      "Deep dive into integrations, webhooks, and advanced configuration options.",
    gradient: "from-indigo-600 to-purple-600",
    icon: Code,
    badge: "PRO",
    stats: "Advanced",
    link: "/resources/advanced-integration-guide",
  },
];

const DocumentationPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
    const link = documentationSections[index].link;
    // navigate to docs section
    navigate(link);
  };

  const handlePosterClick = (poster: Poster) => {
    if (poster.link) {
      navigate(poster.link);
    } else {
      console.log("Poster clicked:", poster.title);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Documentation</h1>
          <p className="text-lg opacity-90">
            Everything you need to know about our platform
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {documentationSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <button
                key={section.title}
                onClick={() => handleSectionClick(index)}
                aria-label={`Open ${section.title}`}
                className={`text-left w-full bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all transform hover:-translate-y-1 hover:shadow-lg focus:outline-none ${
                  activeSection === index ? "ring-2 ring-purple-500" : ""
                }`}
              >
                <div className="text-purple-600 mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Resources - Poster Cards */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Featured Resources
            </h2>
            <p className="text-gray-600">
              Curated content to accelerate your learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posterCards.map((poster) => {
              const IconComponent = poster.icon;
              return (
                <div
                  key={poster.title}
                  onClick={() => handlePosterClick(poster)}
                  role={poster.link ? "link" : "button"}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handlePosterClick(poster);
                  }}
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all hover:shadow-xl focus:outline-none"
                >
                  {/* background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${poster.gradient} opacity-95 group-hover:scale-105 transform-gpu transition-transform duration-500`}
                    aria-hidden
                  />

                  <div className="relative p-6 text-white min-h-[240px] flex flex-col">
                    {/* Badge */}
                    {poster.badge && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-bold">
                          {poster.badge}
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="mb-4">
                      <IconComponent className="w-10 h-10" />
                    </div>

                    {/* Text */}
                    <div className="flex-grow">
                      <p className="text-xs font-semibold uppercase tracking-wide mb-2 opacity-90">
                        {poster.subtitle}
                      </p>
                      <h3 className="text-xl font-bold mb-2">{poster.title}</h3>
                      <p className="text-white text-opacity-90 text-sm mb-3">
                        {poster.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white border-opacity-20">
                      <span className="text-sm font-medium">{poster.stats}</span>
                      <div className="flex items-center">
                        <span className="text-sm font-semibold mr-2">Explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Installation Guide",
              "Best Practices",
              "Examples",
              "Video Tutorials",
              "Release Notes",
              "Community Forum",
              "Support",
              "Changelog",
            ].map((link) => (
              <Link
                key={link}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Clicked Quick Link:", link);
                }}
                className="p-3 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-colors cursor-pointer"
              >
                <span className="text-gray-900 text-sm font-medium">{link}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
