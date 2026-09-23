import React from 'react';

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
  // Use the exact uploaded logosr1.png (or transparent logosr2.png on dark backgrounds)
  const imgSrc = isWhite ? '/logosr2.png' : '/logosr1.png';

  // Generous height classes for bold, unmistakable brand presence
  const heightClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16 md:h-18 lg:h-20',
    lg: 'h-18 sm:h-22 md:h-24',
    xl: 'h-24 sm:h-28 md:h-32',
    '2xl': 'h-32 sm:h-36 md:h-40',
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={imgSrc}
        alt="Sorriso Reality Clínicas Odontológicas"
        className={`${heightClasses} w-auto max-w-[260px] sm:max-w-[320px] md:max-w-[380px] object-contain transition-transform duration-300 hover:scale-102 ${
          isWhite ? 'brightness-0 invert drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]' : ''
        }`}
        loading="eager"
      />
    </div>
  );
};
