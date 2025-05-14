import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: auto;
  min-height: 200px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Logo = styled.h1<{ $opacity: number }>`
  font-size: 64px;
  font-weight: 450;
  color: #000;
  opacity: ${props => props.$opacity};
  transition: opacity 0.2s;
`;

const SoraLogo: React.FC = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 200;
      let newOpacity = 1;
      if (scrollY > fadeStart) {
        newOpacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
        if (newOpacity < 0) newOpacity = 0;
        if (newOpacity > 1) newOpacity = 1;
      }
      setOpacity(newOpacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <Logo $opacity={opacity}>Sora</Logo>
    </Container>
  );
};

export default SoraLogo; 