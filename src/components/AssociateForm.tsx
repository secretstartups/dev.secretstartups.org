import React, { useState } from 'react';
import { Github, User, Code, Loader2 } from 'lucide-react';

interface AssociateFormProps {
  onSubmitSuccess?: () => void;
}

const AssociateForm: React.FC<AssociateFormProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    skills: '',
    github: '',
    bio: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    setMessageType('');
    
    try {
      // Format the data for GitHub Actions
      const associateData = {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        skills: formData.skills.split(',').map(skill => skill.trim()),
        github: formData.github,
        bio: formData.bio,
        avatar: formData.github ? `https://github.com/${formData.github}.png` : '',
        joinedAt: new Date().toISOString()
      };
      
      // Submit directly to GitHub repository via the GitHub API
      // This uses the GitHub Actions workflow dispatch event
      const response = await fetch(
        'https://api.github.com/repos/secretstartups/dev.secretstartups.org/dispatches',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            event_type: 'associate_application',
            client_payload: {
              associate: associateData
            }
          })
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      // Display success message
      setMessageType('success');
      setMessage('Application submitted successfully! We will review your profile and get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        role: '',
        skills: '',
        github: '',
        bio: ''
      });
      
      // Close modal after delay if onSubmitSuccess is provided
      if (onSubmitSuccess) {
        setTimeout(() => {
          onSubmitSuccess();
        }, 3000);
      }
    } catch (error) {
      setMessageType('error');
      setMessage('Error submitting application. Please try using the GitHub link instead.');
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Alternative submission method via GitHub Issue
  const handleGithubSubmit = () => {
    const issueTitle = encodeURIComponent(`Associate Application: ${formData.name}`);
    const skillsFormatted = formData.skills
      .split(',')
      .map(skill => skill.trim())
      .join(', ');
      
    const issueBody = encodeURIComponent(
      `## Associate Application\n\n` +
      `**Name:** ${formData.name}\n` +
      `**Email:** ${formData.email}\n` +
      `**Role:** ${formData.role}\n` +
      `**Skills:** ${skillsFormatted}\n` +
      `**GitHub Username:** ${formData.github}\n\n` +
      `**Bio:**\n${formData.bio || "No bio provided."}`
    );
    
    // Open GitHub issue creation page in a new tab
    window.open(
      `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues/new?title=${issueTitle}&body=${issueBody}&labels=associate-application`,
      '_blank'
    );
    
    // Close modal if callback provided
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      {message && (
        <div 
          className={`p-4 mb-6 rounded-md ${
            messageType === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 
            messageType === 'error' ? 'bg-red-100 text-red-800 border border-red-300' : ''
          }`}
        >
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Full Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <User className="h-5 w-5" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
            required
          />
        </div>
        
        <div>
          <label htmlFor="role" className="block text-sm font-medium mb-1">
            Professional Role *
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
            placeholder="e.g. Frontend Developer, Data Scientist"
            required
          />
        </div>
        
        <div>
          <label htmlFor="skills" className="block text-sm font-medium mb-1">
            Skills (comma separated) *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <Code className="h-5 w-5" />
            </div>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder="React, JavaScript, Node.js"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="github" className="block text-sm font-medium mb-1">
            GitHub Username *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              <Github className="h-5 w-5" />
            </div>
            <input
              type="text"
              id="github"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="bio" className="block text-sm font-medium mb-1">
            Bio (brief introduction)
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-1 focus:ring-primary focus:border-primary"
            placeholder="Tell us about yourself, your experience, and what you're looking for"
          ></textarea>
        </div>
        
        <div className="flex items-center mb-4">
          <input 
            id="terms" 
            type="checkbox" 
            className="h-4 w-4 text-primary bg-background border-border rounded focus:ring-primary"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
            I agree to the <a href="/terms-of-service" className="text-neon-cyan hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-neon-cyan hover:underline">Privacy Policy</a>
          </label>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="w-full btn-primary flex items-center justify-center"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
          
          <button
            type="button"
            onClick={handleGithubSubmit}
            className="w-full btn-outline flex items-center justify-center"
          >
            <Github className="mr-2 h-5 w-5" />
            Submit via GitHub
          </button>
        </div>
        
        <p className="text-sm text-muted-foreground text-center mt-4">
          We recommend using the GitHub option if you encounter any issues with the form.
        </p>
      </form>
    </div>
  );
};

export default AssociateForm;