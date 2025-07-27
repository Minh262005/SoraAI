import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  padding: 80px 80px;
  align-items: center;
  background: #fff;
  justify-content: center;
`;

const CommandList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 24px;
`;

const Command = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  text-align: left;
  font-size: 20px;
  line-height: 1.6;
  padding: 0;
  color: ${props => props.$active ? '#000' : '#999'};
  font-weight: ${props => props.$active ? '600' : '400'};
  cursor: pointer;
  transition: color 0.2s, font-weight 0.2s;

  
`;

const VideoContainer = styled.div`
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  width: 520px;
  min-width: 320px;
  max-width: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const transformations = [
  {
    command: "Open large doors into a library",
    video: "https://cdn.openai.com/sora-ga/dev/features/hq/feature-remix-door-00-library.mp4.mp4"
  },
  {
    command: "Replace doors with French doors",
    video: "https://cdn.openai.com/sora-ga/dev/features/hq/feature-remix-door-01-glass.mp4.mp4"
  },
  {
    command: "Turn the library into a spaceship",
    video: "https://cdn.openai.com/sora-ga/dev/features/hq/feature-remix-door-02-spaceship.mp4.mp4"
  },
  {
    command: "Remove the spaceship, add a jungle",
    video: "https://cdn.openai.com/sora-ga/dev/features/hq/feature-remix-door-03-jungle.mp4.mp4"
  },
  {
    command: "Replace the jungle with a lunar view",
    video: "https://cdn.openai.com/sora-ga/dev/features/hq/feature-remix-door-04-moon.mp4.mp4"
  }
];

const TransformationDemo: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <Container>
      <CommandList>
        {transformations.map((transform, index) => (
          <Command 
            key={index}
            $active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {transform.command}
          </Command>
        ))}
      </CommandList>
      <VideoContainer>
        <Video 
          key={activeIndex} 
          src={transformations[activeIndex].video}
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </VideoContainer>
    </Container>
  );
};

export default TransformationDemo; 