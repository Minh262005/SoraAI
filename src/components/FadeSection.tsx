import React, { ReactNode } from 'react';

interface FadeSectionProps {
  children: ReactNode;
  threshold?: number; 
  rootMargin?: string; 
}

const FadeSection: React.FC<FadeSectionProps> = ({ children, threshold = 0.2, rootMargin = '-20%' }) => {
  // Your intersection observer or animation logic here
  return <section>{children}</section>; // Simplified example
};

export default FadeSection;