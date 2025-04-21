import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import ProfileCard from '@/components/ProfileCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('/data/teams.json');
        if (!response.ok) {
          throw new Error('Failed to fetch teams data');
        }
        const data = await response.json();
        setTeams(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <Layout>
        <Section className="flex justify-center items-center min-h-[50vh]">
          <div className="text-center">
            <p className="text-lg">Loading teams...</p>
          </div>
        </Section>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Section className="flex justify-center items-center min-h-[50vh]">
          <div className="text-center">
            <p className="text-lg text-red-500">Error: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 btn-outline"
            >
              Try Again
            </button>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-secondary/20 to-primary/20 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Find Your Next <span className="gradient-text">Collaborators</span></h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join forces with brilliant minds. Our teams of talented developers are building innovative solutions across Africa.
          </p>
          <Link to="/associates" className="btn-neon">
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
            <Link to="/about" className="btn-neon">
              Learn More
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Teams;