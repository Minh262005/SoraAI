import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 80px 20px;
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media (min-width: 768px) {
    padding: 80px 40px;
  }
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 800px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  opacity: 0.8;
`;

const IconLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #666;
  font-weight: 400;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const MainTitle = styled.h2`
  color: #000;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  margin: 0;
`;

const SubTitle = styled.p`
  color: #000;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  margin: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 64px;
  }
`;

const StoryboardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: 220px;
`;

const StoryCard = styled.div<{ $selected?: boolean }>`
  background: ${props => (props.$selected ? '#f8f8f8' : '#fff')};
  border-radius: 12px;
  border: 1px solid #eee;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: #f8f8f8;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #000;
  }
`;

const StoryInfo = styled.div`
  text-align: left;
`;

const StoryNumber = styled.span`
  font-size: 12px;
  color: #999;
  display: block;
  margin-bottom: 6px;
`;

const StoryTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  color: #000;
  font-weight: 500;
  line-height: 1.4;
`;

const StoryTime = styled.span`
  font-size: 12px;
  color: #666;
  display: block;
  margin-top: 8px;
`;

const PreviewSection = styled.div`
  flex: 1;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background: #000;
  min-height: 360px;
  max-width: 720px;
  aspect-ratio: 16 / 9;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
`;

const StoryboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="4" width="7" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="10.5" y="4" width="7" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const StoryboardSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  const stories = [
    {
      number: '1',
      title: 'A vast red landscape with a docked spaceship in the distance',
      time: '0 - 114',
      videoSrc: 'https://cdn.openai.com/sora-ga/dev/features/md/storyboards-00-landscape.mp4.mp4',
    },
    {
      number: '2',
      title: 'Looking out from inside the spaceship, a space cowboy stands center frame',
      time: '114 - 324',
      videoSrc: 'https://cdn.openai.com/sora-ga/dev/features/md/storyboards-01-inside.mp4.mp4 ',
    },
    {
      number: '3',
      title: "Detailed close-up view of astronaut's eyes framed by a knitted fabric mask",
      time: '324 - 440',
      videoSrc: 'https://cdn.openai.com/sora-ga/dev/features/md/storyboards-02-closeup.mp4.mp4',
    },
  ];

  const frameInfo = [277, 312, 399];

  return (
    <Container>
      <SectionTitle>
        <IconLabel>
          <IconWrapper>
            <StoryboardIcon />
          </IconWrapper>
          Storyboard
        </IconLabel>
        <Title>
          <MainTitle>Organize and edit unique sequence of your videos on a personal timeline.</MainTitle>
          <SubTitle></SubTitle>
        </Title>
      </SectionTitle>

      <ContentWrapper>
        <StoryboardGrid>
          {stories.map((story, index) => (
            <StoryCard
              key={index}
              $selected={selectedStory === index}
              onClick={() => setSelectedStory(index)}
              role="button"
              tabIndex={0}
              aria-pressed={selectedStory === index}
              aria-label={`Select scene ${story.number}: ${story.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedStory(index);
                }
              }}
            >
              <StoryInfo>
                <StoryNumber>{story.number}</StoryNumber>
                <StoryTitle>{story.title}</StoryTitle>
                <StoryTime>{story.time}</StoryTime>
              </StoryInfo>
            </StoryCard>
          ))}
        </StoryboardGrid>

        <PreviewSection>
          <video
            key={selectedStory}
            src={stories[selectedStory].videoSrc}
            autoPlay
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 8,
              left: 12,
              color: '#fff',
              fontSize: '12px',
              opacity: 0.8,
            }}
          >
            Frame: {frameInfo[selectedStory]}
          </div>
        </PreviewSection>
      </ContentWrapper>
    </Container>
  );
};

export default StoryboardSection;
