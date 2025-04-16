// filepath: /secretstartups.org/src/pages/PrivacyPolicy.tsx
import React from 'react';
import Section from '@/components/Section';

const PrivacyPolicy: React.FC = () => {
  return (
    <Section>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At SecretStartups.org, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data in compliance with applicable privacy laws.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information from you when you visit our website, register for an account, or interact with our services. This information may include your name, email address, and any other details you provide.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        The information we collect may be used to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide and maintain our services</li>
        <li>Improve customer service and respond to inquiries</li>
        <li>Send periodic emails regarding your order or other products and services</li>
        <li>Process transactions and send notifications</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Data Protection</h2>
      <p className="mb-4">
        We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided below.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:legal@secretstartups.org" className="text-neon-cyan">legal@secretstartups.org</a>
      </p>
    </Section>
  );
};

export default PrivacyPolicy;
