import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 80px 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
  opacity: 0.3;
`;

const BlendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Title = styled.h2`
  font-size: 25px;
  font-weight: 500;
  color: #666;
  text-align: center;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 48px;
  font-weight: 500;
  color: rgb(0, 0, 0);
  text-align: center;
  margin: 0;
  max-width: 800px;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 300px minmax(500px, 2fr) 300px;
  gap: 24px;
  width: 100%;
  max-width: 1400px;
  margin-top: 60px;
`;

const VideoContainer = styled.div<{ $isMain?: boolean }>`
  position: relative;
  width: 100%;
  border-radius: ${props => props.$isMain ? '16px' : '12px'};
  overflow: hidden;
  aspect-ratio: 16/9;
  background: #000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BlendSection: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <IconWrapper>
          <BlendIcon />
        </IconWrapper>
        <Title>Blend</Title>
        <Subtitle>Combine two videos into one seamless clip</Subtitle>
      </HeaderContainer>

      <VideoGrid>
        <VideoContainer>
          <Video 
            src="https://cdn.openai.com/sora-ga/dev/features/sm/feature-blend-left.mp4.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </VideoContainer>

        <VideoContainer $isMain>
          <Video 
            src="https://cdn.openai.com/sora-ga/dev/features/md/feature-blend-blend.mp4.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </VideoContainer>

        <VideoContainer>
          <Video 
            src="https://cdn.openai.com/sora-ga/dev/features/sm/feature-blend-right.mp4.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </VideoContainer>
      </VideoGrid>
    </Container>
  );
};

export default BlendSection; 