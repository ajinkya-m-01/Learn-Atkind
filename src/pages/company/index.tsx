import PageTemplate from "@/components/PageTemplate";

const pages = {
  About: {
    title: "About Us",
    description: "Learn more about our mission, values, and the team behind the platform."
  },
  Careers: {
    title: "Careers",
    description: "We're hiring! Explore opportunities to join our team and grow your career."
  },
  PressKit: {
    title: "Press Kit",
    description: "Download logos, brand guidelines, and media assets for press use."
  },
  Partners: {
    title: "Partners",
    description: "Discover our network of partners and explore opportunities to collaborate."
  }
};

export const AboutPage = () => <PageTemplate {...pages.About} />;
export const CareersPage = () => <PageTemplate {...pages.Careers} />;
export const PressKitPage = () => <PageTemplate {...pages.PressKit} />;
export const PartnersPage = () => <PageTemplate {...pages.Partners} />;