import React from 'react';
import logoImg from '../assets/logo1.jpeg';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'color',
  size = 'md',
}) => {
  const isWhite = variant === 'white';

  // Generous height classes for bold, unmistakable brand presence
  const heightClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-14 md:h-16 lg:h-18',
    lg: 'h-14 sm:h-16 md:h-18',
    xl: 'h-20 sm:h-24 md:h-28',
    '2xl': 'h-28 sm:h-32 md:h-36',
  }[size];

  if (isWhite) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <div className="bg-white/95 px-3.5 py-1.5 rounded-xl shadow-xs inline-flex items-center transition-transform duration-300 hover:scale-[1.02]">
          <picture>
            <source srcSet="/logosr1.webp" type="image/webp" />
            <img
              src={logoImg}
              alt="Sorriso Reality Clínicas Odontológicas"
              width="166"
              height="72"
              className={`${heightClasses} w-auto max-w-[240px] sm:max-w-[280px] object-contain`}
              loading="eager"
            />
          </picture>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <picture>
        <source srcSet="/logosr1.webp" type="image/webp" />
        <img
          src={logoImg}
          alt="Sorriso Reality Clínicas Odontológicas"
          width="166"
          height="72"
          className={`${heightClasses} w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[380px] object-contain transition-transform duration-300 hover:scale-[1.02]`}
          loading="eager"
        />
      </picture>
    </div>
  );
};

