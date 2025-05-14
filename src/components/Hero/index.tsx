import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  overflow: hidden;
  margin-top: 64px; 
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  color: #fff;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: -1.5px;
  margin: 0;
  text-align: center;
  text-shadow: 0 4px 32px rgba(0,0,0,0.7), 0 1px 0 #222;
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <BackgroundVideo
        src="https://cdn.openai.com/sora-ga/dev/hero/hq/Hero_20241118_2315_Ethereal%20Jungle%20Journey_upscale_01jd1mdbdhfx6avpvcypefynaw.mp4.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <HeroContent>
        <HeroTitle>Sora</HeroTitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 