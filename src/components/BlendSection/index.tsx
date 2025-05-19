import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 80px 20px;
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

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.8;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #666;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  color: #444;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  color: #000;
  text-align: center;
  margin: 0;
  max-width: 800px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  max-width: 1400px;
  margin-top: 60px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 300px minmax(500px, 2fr) 300px;
  }
`;

const VideoContainer = styled.div<{ $isMain?: boolean }>`
  position: relative;
  width: 100%;
  border-radius: ${props => props.$isMain ? '16px' : '12px'};
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BlendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BlendSection: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <TitleRow>
          <IconWrapper>
            <BlendIcon />
          </IconWrapper>
          <Title>Blend</Title>
        </TitleRow>
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
