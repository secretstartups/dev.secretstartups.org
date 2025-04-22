import React from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import {
  Shield,
  Code,
  Users,
  Database,
  Key,
  Globe,
  Lock,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Section className="pt-24 pb-16 bg-gradient-to-br from-secondary/20 to-primary/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">
            Privacy{" "}
            <span className="gradient-text" style={{ color: "#00ffff" }}>
              Policy
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Protecting developer privacy while empowering career growth
          </p>
          <div className="w-24 h-1 bg-[#00ffff] mx-auto rounded-full"></div>
        </div>
      </Section>
      <Section>
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-[#00ffff]" />
                Our Privacy Commitment
              </h2>
              <p>
                At SecretStartups.org, our mission to empower tech talent,
                particularly African developers, extends to how we handle your
                data. As a non-profit initiative dedicated to building bridges
                between talent and opportunities, we recognize that trust begins
                with transparency about your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Database className="h-6 w-6 text-[#00ffff]" />
                Information We Collect
              </h2>
              <p className="mb-2">
                To facilitate meaningful opportunities and connections, we
                collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#00ffff]">
                <li>
                  <strong className="text-[#00ffff]">
                    Developer Profile Data:
                  </strong>{" "}
                  Professional information including skills, experience,
                  education, and portfolio samples that showcase your expertise
                </li>
                <li>
                  <strong className="text-[#00ffff]">
                    Identity Information:
                  </strong>{" "}
                  Name, email, and optional contact details to verify your
                  identity and communicate opportunities
                </li>
                <li>
                  <strong className="text-[#00ffff]">
                    Collaboration Data:
                  </strong>{" "}
                  Information about projects, apprenticeships, and collaborative
                  work you engage in through our platform
                </li>
                <li>
                  <strong className="text-[#00ffff]">Learning Progress:</strong>{" "}
                  Data about educational resources accessed and skills
                  development to recommend relevant opportunities
                </li>
                <li>
                  <strong className="text-[#00ffff]">Technical Data:</strong> IP
                  address, device information, and platform usage patterns to
                  optimize your experience
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code className="h-6 w-6 text-[#00ffff]" />
                Developer Portfolio Protection
              </h2>
              <p className="mb-2">
                Your code and portfolio represent your professional identity,
                and we protect them accordingly:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#00ffff]">
                <li>
                  You retain ownership and control over all code and creative
                  work shared on our platform
                </li>
                <li>
                  Your portfolio visibility settings are under your control
                </li>
                <li>
                  We implement technical safeguards to prevent unauthorized
                  access to your work
                </li>
                <li>
                  We provide tools to manage intellectual property rights and
                  licensing preferences
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-[#00ffff]" />
                How We Use Your Information
              </h2>
              <p className="mb-2">
                Your information helps us fulfill our mission to accelerate your
                tech career:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#00ffff]">
                <li>
                  <strong className="text-[#00ffff]">
                    Opportunity Matching:
                  </strong>{" "}
                  Connecting you with relevant paid apprenticeships and projects
                  aligned with your skills
                </li>
                <li>
                  <strong className="text-[#00ffff]">
                    Community Building:
                  </strong>{" "}
                  Facilitating collaboration with fellow developers and
                  potential teams
                </li>
                <li>
                  <strong className="text-[#00ffff]">
                    Skills Enhancement:
                  </strong>{" "}
                  Providing personalized recommendations for educational
                  resources and growth opportunities
                </li>
                <li>
                  <strong className="text-[#00ffff]">
                    Platform Improvement:
                  </strong>{" "}
                  Analyzing usage patterns to enhance our tools and resources
                  for developers
                </li>
                <li>
                  <strong className="text-[#00ffff]">Trust Building:</strong>{" "}
                  Verifying skills and experience to help you build credibility
                  with potential collaborators and employers
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Globe className="h-6 w-6 text-[#00ffff]" />
                Information Sharing
              </h2>
              <p className="mb-2">
                We share your information only in ways that advance your career
                opportunities:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#00ffff]">
                <li>
                  <strong className="text-[#00ffff]">
                    Opportunity Providers:
                  </strong>{" "}
                  Sharing relevant profile information with potential employers
                  or project collaborators
                </li>
                <li>
                  <strong className="text-[#00ffff]">
                    Education Partners:
                  </strong>{" "}
                  Limited sharing with educational resource providers to
                  facilitate access
                </li>
                <li>
                  <strong className="text-[#00ffff]">
                    Development Tool Providers:
                  </strong>{" "}
                  Sharing necessary information to provide discounted access to
                  development tools
                </li>
                <li>
                  <strong className="text-[#00ffff]">Community Members:</strong>{" "}
                  Displaying profile information according to your visibility
                  preferences
                </li>
              </ul>
              <p className="mt-4">
                We will never sell your data to third parties or use it in ways
                that don't directly benefit your professional growth.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Lock className="h-6 w-6 text-[#00ffff]" />
                Data Protection
              </h2>
              <p className="mb-2">
                As a platform for developers, by developers, we implement
                industry-best security practices:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#00ffff]">
                <li>End-to-end encryption for sensitive communications</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Strict access controls for all personal data</li>
                <li>
                  Compliance with GDPR and other relevant data protection
                  regulations
                </li>
                <li>Transparent data breach notification protocols</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Key className="h-6 w-6 text-[#00ffff]" />
                Your Privacy Rights
              </h2>
              <p className="mb-2">
                We respect your control over your information:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#00ffff]">
                <li>
                  <strong className="text-[#00ffff]">Access:</strong> Review all
                  personal information we hold about you
                </li>
                <li>
                  <strong className="text-[#00ffff]">Rectification:</strong>{" "}
                  Correct any inaccurate data in your profile or portfolio
                </li>
                <li>
                  <strong className="text-[#00ffff]">Deletion:</strong> Request
                  complete removal of your data from our platform
                </li>
                <li>
                  <strong className="text-[#00ffff]">Restriction:</strong> Limit
                  how we process certain aspects of your data
                </li>
                <li>
                  <strong className="text-[#00ffff]">Portability:</strong>{" "}
                  Receive your data in a structured, machine-readable format
                </li>
                <li>
                  <strong className="text-[#00ffff]">Objection:</strong> Opt out
                  of specific data processing activities
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact our Privacy Team at the
                email address below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-[#00ffff]" />
                Cookie Policy
              </h2>
              <p>
                We use cookies to enhance your platform experience, remember
                your preferences, and provide analytics that help us improve our
                services. You can control cookie settings through your browser
                preferences.
              </p>
            </div>

            <div className="bg-[#00ffff]/10 p-6 rounded-lg border border-[#00ffff]/30">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#00ffff]">
                <Shield className="h-6 w-6" />
                Our Data Ethics Commitment
              </h2>
              <p>
                As a non-profit dedicated to empowering tech talent,
                particularly in Africa, we commit to ethical data practices that
                respect cultural differences, promote digital inclusion, and
                address inequalities in the global tech ecosystem. We regularly
                review our data practices to ensure they align with our mission
                of creating opportunity through technology.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-[#00ffff]" />
                Contact Our Privacy Team
              </h2>
              <p>
                If you have questions about our privacy practices or wish to
                exercise your rights, please contact us at{" "}
                <a
                  href="mailto:privacy@secretstartups.org"
                  className="text-[#00ffff] hover:underline"
                >
                  privacy@secretstartups.org
                </a>
              </p>
              {/* <div className="mt-8 text-center">
                <p className="font-medium">Ready to join our developer community?</p>
                <a href="/signup" className="inline-block mt-4 px-6 py-3 bg-[#00ffff] hover:bg-[#00ffff]/80 text-black font-semibold rounded-md transition-colors">
                  Sign Up With Confidence
                </a>
              </div> */}
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
            <Link to="/associates" className="btn-neon">
              Join as a Developer
            </Link>
            <Link to="/about" className="btn-transparent-white">
              Learn More
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPolicy;
