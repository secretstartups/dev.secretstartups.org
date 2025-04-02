
import React from 'react';

interface ProfileCardProps {
  name: string;
  role: string;
  skills: string[];
  image: string;
  githubUrl?: string;
  portfolioUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  skills,
  image,
  githubUrl,
  portfolioUrl
}) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border card-hover">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={`${name}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-muted-foreground mb-4">{role}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-muted rounded-full text-foreground/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3 mt-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground/80 hover:text-neon-cyan"
            >
              GitHub
            </a>
          )}
          {portfolioUrl && (
            <a 
              href={portfolioUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-foreground/80 hover:text-neon-cyan"
            >
              Portfolio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
