import { PageHero } from "@/components/ui/page-hero";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Privacy Policy" 
        subtitle="How we collect, use, and protect your information"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Introduction</h2>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you:
          </p>
          <ul>
            <li>Register for an account</li>
            <li>Enroll in courses</li>
            <li>Participate in our interactive features</li>
            <li>Fill out a form</li>
            <li>Complete surveys</li>
            <li>Contact us</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We may use the information we collect from you to:
          </p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Notify you about changes to our services</li>
            <li>Allow you to participate in interactive features</li>
            <li>Provide customer support</li>
            <li>Monitor the usage of our services</li>
            <li>Detect, prevent and address technical issues</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may employ third party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services or assist us in analyzing how our Service is used.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>By email: privacy@aicompany.com</li>
            <li>By phone: 1-800-AI-HELP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;