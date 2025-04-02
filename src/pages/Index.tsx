
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ResourceCard from '@/components/ResourceCard';
import ProfileCard from '@/components/ProfileCard';
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Users } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* Features Section */}
      <Section className="bg-card">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why <span className="gradient-text">Secret Startups?</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We connect talented developers across Africa with the resources and opportunities they need to thrive in tech.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ResourceCard 
            title="Employment"
            description="Connect with companies looking for your unique skills and talents."
            icon={<Briefcase size={36} />}
          />
          <ResourceCard 
            title="Apprenticeship"
            description="Learn from experienced mentors who guide your professional growth."
            icon={<GraduationCap size={36} />}
          />
          <ResourceCard 
            title="Education"
            description="Access resources and learning materials to expand your technical knowledge."
            icon={<BookOpen size={36} />}
          />
          <ResourceCard 
            title="Community"
            description="Join a vibrant network of developers collaborating on exciting projects."
            icon={<Users size={36} />}
          />
        </div>
      </Section>
      
      {/* Featured Developers */}
      <Section>
        <div className="mb-12">
          <h2 className="mb-4">Featured <span className="gradient-text">Developers</span></h2>
          <div className="flex justify-between items-center">
            <p className="text-xl text-muted-foreground max-w-2xl">
              Meet some of our talented associates building amazing projects across Africa.
            </p>
            <Link to="/associates" className="hidden md:flex items-center text-neon-cyan hover:underline">
              View all associates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProfileCard 
            name="Amara Ndubisi"
            role="Frontend Developer"
            skills={["React", "Next.js", "TailwindCSS"]}
            image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            githubUrl="https://github.com"
            portfolioUrl="https://portfolio.com"
          />
          <ProfileCard 
            name="Kwame Mensah"
            role="Backend Developer"
            skills={["Node.js", "Express", "MongoDB"]}
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            githubUrl="https://github.com"
          />
          <ProfileCard 
            name="Fatima Ahmed"
            role="Full Stack Developer"
            skills={["React", "Node.js", "TypeScript"]}
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
            portfolioUrl="https://portfolio.com"
          />
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/associates" className="btn-outline">
            View all associates
          </Link>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-secondary/20 to-primary/20 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to <span className="gradient-text">Accelerate</span> Your Tech Career?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join SecretStartups today and connect with opportunities, resources, and a vibrant community of developers across Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/associates" className="btn-primary">
              Join as a Developer
            </Link>
            <Link to="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </Section>
      
      {/* Testimonials Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="mb-4">Developer <span className="gradient-text">Stories</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from developers who have found opportunities through SecretStartups.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <p className="text-lg mb-6 text-foreground/90">
              "SecretStartups connected me with my first major client. The resources and community support were invaluable for my growth as a developer."
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
                <h4 className="font-bold">David Okonkwo</h4>
                <p className="text-sm text-muted-foreground">Full Stack Developer, Lagos</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <p className="text-lg mb-6 text-foreground/90">
              "The mentorship I received through SecretStartups fast-tracked my learning. Within months, I was contributing to real-world projects and building my portfolio."
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
                <h4 className="font-bold">Grace Mutambo</h4>
                <p className="text-sm text-muted-foreground">Frontend Developer, Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
