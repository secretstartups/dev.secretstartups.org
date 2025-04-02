
import React from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import ProfileCard from '@/components/ProfileCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Teams = () => {
  // Sample team data
  const teams = [
    {
      id: 1,
      name: "Alpha Team",
      description: "Specializing in web applications with React and Node.js",
      members: [
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
        }
      ]
    },
    {
      id: 2,
      name: "Beta Team",
      description: "Mobile application development with React Native and Flutter",
      members: [
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
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-secondary/20 to-primary/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Find Your Next <span className="gradient-text">Collaborators</span></h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join forces with brilliant minds. Our teams of talented developers are building innovative solutions across Africa.
          </p>
          <Link to="/associates" className="btn-primary">
            Join a Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Section>
      
      {/* Teams Section */}
      {teams.map((team) => (
        <Section key={team.id} className={team.id % 2 === 0 ? "bg-card" : ""}>
          <div className="mb-12">
            <h2 className="mb-4">{team.name}</h2>
            <p className="text-lg text-muted-foreground">{team.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.members.map((member, index) => (
              <ProfileCard 
                key={index}
                name={member.name}
                role={member.role}
                skills={member.skills}
                image={member.image}
                githubUrl={member.githubUrl}
                portfolioUrl={member.portfolioUrl}
              />
            ))}
          </div>
        </Section>
      ))}
      
      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/20 to-secondary/20 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to <span className="gradient-text">Join Forces</span>?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Collaborate with talented developers on exciting projects. Join SecretStartups and become part of a team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/associates" className="btn-primary">
              Apply Now
            </Link>
            <Link to="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Teams;
