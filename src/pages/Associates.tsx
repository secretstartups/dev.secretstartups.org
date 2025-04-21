import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import ProfileCard from '@/components/ProfileCard';
import { UserPlus } from 'lucide-react';
// import DataDisplay from '@/components/DataDisplay';
const associatesImage = '/assets/ss-avatar.png';

const Associates = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Helper function to format name (first name and first letter of last name)
  const formatName = (fullName) => {
    const nameParts = fullName.trim().split(' ');
    if (nameParts.length === 1) return nameParts[0];
    
    const firstName = nameParts[0];
    const lastNameInitial = nameParts[1].charAt(0).toUpperCase();
    return `${firstName} ${lastNameInitial}.`;
  };

  // Helper function to randomly select 6 items from an array
  const getRandomSample = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        // Try to fetch from the API first
        try {
          const apiResponse = await fetch('https://crm.secretstartups.org/api/users');
          
          if (apiResponse.ok) {
            const apiData = await apiResponse.json();
            
            // Transform the API data to match the required format
            const transformedData = apiData.map(user => ({
              name: formatName(user.name),
              email: user.email,
              id: user.id,
              // Default values for missing fields
              role: 'Developer', // Default role
              skills: ['JavaScript', 'React', 'Node.js'], // Default skills
              image: associatesImage, // Default image from assets
              portfolioUrl: '#' // Route to homepage for now
            }));
            
            // Get 6 random profiles or all if less than 6
            const sampleSize = Math.min(6, transformedData.length);
            const randomProfiles = getRandomSample(transformedData, sampleSize);
            
            setProfiles(randomProfiles);
            setLoading(false);
            return; // Exit early if API fetch was successful
          }
        } catch (apiError) {
          console.log('API fetch failed, falling back to local data:', apiError);
          // Continue to fallback if API fetch fails
        }
        
        // Fallback to local JSON if API fetch fails
        const fallbackResponse = await fetch('/data/associates.json');
        if (!fallbackResponse.ok) {
          throw new Error('Failed to fetch associates data');
        }
        const fallbackData = await fallbackResponse.json();
        
        // Apply formatName to the fallback data as well
        const processedFallbackData = fallbackData.map(profile => ({
          ...profile,
          name: formatName(profile.name),
          portfolioUrl: '/' // Route to homepage for now
        }));
        
        // Get 6 random profiles or all if less than 6
        const sampleSize = Math.min(6, processedFallbackData.length);
        const randomProfiles = getRandomSample(processedFallbackData, sampleSize);
        
        setProfiles(randomProfiles);
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

  const handleApplyClick = () => {
    window.location.href = 'https://associates.secretstartups.org/auth/register';
  };

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
            onClick={handleApplyClick}
            className="btn-neon"
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Apply to Join
          </button>
        </div>
      </Section>
      
      {/* Current Associates Section */}
      <Section className="bg-card border-t border-border">
        <div className="mb-12">
          <h2 className="mb-4">Meet Our <span className="gradient-text">Associates</span></h2>
          <p className="text-lg text-muted-foreground">
          Meet some of the brilliant minds from our network, randomly selected and actively building amazing projects across Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <ProfileCard 
              key={profile.id || index}
              name={profile.name}
              role={profile.role}
              skills={profile.skills}
              image={profile.image}
              portfolioUrl={profile.portfolioUrl}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={handleApplyClick}
            className="btn-neon inline-flex items-center"
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Become an Associate
          </button>
        </div>
      </Section>
      
    </Layout>
  );
};

export default Associates;