import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import ImageGrid from '../ImageGrid';

const HeroContainer = styled.div<{ isSticky: boolean }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 0; /* Loại bỏ margin-top */
  transition: all 0.3s ease;
  transform-origin: top center;
  z-index: 10;

  ${({ isSticky }) =>
    isSticky &&
    css`
      position: sticky;
      top: 64px; /* Điều chỉnh nếu header có chiều cao khác */
      width: 33.33%; /* Để chiếm khoảng 1/3 chiều ngang như các video */
      transform: scale(0.3); /* Thu nhỏ đáng kể */
      border-radius: 8px; /* Để có góc bo tròn như các video */
      overflow: hidden; /* Để video bên trong cũng bị bo tròn */
    `}
`;

const BackgroundVideo = styled.video`
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: inherit; /* Kế thừa border-radius từ parent */
`;

const HeroContent = styled.div<{ isSticky: boolean }>`
  opacity: ${({ isSticky }) => (isSticky ? 0 : 1)};
  transition: opacity 0.3s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: clamp(64px, 10vw, 120px);
  font-weight: 700;
  text-shadow: 0 4px 32px rgba(0, 0, 0, 0.7);
`;

const Hero: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0.2 } /* Điều chỉnh threshold */
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      <HeroContainer ref={heroRef} isSticky={isSticky}>
        <BackgroundVideo
          src="https://cdn.openai.com/sora-ga/dev/hero/hq/Hero_20241118_2315_Ethereal%20Jungle%20Journey_upscale_01jd1mdbdhfx6avpvcypefynaw.mp4.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <HeroContent isSticky={isSticky}>
          <HeroTitle>Sora</HeroTitle>
        </HeroContent>
      </HeroContainer>
      <ImageGrid />
    </>
  );
};

export default Hero;