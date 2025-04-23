import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import {
  FileText,
  Code,
  Users,
  Shield,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { trackButtonClick } from '@/utils/analytics';

const TermsOfService = () => {
  // Track the page view event
  const handleApplyClick = () => {
        trackButtonClick('Join As Developer', 'Terms of Service');
        window.location.href = 'https://associates.secretstartups.org/auth/register';
  };

  return (
    <Layout>
      <Section className="pt-24 pb-16 bg-gradient-to-br from-secondary/20 to-primary/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">
            Terms of{" "}
            <span className="gradient-text" style={{ color: "#00ffff" }}>
              Service
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our commitment to transparency and fairness for developers
          </p>
          <div className="w-24 h-1 bg-[#00ffff] mx-auto rounded-full"></div>
        </div>
      </Section>
      <Section>
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="space-y-8">
            <p className="mb-4">
              Welcome to SecretStartups.org! As a non-profit initiative
              dedicated to empowering tech talent, particularly African
              developers, we've designed these terms to protect your rights
              while fostering a collaborative, growth-oriented community. By
              accessing or using our platform, you agree to these terms.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <Shield className="h-6 w-6 text-[#00ffff]" />
                1. Our Commitment to You
              </h2>
              <p className="mb-4">
                By using our services, you become part of a community dedicated
                to accelerating tech careers through paid apprenticeships,
                education, collaboration, and access to premium resources. We
                commit to providing a platform that empowers you to build,
                collaborate, earn, and learn.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <Code className="h-6 w-6 text-[#00ffff]" />
                2. Developer Rights & Responsibilities
              </h2>
              <p className="mb-4">
                As a platform built by developers for developers, we respect
                your intellectual property while fostering open collaboration.
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#00ffff]">
                <li>
                  Your code contributions remain your intellectual property,
                  with licensing options you control
                </li>
                <li>
                  We protect your developer portfolio and provide tools to
                  showcase your expertise
                </li>
                <li>
                  You agree to participate constructively in our community and
                  respect other members
                </li>
                <li>
                  You'll maintain professional standards when participating in
                  paid apprenticeships
                </li>
                <li>
                  You agree to use resources responsibly and not exploit
                  platform tools
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-[#00ffff]" />
                3. Paid Opportunities & Compensation
              </h2>
              <p className="mb-4">
                SecretStartups.org connects you with paid apprenticeships and
                collaboration opportunities. When participating in these
                programs:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#00ffff]">
                <li>
                  Payment terms will be clearly defined before you begin work
                </li>
                <li>
                  Our platform provides secure payment processing and dispute
                  resolution
                </li>
                <li>
                  You retain the right to accept or decline any opportunity
                </li>
                <li>
                  We maintain transparency in our fee structure for facilitating
                  connections
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-[#00ffff]" />
                4. Educational Resources & Tools
              </h2>
              <p className="mb-4">
                We provide access to educational content, AI-enhanced developer
                workspaces, and enterprise-class tools to accelerate your
                growth.
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#00ffff]">
                <li>
                  Educational materials are provided for your personal
                  development
                </li>
                <li>
                  Discounted services and tools are offered to help you build
                  your projects
                </li>
                <li>
                  You agree to use these resources for legitimate development
                  purposes
                </li>
                <li>
                  Some premium resources may require subscription or
                  qualification criteria
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <Users className="h-6 w-6 text-[#00ffff]" />
                5. Community Standards
              </h2>
              <p className="mb-4">
                Our vibrant remote-first community thrives on mutual respect and
                collaboration:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#00ffff]">
                <li>You must be at least 18 years old to participate</li>
                <li>
                  You agree to maintain professional communication standards
                </li>
                <li>
                  Harassment, discrimination, or abusive behavior will not be
                  tolerated
                </li>
                <li>
                  You'll respect the intellectual property rights of others
                </li>
                <li>
                  You agree not to misrepresent your qualifications or
                  experience
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="h-6 w-6 text-[#00ffff]" />
                6. Platform Policies
              </h2>
              <p className="mb-4">
                To maintain the integrity of our platform and community:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#00ffff]">
                <li>
                  We reserve the right to modify these Terms of Service with
                  notice
                </li>
                <li>
                  We may update our platform features to better serve our
                  community
                </li>
                <li>
                  In rare cases, we may terminate accounts that violate our
                  standards
                </li>
                <li>
                  We implement security measures to protect your data and work
                </li>
                <li>
                  Our platform is provided "as is" without warranties of
                  continuous availability
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <Shield className="h-6 w-6 text-[#00ffff]" />
                7. Limitation of Liability
              </h2>
              <p className="mb-4">
                As a non-profit initiative, we limit our liability to the extent
                permitted by law. SecretStartups.org shall not be liable for
                indirect, incidental, special, consequential, or punitive
                damages arising from your use of the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="h-6 w-6 text-[#00ffff]" />
                8. Governing Law
              </h2>
              <p className="mb-4">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the jurisdiction in which
                SecretStartups.org operates, with consideration for
                international participants.
              </p>
            </div>

            <div className="bg-[#00ffff]/10 p-6 rounded-lg border border-[#00ffff]/30">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#00ffff]">
                <FileText className="h-6 w-6" />
                9. Our Mission
              </h2>
              <p className="mb-4">
                SecretStartups is dedicated to empowering tech talent, with a
                focus on African developers. We provide tools for professional
                development, access to enterprise-class systems and processes,
                and opportunities to build trust in your capabilities rapidly.
                By using our platform, you're supporting this mission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="h-6 w-6 text-[#00ffff]" />
                10. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service or need
                support, please contact us at{" "}
                <a
                  href="mailto:support@secretstartups.org"
                  className="text-[#00ffff] hover:underline"
                >
                  support@secretstartups.org
                </a>
              
              </p>
              
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-secondary/20 to-primary/20 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">
            Ready to <span className="gradient-text">Accelerate</span> Your Tech
            Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Sign up free today to join our growing network of associates, and
            start receiving opportunities to your inbox
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handleApplyClick} className="btn-neon">
              Join as a Developer
            </button>
            <Link to="/about" className="btn-transparent-white">
              Learn More
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default TermsOfService;
