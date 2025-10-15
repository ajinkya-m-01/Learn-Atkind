import PageTemplate from "@/components/PageTemplate";

const pages = {
  Documentation: {
    title: "Documentation",
    description: "Find detailed guides, tutorials, and API references to help you build with our platform."
  },
  Blog: {
    title: "Blog",
    description: "Read the latest insights, product updates, and stories from our team and community."
  },
  CaseStudies: {
    title: "Case Studies",
    description: "Explore success stories and real-world examples of how companies use our platform."
  },
  Community: {
    title: "Community",
    description: "Join our global community of developers, share knowledge, and collaborate on projects."
  }
};

export const DocumentationPage = () => <PageTemplate {...pages.Documentation} />;
export { default as BlogPage } from './Blog';
export const CaseStudiesPage = () => <PageTemplate {...pages.CaseStudies} />;
export const CommunityPage = () => <PageTemplate {...pages.Community} />;