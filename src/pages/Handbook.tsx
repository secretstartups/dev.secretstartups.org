import React from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import {
  BookOpen,
  Code,
  Database,
  Globe,
  Server,
  Shield,
  Zap,
  Users,
  Lightbulb,
  Rocket,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { trackButtonClick } from "@/utils/analytics";

const Handbook = () => {
  // Main handbook categories
  const categories = [
    {
      title: "Getting Started",
      icon: <BookOpen className="h-6 w-6" />,
      guides: [
        { title: "Introduction to SecretStartups", url: "#introduction" },
        { title: "Setting Up Your Profile", url: "#profile-setup" },
        { title: "Joining a Team", url: "#joining-team" },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      guides: [
        { title: "Modern JavaScript Fundamentals", url: "#js-fundamentals" },
        { title: "React Best Practices", url: "#react-best-practices" },
        { title: "Building Responsive UIs", url: "#responsive-ui" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      guides: [
        { title: "API Design Principles", url: "#api-design" },
        {
          title: "Node.js Application Architecture",
          url: "#nodejs-architecture",
        },
        { title: "Authentication & Authorization", url: "#auth" },
      ],
    },
    {
      title: "Database Management",
      icon: <Database className="h-6 w-6" />,
      guides: [
        { title: "SQL vs NoSQL", url: "#sql-nosql" },
        { title: "Data Modeling Best Practices", url: "#data-modeling" },
        { title: "Database Performance Optimization", url: "#db-performance" },
      ],
    },
    {
      title: "Security",
      icon: <Shield className="h-6 w-6" />,
      guides: [
        { title: "OWASP Top 10 Security Risks", url: "#owasp" },
        { title: "Secure Coding Practices", url: "#secure-coding" },
        { title: "Security Testing", url: "#security-testing" },
      ],
    },
    {
      title: "Performance Optimization",
      icon: <Zap className="h-6 w-6" />,
      guides: [
        { title: "Frontend Performance", url: "#frontend-performance" },
        { title: "Backend Scaling", url: "#backend-scaling" },
        { title: "Database Optimization", url: "#db-optimization" },
      ],
    },
  ];

  // African context specific resources
  const africanContextResources = [
    {
      title: "Local Infrastructure",
      description:
        "Strategies for developing robust applications despite infrastructure challenges:",
      items: [
        "Offline-first application development",
        "Low-bandwidth optimization techniques",
        "Power outage resilience strategies",
        "Mobile-first development approaches",
      ],
    },
    {
      title: "Market Understanding",
      description: "Insights into developing solutions for African markets:",
      items: [
        "Local payment gateway integration",
        "Multilingual application design",
        "Cultural context in UX/UI design",
        "Regional compliance requirements",
      ],
    },
    {
      title: "Remote Work",
      description: "Excelling in global remote positions from Africa:",
      items: [
        "Managing time zone differences",
        "Communication best practices",
        "Setting up reliable home offices",
        "Work-life balance strategies",
      ],
    },
  ];

  const handleApplyClick = () => {
    trackButtonClick("Join Developer Forum", "Handbook Section");
    window.location.href =
      "https://associates.secretstartups.org/auth/register";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-secondary/20 to-primary/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">
            Developer <span className="gradient-text">Handbook</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A comprehensive resource center for best practices, guides, and
            principles for software development.
          </p>
        </div>
      </Section>

      {/* Quick Start Section */}
      <Section>
        <div className="mb-8">
          <h2 className="mb-4">
            <Rocket className="inline-block mr-2 mb-1" size={28} />
            Quick <span className="gradient-text">Start</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Fast-track your journey with our essential resources designed for
            African tech talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="#getting-started"
            className="bg-card rounded-lg p-6 border border-border card-hover"
          >
            <h3 className="text-xl font-bold mb-2">Getting Started Guide</h3>
            <p className="text-muted-foreground">
              Everything you need to know to begin your journey with
              SecretStartups.
            </p>
          </a>

          <a
            href="#skills-assessment"
            className="bg-card rounded-lg p-6 border border-border card-hover"
          >
            <h3 className="text-xl font-bold mb-2">Skills Assessment</h3>
            <p className="text-muted-foreground">
              Evaluate your technical skills and identify areas for growth.
            </p>
          </a>

          <a
            href="#opportunity-finder"
            className="bg-card rounded-lg p-6 border border-border card-hover"
          >
            <h3 className="text-xl font-bold mb-2">Opportunity Finder</h3>
            <p className="text-muted-foreground">
              Discover projects, jobs, and collaborations suited to your
              expertise.
            </p>
          </a>
        </div>
      </Section>

      {/* Handbook Categories */}
      <Section>
        <div className="mb-8">
          <h2 className="mb-4">
            <BookOpen className="inline-block mr-2 mb-1" size={28} />
            Developer <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Explore our comprehensive collection of guides and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-6 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 text-neon-cyan">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.guides.map((guide, guideIndex) => (
                  <li key={guideIndex}>
                    <a
                      href={guide.url}
                      className="text-foreground/80 hover:text-neon-cyan flex items-center"
                    >
                      <Code className="h-4 w-4 mr-2" />
                      {guide.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Article Section */}
      <Section className="bg-card border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="mb-4">Featured Article</h2>
            <h3 className="text-2xl font-bold mb-2 gradient-text">
              Building Scalable Web Applications
            </h3>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-4">
              Building scalable web applications requires a strategic approach
              to architecture, technology selection, and implementation. This
              guide provides an overview of key principles and best practices.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">1. Modularity</h4>
            <p className="mb-4">
              Modular design is essential for creating scalable applications.
              Break your application into independent, interchangeable modules
              that can be developed, tested, and maintained separately. This
              approach allows for:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Easier maintenance and updates</li>
              <li>Better team collaboration</li>
              <li>Improved code reusability</li>
              <li>Simplified testing and debugging</li>
            </ul>

            <h4 className="text-xl font-bold mt-8 mb-4">
              2. Stateless Architecture
            </h4>
            <p className="mb-4">
              Stateless components are easier to scale horizontally. When your
              application servers don't store session data:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>New servers can be added without session synchronization</li>
              <li>Load balancing becomes more straightforward</li>
              <li>System failures are less impactful</li>
              <li>Vertical and horizontal scaling is simplified</li>
            </ul>

            <h4 className="text-xl font-bold mt-8 mb-4">3. Caching Strategy</h4>
            <p className="mb-4">
              Implementing robust caching mechanisms reduces database load and
              improves response times:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Client-side caching for static assets</li>
              <li>CDN integration for global content delivery</li>
              <li>Application-level caching for frequent computations</li>
              <li>Database query caching for expensive operations</li>
            </ul>

            <h4 className="text-xl font-bold mt-8 mb-4">
              4. Asynchronous Processing
            </h4>
            <p className="mb-4">
              Moving time-consuming tasks to background processes improves user
              experience and application responsiveness:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Message queues for task distribution</li>
              <li>Background workers for CPU-intensive operations</li>
              <li>Event-driven architecture for real-time features</li>
              <li>Scheduled jobs for recurring tasks</li>
            </ul>

            <p className="mt-8 text-muted-foreground">
              <em>
                This is an excerpt from our comprehensive guide. For the full
                article, check back soon as we expand our resource library.
              </em>
            </p>
          </div>
        </div>
      </Section>

      {/* Core Principles Section */}
      <Section>
        <div className="mb-8">
          <h2 className="mb-4">
            <Lightbulb className="inline-block mr-2 mb-1" size={28} />
            Core <span className="gradient-text">Principles</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our fundamental beliefs that guide successful software development
            and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-start mb-4">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Lightbulb className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Continuous Learning</h3>
            </div>
            <p className="text-muted-foreground">
              Technology evolves rapidly. Commit to lifelong learning and stay
              ahead of industry trends through daily practice, exploration, and
              curiosity. We provide resources to support your ongoing education
              journey.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-start mb-4">
              <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                <Users className="text-secondary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Collaborative Growth</h3>
            </div>
            <p className="text-muted-foreground">
              The strongest solutions emerge from diverse perspectives. Embrace
              team collaboration, share knowledge generously, and respect
              different viewpoints to build innovative products and grow
              together.
            </p>
          </div>
        </div>
      </Section>

      {/* African Tech Context Section */}
      <Section className="bg-gradient-to-br from-primary/20 to-secondary/20 border-y border-border">
        <div className="mb-8">
          <h2 className="mb-4">
            <Globe className="inline-block mr-2 mb-1" size={28} />
            African Tech <span className="gradient-text">Context</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Resources specifically tailored to the unique challenges and
            opportunities in the African tech ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {africanContextResources.map((resource, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border"
            >
              <h3 className="text-xl font-bold mb-4">{resource.title}</h3>
              <p className="text-muted-foreground mb-4">
                {resource.description}
              </p>
              <ul className="space-y-2 text-sm">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-2 mt-1 h-5 w-5 flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Professional Development Section */}
      <Section>
        <div className="mb-8">
          <h2 className="mb-4">
            <Rocket className="inline-block mr-2 mb-1" size={28} />
            Professional <span className="gradient-text">Development</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Resources to help you grow your career and succeed in the tech
            industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">Career Advancement</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-neon-cyan" />
                  Technical CV Building
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Craft a compelling CV that showcases your skills and
                  experience effectively.
                </p>
              </div>

              <div>
                <h4 className="font-bold flex items-center">
                  <Users className="h-5 w-5 mr-2 text-neon-purple" />
                  Interview Preparation
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Master technical interviews with practice problems and system
                  design exercises.
                </p>
              </div>

              <div>
                <h4 className="font-bold flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                  Personal Branding
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Build your online presence through portfolio development and
                  technical blogging.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">Learning Paths</h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center p-3 bg-background rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Junior Developer Path</h4>
                  <p className="text-xs text-muted-foreground">
                    For those with 0-2 years of experience
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center p-3 bg-background rounded-lg border border-border hover:border-secondary transition-colors"
              >
                <div className="bg-secondary/10 p-2 rounded-full mr-3">
                  <Code className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold">Mid-Level Developer Path</h4>
                  <p className="text-xs text-muted-foreground">
                    For those with 2-5 years of experience
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center p-3 bg-background rounded-lg border border-border hover:border-neon-cyan transition-colors"
              >
                <div className="bg-neon-cyan/10 p-2 rounded-full mr-3">
                  <Code className="h-5 w-5 text-neon-cyan" />
                </div>
                <div>
                  <h4 className="font-bold">Senior Developer Path</h4>
                  <p className="text-xs text-muted-foreground">
                    For those with 5+ years of experience
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Community & Events Section */}
      <Section className="bg-card border-y border-border">
        <div className="mb-8">
          <h2 className="mb-4">
            <Users className="inline-block mr-2 mb-1" size={28} />
            Community & <span className="gradient-text">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Connect with peers and experts through our regular online and
            in-person events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold">Weekly Code Reviews</h4>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                Online
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Get feedback on your projects from experienced developers. Learn
              best practices and improve your coding skills.
            </p>
            <p className="text-xs text-neon-cyan">
              Every Thursday • 6:00 PM WAT
            </p>
          </div>

          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold">Tech Talks</h4>
              <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                Hybrid
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Listen to experts discuss emerging technologies and industry
              trends. Ask questions and network with speakers.
            </p>
            <p className="text-xs text-neon-cyan">
              First Tuesday • 5:00 PM WAT
            </p>
          </div>

          <div className="bg-background rounded-lg p-4 border border-border">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold">Hackathons</h4>
              <span className="text-xs bg-neon-cyan/20 text-neon-cyan px-2 py-1 rounded-full">
                In-Person
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Collaborate with other developers to build innovative solutions to
              real-world problems in 48 hours.
            </p>
            <p className="text-xs text-neon-cyan">Quarterly • Check Calendar</p>
          </div>
        </div>
      </Section>

      {/* Resources Section */}
      <Section>
        <div className="mb-8">
          <h2 className="mb-4">
            Additional <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Expand your knowledge with these valuable resources for developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="#"
            className="group bg-card rounded-lg border border-border p-6 card-hover"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
              Code of Conduct
            </h3>
            <p className="text-muted-foreground">
              Guidelines for professional behavior in our community.
            </p>
          </a>

          <a
            href="#"
            className="group bg-card rounded-lg border border-border p-6 card-hover"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
              Technical Interview Prep
            </h3>
            <p className="text-muted-foreground">
              Resources to help you ace your next technical interview.
            </p>
          </a>

          <a
            href="#"
            className="group bg-card rounded-lg border border-border p-6 card-hover"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
              Project Management
            </h3>
            <p className="text-muted-foreground">
              Tools and techniques for effective project management.
            </p>
          </a>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gradient-to-br from-primary/20 to-secondary/20 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">
            Have <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our team is here to assist you
            with any questions about our resources.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handleApplyClick} className="btn-neon">
              Join Developer Forum
            </button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Handbook;
