import React from "react";

const Apps = () => {
  const aiApps = [
    {
      id: 1,
      title: "Content Generator",
      description: "Automatically create blog posts, ad copies, and product descriptions using AI.",
    },
    {
      id: 2,
      title: "Customer Insights",
      description: "Analyze customer feedback and behavior with AI-powered sentiment analysis.",
    },
    {
      id: 3,
      title: "Ad Campaign Optimizer",
      description: "Use predictive analytics to improve ad performance and ROI.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        AI Apps for Every Marketer, Across Every Function
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {aiApps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <h3 className="font-semibold text-lg mb-2 text-gray-900">{app.title}</h3>
            <p className="text-gray-600 text-sm">{app.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Apps;
