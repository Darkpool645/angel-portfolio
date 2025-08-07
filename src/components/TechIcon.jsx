import { useState } from "react";
import { Code } from "lucide-react";

const TechIcon = ({ logoKey, name, className = "size-5"}) => {
    const [imageError, setImageError] = useState(false);

    const getIconUrl = () => {
        if (logoKey === 'nextjs') {
          return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg';
        }
        if (logoKey === 'tailwindcss') {
          return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg';
        }
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-original.svg`;
      };

      const getFallbackUrl = () => {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-plain.svg`;
      };

      if (imageError) {
        return (
          <div className={`${className} flex items-center justify-center bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark rounded`}>
            <Code className="size-3" />
          </div>
        );
      }
    return(
        <img src={getIconUrl()} alt={`${name} logo`} className={`${className} object-contain`} onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== getFallbackUrl()) {
                target.src = getFallbackUrl();
            } else {
                setImageError(true);
            }
        }} />
    );
};

export default TechIcon;