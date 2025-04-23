import React from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { Building, FileText, ShieldCheck } from "lucide-react";
import { trackButtonClick } from "@/utils/analytics";

const Legals = () => {
  const handleApplyClick = () => {
    trackButtonClick("Contact Legals", "Legals Page");

  };

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-secondary/20 to-primary/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">
            Legal <span className="gradient-text">Information</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transparency and compliance are core values at SecretStartups.
            Here's our legal and financial information.
          </p>
        </div>
      </Section>

      {/* Registration Section */}
      <Section>
        <div className="mb-12">
          <h2 className="mb-4">
            <Building className="inline-block mr-2 mb-1" size={28} />
            Non-Profit <span className="gradient-text">Registration</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            SecretStartups is registered as a non-profit organization in
            multiple countries to serve our pan-African mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">Nigeria</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">
                  Registration Number
                </p>
                <p className="font-medium">NPO-12345-NG</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Registered Office
                </p>
                <p className="font-medium">
                  123 Tech Hub Avenue, Lagos, Nigeria
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Registration Date
                </p>
                <p className="font-medium">January 15, 2020</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">Kenya</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">
                  Registration Number
                </p>
                <p className="font-medium">NPO-67890-KE</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Registered Office
                </p>
                <p className="font-medium">
                  456 Innovation Way, Nairobi, Kenya
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Registration Date
                </p>
                <p className="font-medium">March 22, 2020</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">South Africa</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">
                  Registration Number
                </p>
                <p className="font-medium">NPO-54321-SA</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Registered Office
                </p>
                <p className="font-medium">
                  789 Developer Street, Cape Town, South Africa
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Registration Date
                </p>
                <p className="font-medium">June 10, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Financial Information Section */}
      <Section className="bg-card border-y border-border">
        <div className="mb-12">
          <h2 className="mb-4">
            <FileText className="inline-block mr-2 mb-1" size={28} />
            Financial <span className="gradient-text">Information</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            As a non-profit organization, we are committed to financial
            transparency. Below are our banking details and links to our annual
            financial reports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-background rounded-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">Banking Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Bank Name</p>
                <p className="font-medium">FirstTech Bank</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Name</p>
                <p className="font-medium">
                  SecretStartups Non-Profit Organization
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Account Number</p>
                <p className="font-medium">1234567890</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">SWIFT/BIC Code</p>
                <p className="font-medium">FTBNGLA123</p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">Annual Reports</h3>
            <p className="text-muted-foreground mb-4">
              Our annual financial reports are available for public review,
              demonstrating our commitment to transparency.
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neon-cyan hover:underline flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  2023 Financial Audit Report
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neon-cyan hover:underline flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  2022 Financial Audit Report
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neon-cyan hover:underline flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  2021 Financial Audit Report
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neon-cyan hover:underline flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  2020 Financial Audit Report
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Funding Allocation</h3>
          <div className="bg-background rounded-lg p-6 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-2">
                  75%
                </div>
                <p className="text-muted-foreground">Programs & Services</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">
                  15%
                </div>
                <p className="text-muted-foreground">Operations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">
                  10%
                </div>
                <p className="text-muted-foreground">Administration</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Legal Documents Section */}
      <Section>
        <div className="mb-12">
          <h2 className="mb-4">
            <ShieldCheck className="inline-block mr-2 mb-1" size={28} />
            Legal <span className="gradient-text">Documents</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our policies and legal documents ensure that we operate ethically
            and in compliance with relevant regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            href="#"
            className="bg-card rounded-lg p-6 border border-border card-hover"
          >
            <h3 className="text-xl font-bold mb-2">Terms of Service</h3>
            <p className="text-muted-foreground">
              The rules and guidelines for using our platform and services.
            </p>
          </a>

          <a
            href="#"
            className="bg-card rounded-lg p-6 border border-border card-hover"
          >
            <h3 className="text-xl font-bold mb-2">Privacy Policy</h3>
            <p className="text-muted-foreground">
              How we collect, use, and protect your personal information.
            </p>
          </a>

          <a
            href="#"
            className="bg-card rounded-lg p-6 border border-border card-hover"
          >
            <h3 className="text-xl font-bold mb-2">Code of Conduct</h3>
            <p className="text-muted-foreground">
              Expected behavior for all members of our community.
            </p>
          </a>

          <a
            href="#"
            className="bg-card rounded-lg p-6 border border-border card-hover"
          >
            <h3 className="text-xl font-bold mb-2">GDPR Compliance</h3>
            <p className="text-muted-foreground">
              Our commitment to protecting European user data rights.
            </p>
          </a>

          <a
            href="#"
            className="bg-card rounded-lg p-6 border border-border card-hover"
          >
            <h3 className="text-xl font-bold mb-2">Cookie Policy</h3>
            <p className="text-muted-foreground">
              How we use cookies and similar technologies on our platform.
            </p>
          </a>

          <a
            href="#"
            className="bg-card rounded-lg p-6 border border-border card-hover"
          >
            <h3 className="text-xl font-bold mb-2">Copyright Notice</h3>
            <p className="text-muted-foreground">
              Information about our intellectual property rights.
            </p>
          </a>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-gradient-to-br from-primary/20 to-secondary/20 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">
            Have <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            If you have any questions about our legal information or would like
            to request additional documents, please contact our legal team.
          </p>
          
        <button onClick={handleApplyClick} className="btn-neon">
          <a href="mailto:legal@secretstartups.org">Contact Legal Team</a>
        </button>
        </div>
      </Section>
    </Layout>
  );
};

export default Legals;
