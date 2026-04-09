import React from 'react';

/**
 * Responsive Container Component
 * Provides consistent padding and max-width across the app
 */
export const Container = ({ children, className = '', size = 'default' }) => {
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-screen-xl',
    full: 'max-w-full'
  };

  return (
    <div className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Responsive Section Component
 * Provides consistent vertical padding
 */
export const Section = ({ children, className = '', padding = 'default', bgColor = 'white' }) => {
  const paddings = {
    none: '',
    sm: 'py-8 md:py-12',
    default: 'py-12 md:py-16 lg:py-20',
    lg: 'py-16 md:py-24 lg:py-32'
  };

  return (
    <section className={`${paddings[padding]} bg-${bgColor} ${className}`}>
      {children}
    </section>
  );
};

/**
 * Responsive Grid Component
 * Smart grid that adapts based on number of items
 */
export const ResponsiveGrid = ({ children, cols = 3, gap = '6', className = '' }) => {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
  };

  return (
    <div className={`grid ${colsClass[cols]} gap-${gap} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Responsive Heading Component
 * Ensures text sizes are appropriate for each screen size
 */
export const ResponsiveHeading = ({ level = 1, children, className = '' }) => {
  const sizes = {
    1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
    3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
    4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
    5: 'text-base sm:text-lg md:text-xl lg:text-2xl',
    6: 'text-sm sm:text-base md:text-lg lg:text-xl'
  };

  const Tag = `h${level}`;
  
  return (
    <Tag className={`${sizes[level]} font-bold ${className}`}>
      {children}
    </Tag>
  );
};

/**
 * Responsive Stack Component
 * Switches from horizontal to vertical on mobile
 */
export const ResponsiveStack = ({ children, className = '', direction = 'row', gap = '4' }) => {
  const directionClass = direction === 'row' 
    ? 'flex-col sm:flex-row' 
    : 'flex-col';

  return (
    <div className={`flex ${directionClass} gap-${gap} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Show/Hide based on screen size
 */
export const ShowOnMobile = ({ children }) => (
  <div className="block lg:hidden">{children}</div>
);

export const HideOnMobile = ({ children }) => (
  <div className="hidden lg:block">{children}</div>
);

export const ShowOnTablet = ({ children }) => (
  <div className="hidden md:block lg:hidden">{children}</div>
);

export const ShowOnDesktop = ({ children }) => (
  <div className="hidden lg:block">{children}</div>
);

export default {
  Container,
  Section,
  ResponsiveGrid,
  ResponsiveHeading,
  ResponsiveStack,
  ShowOnMobile,
  HideOnMobile,
  ShowOnTablet,
  ShowOnDesktop
};

