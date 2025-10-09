interface PageHeroProps {
  title: string;
  subtitle: string;
}

export const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <div className="bg-gradient-to-b from-purple-900 to-purple-800 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-purple-100">{subtitle}</p>
      </div>
    </div>
  </div>
);