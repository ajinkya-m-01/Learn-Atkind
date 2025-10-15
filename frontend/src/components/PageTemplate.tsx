interface PageTemplateProps {
  title: string;
  description: string;
}

const PageTemplate = ({ title, description }: PageTemplateProps) => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>
      </main>
    </div>
  );
};

export default PageTemplate;