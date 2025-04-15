import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import ProfileCard from '@/components/ProfileCard';
import AssociateFormModal from '@/components/AssociateFormModal';
import { UserPlus } from 'lucide-react';
// import DataDisplay from '@/components/DataDisplay';

const Associates = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        // For GitHub Pages, we'll fetch from the relative path
        const response = await fetch('/data/associates.json');
        if (!response.ok) {
          throw new Error('Failed to fetch associates data');
        }
        const data = await response.json();
        setProfiles(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  if (loading) {
    return (
      <Layout>
        <Section className="flex justify-center items-center min-h-[50vh]">
          <div className="text-center">
            <p className="text-lg">Loading associates...</p>
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
          <h1 className="mb-6">Join Our <span className="gradient-text">Developer Network</span></h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Show the world what you can do. Join a network of talented developers, get matched to paid work, and build your career in tech.
          </p>
          <button 
            onClick={openForm}
            className="btn-primary flex items-center justify-center mx-auto"
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Apply to Join
          </button>
        </div>
      </Section>

      {/* <Section className="bg-background border-t border-border">
        <DataDisplay />
      </Section> */}
      
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
        
        <div className="mt-12 text-center">
          <button 
            onClick={openForm}
            className="btn-primary inline-flex items-center"
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Become an Associate
          </button>
        </div>
      </Section>
      
      {/* Form Modal */}
      <AssociateFormModal isOpen={isFormOpen} onClose={closeForm} />
    </Layout>
  );
};

export default Associates;