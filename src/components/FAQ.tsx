import React, { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Code,
  Users,
  Briefcase,
  GraduationCap,
  Globe,
} from "lucide-react";
import { trackButtonClick } from "@/utils/analytics";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleApplyClick = () => {
    trackButtonClick("Join As Developer", "FAQ Section");
    window.location.href =
      "https://associates.secretstartups.org/auth/register";
  };

  const faqs = [
    {
      question: "What is SecretStartups.org?",
      answer:
        "SecretStartups.org is a non-profit initiative dedicated to empowering African tech talent by connecting developers with paid apprenticeships, educational resources, a collaborative community, and essential development tools. Our platform helps developers build their skills, showcase their portfolios, and accelerate their tech careers.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      question: "How do paid apprenticeships work?",
      answer:
        "Once you've created your profile and demonstrated your expertise, our platform will match you with relevant paid apprenticeship opportunities aligned with your skills. Each opportunity will have clearly defined payment terms and project scope before you begin. You always retain the right to accept or decline any opportunity that comes your way.",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      question: "What educational resources are available?",
      answer:
        "We provide access to curated educational materials, tutorials, workshops, and skill development resources tailored to in-demand technologies. Our vibrant remote-first community also offers peer learning opportunities and mentorship connections to help you grow professionally. Many resources are free, while some premium content may require subscription.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      question: "How does the community collaboration work?",
      answer:
        "You can bring your existing team to the platform or find collaborators through our network of associates. Our platform provides tools for team formation, project management, code collaboration, and communication—all without needing to leave the environment. We also facilitate networking events and skill-sharing sessions to strengthen community connections.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      question: "What development tools are available?",
      answer:
        "Members gain discounted access to AI-enhanced developer workspaces, cloud hosting services, testing environments, and enterprise-class tools for continuous integration and deployment. These resources are specifically selected to help you build, test, and deploy your projects more efficiently and cost-effectively.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      question: "Is my code and portfolio protected?",
      answer:
        "Absolutely. You retain full ownership and control over all code and creative work shared on our platform. We implement technical safeguards to prevent unauthorized access, and you have complete control over your portfolio visibility settings. We also provide tools to manage intellectual property rights and licensing preferences for all your work.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      question: "How do I sign up?",
      answer:
        "Signing up is free and straightforward. Click the 'Sign Up' button, create your profile with your professional information and skills, and start exploring opportunities. Once registered, you can build your portfolio, connect with other developers, access educational resources, and receive notifications about relevant apprenticeship opportunities.",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  return (
    <Layout>
      <Section className="pt-24 pb-16 bg-gradient-to-br from-secondary/20 to-primary/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">
            Frequently{" "}
            <span className="gradient-text" style={{ color: "#00ffff" }}>
              Asked Questions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to know about accelerating your tech career
          </p>
          <div className="w-24 h-1 bg-[#00ffff] mx-auto rounded-full"></div>
        </div>
      </Section>
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "border-[#00ffff]" : "border-border"
                }`}
              >
                <button
                  className={`w-full flex items-center justify-between p-5 text-left ${
                    openIndex === index ? "bg-[#00ffff]/10" : ""
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#00ffff]">{faq.icon}</span>
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#00ffff]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#00ffff]" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-5 pt-0 animate-fadeIn">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#00ffff]/10 p-8 rounded-lg border border-[#00ffff]/30">
            <div className="text-center">
              <HelpCircle className="h-12 w-12 text-[#00ffff] mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="mb-6 text-muted-foreground">
                Our team is here to help you get started with your journey at
                SecretStartups.org
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@secretstartups.org"
                  className="inline-block px-6 py-3 border border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 font-semibold rounded-md transition-colors"
                >
                  Contact Support
                </a>
                <button onClick={handleApplyClick} className="btn-neon">
                  Sign Up Free Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default FAQ;
