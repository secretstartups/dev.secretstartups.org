
import React from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { BookOpen, Code, Database, Globe, Server, Shield, Zap } from 'lucide-react';

const Handbook = () => {
  // Sample handbook sections
  const categories = [
    {
      title: "Getting Started",
      icon: <BookOpen className="h-6 w-6" />,
      guides: [
        { title: "Introduction to SecretStartups", url: "#introduction" },
        { title: "Setting Up Your Profile", url: "#profile-setup" },
        { title: "Joining a Team", url: "#joining-team" },
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      guides: [
        { title: "Modern JavaScript Fundamentals", url: "#js-fundamentals" },
        { title: "React Best Practices", url: "#react-best-practices" },
        { title: "Building Responsive UIs", url: "#responsive-ui" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      guides: [
        { title: "API Design Principles", url: "#api-design" },
        { title: "Node.js Application Architecture", url: "#nodejs-architecture" },
        { title: "Authentication & Authorization", url: "#auth" },
      ]
    },
    {
      title: "Database Management",
      icon: <Database className="h-6 w-6" />,
      guides: [
        { title: "SQL vs NoSQL", url: "#sql-nosql" },
        { title: "Data Modeling Best Practices", url: "#data-modeling" },
        { title: "Database Performance Optimization", url: "#db-performance" },
      ]
    },
    {
      title: "Security",
      icon: <Shield className="h-6 w-6" />,
      guides: [
        { title: "OWASP Top 10 Security Risks", url: "#owasp" },
        { title: "Secure Coding Practices", url: "#secure-coding" },
        { title: "Security Testing", url: "#security-testing" },
      ]
    },
    {
      title: "Performance Optimization",
      icon: <Zap className="h-6 w-6" />,
      guides: [
        { title: "Frontend Performance", url: "#frontend-performance" },
        { title: "Backend Scaling", url: "#backend-scaling" },
        { title: "Database Optimization", url: "#db-optimization" },
      ]
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-secondary/20 to-primary/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Developer <span className="gradient-text">Handbook</span></h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A comprehensive resource center for best practices, guides, and principles for software development.
          </p>
        </div>
      </Section>
      
      {/* Handbook Categories */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg border border-border p-6 card-hover">
              <div className="flex items-center mb-4">
                <div className="mr-3 text-neon-cyan">
                  {category.icon}
                </div>
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
            <h3 className="text-2xl font-bold mb-2 gradient-text">Building Scalable Web Applications</h3>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-4">
              Building scalable web applications requires a strategic approach to architecture, technology selection, and implementation. This guide provides an overview of key principles and best practices.
            </p>
            
            <h4 className="text-xl font-bold mt-8 mb-4">1. Modularity</h4>
            <p className="mb-4">
              Modular design is essential for creating scalable applications. Break your application into independent, interchangeable modules that can be developed, tested, and maintained separately. This approach allows for:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Easier maintenance and updates</li>
              <li>Better team collaboration</li>
              <li>Improved code reusability</li>
              <li>Simplified testing and debugging</li>
            </ul>
            
            <h4 className="text-xl font-bold mt-8 mb-4">2. Stateless Architecture</h4>
            <p className="mb-4">
              Stateless components are easier to scale horizontally. When your application servers don't store session data:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>New servers can be added without session synchronization</li>
              <li>Load balancing becomes more straightforward</li>
              <li>System failures are less impactful</li>
              <li>Vertical and horizontal scaling is simplified</li>
            </ul>
            
            <h4 className="text-xl font-bold mt-8 mb-4">3. Caching Strategy</h4>
            <p className="mb-4">
              Implementing robust caching mechanisms reduces database load and improves response times:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Client-side caching for static assets</li>
              <li>CDN integration for global content delivery</li>
              <li>Application-level caching for frequent computations</li>
              <li>Database query caching for expensive operations</li>
            </ul>
            
            <h4 className="text-xl font-bold mt-8 mb-4">4. Asynchronous Processing</h4>
            <p className="mb-4">
              Moving time-consuming tasks to background processes improves user experience and application responsiveness:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Message queues for task distribution</li>
              <li>Background workers for CPU-intensive operations</li>
              <li>Event-driven architecture for real-time features</li>
              <li>Scheduled jobs for recurring tasks</li>
            </ul>
            
            <p className="mt-8 text-muted-foreground">
              <em>This is an excerpt from our comprehensive guide. For the full article, check back soon as we expand our resource library.</em>
            </p>
          </div>
        </div>
      </Section>
      
      {/* Resources Section */}
      <Section>
        <div className="mb-12">
          <h2 className="mb-4">Additional <span className="gradient-text">Resources</span></h2>
          <p className="text-lg text-muted-foreground">
            Expand your knowledge with these valuable resources for developers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a 
            href="#" 
            className="group bg-card rounded-lg border border-border p-6 card-hover"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">Code of Conduct</h3>
            <p className="text-muted-foreground">Guidelines for professional behavior in our community.</p>
          </a>
          
          <a 
            href="#" 
            className="group bg-card rounded-lg border border-border p-6 card-hover"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">Technical Interview Prep</h3>
            <p className="text-muted-foreground">Resources to help you ace your next technical interview.</p>
          </a>
          
          <a 
            href="#" 
            className="group bg-card rounded-lg border border-border p-6 card-hover"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">Project Management</h3>
            <p className="text-muted-foreground">Tools and techniques for effective project management.</p>
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default Handbook;
