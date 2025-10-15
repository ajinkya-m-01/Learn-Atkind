import PageTemplate from "@/components/PageTemplate";

const pages = {
  HelpCenter: {
    title: "Help Center",
    description: "Browse FAQs, troubleshooting guides, and support resources."
  },
  Privacy: {
    title: "Privacy Policy",
    description: "Learn how we collect, use, and protect your data."
  },
  Terms: {
    title: "Terms of Service",
    description: "Read the terms and conditions for using our services."
  }
};

export const HelpCenterPage = () => <PageTemplate {...pages.HelpCenter} />;
export const PrivacyPolicyPage = () => <PageTemplate {...pages.Privacy} />;
export const TermsOfServicePage = () => <PageTemplate {...pages.Terms} />;