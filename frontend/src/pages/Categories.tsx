import { Link, useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const navigate = useNavigate();

  const handleViewAll = (categorySlug: string) => {
    navigate(`/courses/${categorySlug}`);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Header */}
      <div className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Browse by Category
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of AI and technology learning paths
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Artificial Intelligence",
              description: "Foundation concepts to advanced AI applications",
              icon: "🤖",
              courses: 12
            },
            {
              title: "Machine Learning",
              description: "Algorithms, models, and practical implementations",
              icon: "🧮",
              courses: 15
            },
            {
              title: "Deep Learning",
              description: "Neural networks and advanced architectures",
              icon: "🧠",
              courses: 8
            },
            {
              title: "Computer Vision",
              description: "Image processing and visual AI systems",
              icon: "👁️",
              courses: 6
            },
            {
              title: "Natural Language Processing",
              description: "Text analysis and language understanding",
              icon: "📝",
              courses: 10
            },
            {
              title: "Data Science",
              description: "Data analysis, visualization, and statistics",
              icon: "📊",
              courses: 14
            }
          ].map((category, index) => (
            <Link 
              to={`/courses/${category.title.toLowerCase().replace(/ /g, '-')}`}
              key={index}
              className="block bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 p-6"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-600 font-semibold">{category.courses} Courses</span>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    handleViewAll(category.title.toLowerCase().replace(/ /g, '-'));
                  }}
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  View All →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;