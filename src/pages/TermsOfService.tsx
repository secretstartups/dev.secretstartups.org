// This file contains the Terms of Service page for the website. It details the rules and guidelines for using the website and its services, including user responsibilities and limitations of liability.

import React from 'react';
import Section from '@/components/Section';

const TermsOfService: React.FC = () => {
  return (
    <Section>
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Welcome to SecretStartups.org! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. User Responsibilities</h2>
      <p className="mb-4">
        You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Limitation of Liability</h2>
      <p className="mb-4">
        In no event shall SecretStartups.org be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms of Service at any time. Your continued use of the website after any changes constitutes your acceptance of the new Terms.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Governing Law</h2>
      <p className="mb-4">
        These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which SecretStartups.org operates.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Contact Information</h2>
      <p className="mb-4">
        If you have any questions about these Terms of Service, please contact us at <a href="mailto:info@secretstartups.org" className="text-neon-cyan">info@secretstartups.org</a>.
      </p>
    </Section>
  );
};

export default TermsOfService;