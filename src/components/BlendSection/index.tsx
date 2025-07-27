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
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.13 4.446h-10a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Z"></path><path fill="currentColor" d="M5.13 17.446h1.5a.5.5 0 0 1 .5.5v1.5a2 2 0 0 1-2-2ZM9.13 17.946a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1.5h-2v-1.5ZM13.13 17.946a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1.5h-2v-1.5ZM17.13 17.946a.5.5 0 0 1 .5-.5h1.5a2 2 0 0 1-2 2v-1.5ZM5.38 14.046a.35.35 0 0 1 .35-.35h.8a.35.35 0 0 1 .35.35v.8a.35.35 0 0 1-.35.35h-.8a.35.35 0 0 1-.35-.35v-.8Z"></path><rect width="1.48" height="1.48" x="9.39" y="13.706" fill="currentColor" rx=".35"></rect><rect width="1.5" height="1.5" x="13.38" y="13.696" fill="currentColor" rx=".35"></rect><path fill="currentColor" d="M17.38 14.046a.35.35 0 0 1 .35-.35h.8a.35.35 0 0 1 .35.35v.8a.35.35 0 0 1-.35.35h-.8a.35.35 0 0 1-.35-.35v-.8Z"></path><rect width="2" height="2" x="7.13" y="15.446" fill="currentColor" rx=".5"></rect><rect width="2" height="2" x="11.13" y="15.446" fill="currentColor" rx=".5"></rect><path fill="currentColor" d="M15.13 15.946a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Z"></path><rect width="1" height="1" x="7.63" y="11.946" fill="currentColor" rx=".2"></rect><rect width="1" height="1" x="11.63" y="11.946" fill="currentColor" rx=".2"></rect><path fill="currentColor" d="M15.63 12.146c0-.11.09-.2.2-.2h.6c.11 0 .2.09.2.2v.6a.2.2 0 0 1-.2.2h-.6a.2.2 0 0 1-.2-.2v-.6Z"></path></svg>
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
