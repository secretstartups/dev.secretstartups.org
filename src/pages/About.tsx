
import React from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { Link } from 'react-router-dom';
import { BookOpen, Briefcase, GraduationCap, MessageSquare, Users } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-secondary/20 to-primary/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">About <span className="gradient-text">SecretStartups</span></h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering African tech talent through connections, resources, and opportunities.
          </p>
        </div>
      </Section>
      
      {/* Mission Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-4">Our <span className="gradient-text">Mission</span></h2>
            <p className="text-lg text-muted-foreground mb-6">
              SecretStartups is a non-profit initiative dedicated to empowering African tech talent. We believe in the untapped potential of African developers, and are committed to building bridges between talent and opportunities.
            </p>
            <p className="text-lg text-muted-foreground">
              Through our platform, associates gain access to the resources needed to accelerate their professional development, gain exposure to enterprise-class systems and processes, establish collaboratives, work with best-in-class development productivity tools, publish and monetise their portfolios, bid on project tenders, and market themselves directly to employers.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden border border-border neon-border">
              <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Team collaboration" 
          className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
            </Section>
            
            {/* What We Do Section */}
            <Section className="bg-card border-y border-border">
        <div className="mb-12 text-center">
          <h2 className="mb-4">What We <span className="gradient-text">Do</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support for African developers to showcase their skills and connect with opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-background rounded-lg p-6 border border-border card-hover">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-neon-cyan mb-4">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
            <p className="text-muted-foreground">
              Access to enterprise-class systems and processes for accelerated professional development.
            </p>
          </div>
          
          <div className="bg-background rounded-lg p-6 border border-border card-hover">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-neon-cyan mb-4">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Portfolio Building</h3>
            <p className="text-muted-foreground">
              Tools and platforms to publish, showcase, and monetize your development portfolio.
            </p>
          </div>
          
          <div className="bg-background rounded-lg p-6 border border-border card-hover">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-neon-cyan mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Project Access</h3>
            <p className="text-muted-foreground">
              Opportunities to bid on project tenders and gain real-world development experience.
            </p>
          </div>
          
          <div className="bg-background rounded-lg p-6 border border-border card-hover">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/10 text-neon-cyan mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Market Exposure</h3>
            <p className="text-muted-foreground">
              Direct access to employers and platforms to market your skills and capabilities.
            </p>
          </div>
        </div>
            </Section>
      
      {/* Impact Stories Section */}
      <Section>
        <div className="mb-12">
          <h2 className="mb-4">Impact <span className="gradient-text">Stories</span></h2>
          <p className="text-lg text-muted-foreground">
            Real stories from developers whose careers have been transformed through SecretStartups.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 border border-border relative">
            <div className="text-neon-cyan absolute -top-4 left-8">
              <MessageSquare className="h-8 w-8" />
            </div>
            <p className="text-lg mb-6 text-foreground/90">
              "Before joining SecretStartups, I struggled to find opportunities that matched my skills. Within months of joining, I connected with a startup that valued my expertise, and I've been working with them for over a year now."
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Testimonial author"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">David O</h4>
                <p className="text-sm text-muted-foreground">Full Stack Developer, Lagos</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-8 border border-border relative">
            <div className="text-neon-cyan absolute -top-4 left-8">
              <MessageSquare className="h-8 w-8" />
            </div>
            <p className="text-lg mb-6 text-foreground/90">
              "The mentorship and resources I received through SecretStartups were invaluable. I went from being a junior developer to leading my own team in less than two years. The community here is incredibly supportive."
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Testimonial author"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Grace M</h4>
                <p className="text-sm text-muted-foreground">Frontend Developer, Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Team Section */}
      <Section className="bg-card border-y border-border">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Our <span className="gradient-text">Team</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated individuals behind SecretStartups who are passionate about empowering African tech talent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-neon-cyan">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Team member"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Michael Adeyemi</h3>
            <p className="text-muted-foreground mb-4">Founder & CEO</p>
            <p className="text-foreground/80 max-w-xs mx-auto">
              Tech entrepreneur with a passion for developing talent across Africa.
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-neon-purple">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Team member"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Nneka Okafor</h3>
            <p className="text-muted-foreground mb-4">COO</p>
            <p className="text-foreground/80 max-w-xs mx-auto">
              Operations expert with experience in scaling organizations across multiple countries.
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-40 w-40 rounded-full overflow-hidden mx-auto mb-4 border-4 border-neon-blue">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Team member"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Samuel Mensah</h3>
            <p className="text-muted-foreground mb-4">CTO</p>
            <p className="text-foreground/80 max-w-xs mx-auto">
              Software architect with a decade of experience building scalable systems.
            </p>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Join Our <span className="gradient-text">Mission</span></h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you're a developer looking for opportunities or an organization wanting to support African tech talent, there's a place for you at SecretStartups.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/associates" className="btn-primary">
              Join as a Developer
            </Link>
            <Link to="/legals" className="btn-outline">
              Support Our Work
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
