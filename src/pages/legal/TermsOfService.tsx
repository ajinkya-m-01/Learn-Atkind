import { PageHero } from "@/components/ui/page-hero";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Terms of Service" 
        subtitle="Please read these terms carefully before using our services"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing our website and using our services, you agree to be bound by these Terms of Service and comply with all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>Remove any copyright or other proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>

          <h2>3. Account Terms</h2>
          <p>
            You are responsible for maintaining the security of your account and password. The company cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
          </p>

          <h2>4. Course Content</h2>
          <p>
            All content provided through our platform is for educational purposes only. We reserve the right to modify or discontinue any course or content at any time without notice.
          </p>

          <h2>5. Payment Terms</h2>
          <p>
            You agree to pay all fees or charges to your account based on the fees, charges, and billing terms in effect at the time a fee or charge is due and payable.
          </p>

          <h2>6. Refund Policy</h2>
          <p>
            We offer a 30-day money-back guarantee for our courses. If you're unsatisfied with a course, you can request a refund within 30 days of purchase.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors.
          </p>

          <h2>8. User Content</h2>
          <p>
            By posting content on our platform, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through our platform.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            In no event shall our company be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li>By email: legal@aicompany.com</li>
            <li>By phone: 1-800-AI-HELP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;