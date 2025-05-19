import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';

// Styled components
const PageWrapper = styled.div`
  min-height: 2000px; 
  background-color: #fff;
`;

const Container = styled.section`
  height: 200vh; /* Section cao gấp đôi viewport */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const Logo = styled.h1<{ $opacity: number }>`
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 700;
  color: #000;
  opacity: ${({ $opacity }) => $opacity};
  transition: opacity 0.15s ease-in-out;
  will-change: opacity;
`;

const SoraLogo: React.FC = () => {
  const [opacity, setOpacity] = useState(0); 
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  const calculateOpacity = useCallback(() => {
    if (!sectionRef.current) return 0;

    const rect = sectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const sectionTop = rect.top;
    const sectionHeight = rect.height;

    const logoCenter = sectionTop + sectionHeight / 2;

    const viewportCenter = viewportHeight / 2;

    
    const fadeDistance = viewportHeight * 0.75; 

    const distanceFromCenter = Math.abs(logoCenter - viewportCenter);

    let newOpacity = 1 - distanceFromCenter / fadeDistance;
    newOpacity = Math.max(0, Math.min(1, newOpacity));

    return Number(newOpacity.toFixed(2));
  }, []);

  // Xử lý scroll với requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (rafRef.current) return; 

    rafRef.current = requestAnimationFrame(() => {
      const newOpacity = calculateOpacity();
      setOpacity(newOpacity);
      console.log(`Opacity: ${newOpacity}`); 
      rafRef.current = null;
    });
  }, [calculateOpacity]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleScroll(); 
          window.addEventListener('scroll', handleScroll, { passive: true });
        } else {
          setOpacity(0);
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: [0, 0.5], rootMargin: '200px 0px 200px 0px' } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <PageWrapper>
      <Container ref={sectionRef} role="banner" aria-label="Sora Logo Section">
        <Logo
          $opacity={opacity}
          role="heading"
          aria-label={`Sora logo with opacity ${Math.round(opacity * 100)}%`}
        >
          Sora
        </Logo>
      </Container>
    </PageWrapper>
  );
};

export default SoraLogo;