
import React from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import ProfileCard from '@/components/ProfileCard';
import { Upload, Github, Linkedin, FileText } from 'lucide-react';

const Associates = () => {
  // Sample profiles data
  const profiles = [
    {
      name: "Amara Ndubisi",
      role: "Frontend Developer",
      skills: ["React", "Next.js", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      githubUrl: "https://github.com",
      portfolioUrl: "https://portfolio.com"
    },
    {
      name: "Kwame Mensah",
      role: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      githubUrl: "https://github.com"
    },
    {
      name: "Fatima Ahmed",
      role: "Full Stack Developer",
      skills: ["React", "Node.js", "TypeScript"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
      portfolioUrl: "https://portfolio.com"
    },
    {
      name: "Malik Ndiaye",
      role: "Mobile Developer",
      skills: ["React Native", "Flutter", "Firebase"],
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      githubUrl: "https://github.com",
      portfolioUrl: "https://portfolio.com"
    },
    {
      name: "Zainab Osei",
      role: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      portfolioUrl: "https://portfolio.com"
    },
    {
      name: "Tendai Moyo",
      role: "DevOps Engineer",
      skills: ["Docker", "Kubernetes", "AWS"],
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-secondary/20 to-primary/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Join Our <span className="gradient-text">Developer Network</span></h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Show the world what you can do. Join a network of talented developers, get matched to paid work, and build your career in tech.
          </p>
        </div>
      </Section>

      {/* Sign Up Form Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="mb-4">Become an <span className="gradient-text">Associate</span></h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to join our network of talented developers across Africa.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2">Professional Role</label>
                <input
                  type="text"
                  id="role"
                  placeholder="e.g. Frontend Developer, Data Scientist"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="skills" className="block text-sm font-medium mb-2">Skills (comma separated)</label>
                <input
                  type="text"
                  id="skills"
                  placeholder="e.g. React, Node.js, Python"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="bio" className="block text-sm font-medium mb-2">Bio</label>
                <textarea
                  id="bio"
                  rows={4}
                  placeholder="Tell us about yourself, your experience, and what you're looking for"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="github" className="block text-sm font-medium mb-2">GitHub URL</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                      <Github className="h-5 w-5" />
                    </div>
                    <input
                      type="url"
                      id="github"
                      placeholder="https://github.com/username"
                      className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium mb-2">LinkedIn URL</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <input
                      type="url"
                      id="linkedin"
                      placeholder="https://linkedin.com/in/username"
                      className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium mb-2">Portfolio URL</label>
                <input
                  type="url"
                  id="portfolio"
                  placeholder="https://yourportfolio.com"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">CV/Resume</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="flex text-sm text-muted-foreground">
                      <label htmlFor="cv-upload" className="relative cursor-pointer bg-background rounded-md font-medium text-neon-cyan hover:text-neon-blue focus-within:outline-none">
                        <span>Upload a file</span>
                        <input id="cv-upload" name="cv-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      PDF, DOC, or DOCX up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Introduction Video (optional)</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="flex text-sm text-muted-foreground">
                      <label htmlFor="video-upload" className="relative cursor-pointer bg-background rounded-md font-medium text-neon-cyan hover:text-neon-blue focus-within:outline-none">
                        <span>Upload a video</span>
                        <input id="video-upload" name="video-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      MP4 or MOV up to 100MB (1-2 minutes recommended)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  id="terms" 
                  type="checkbox" 
                  className="h-4 w-4 text-primary bg-background border-border rounded focus:ring-primary"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                  I agree to the <a href="/terms-of-service" className="text-neon-cyan hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-neon-cyan hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
      
      {/* Current Associates Section */}
      <Section className="bg-card border-t border-border">
        <div className="mb-12">
          <h2 className="mb-4">Meet Our <span className="gradient-text">Associates</span></h2>
          <p className="text-lg text-muted-foreground">
            These talented developers are part of our network, building amazing projects across Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <ProfileCard 
              key={index}
              name={profile.name}
              role={profile.role}
              skills={profile.skills}
              image={profile.image}
              githubUrl={profile.githubUrl}
              portfolioUrl={profile.portfolioUrl}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Associates;
