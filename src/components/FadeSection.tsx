import React, { ReactNode } from 'react';

interface FadeSectionProps {
  children: ReactNode;
  threshold?: number; 
  rootMargin?: string; 
}

const FadeSection: React.FC<FadeSectionProps> = ({ children, threshold = 0.2, rootMargin = '-20%' }) => {
  return <section>{children}</section>; 
};

export default FadeSection;