import React from "react";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  href?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  icon,
  className,
  href,
}) => {
  const CardContent = () => (
    <>
      <div className="mb-4 text-neon-cyan">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </>
  );

  return href ? (
    <a
      href={href}
      className={cn(
        "block p-6 bg-card rounded-lg border border-border transition-all duration-300",
        "hover:border-neon-cyan/50 hover:shadow-lg hover:shadow-neon-cyan/20 hover:translate-y-[-5px]",
        className
      )}
    >
      <CardContent />
    </a>
  ) : (
    <div
      className={cn(
        "p-6 bg-card rounded-lg border border-border card-hover",
        className
      )}
    >
      <CardContent />
    </div>
  );
};

export default ResourceCard;
