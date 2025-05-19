import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  opacity: 0.7;
`;

const TitleText = styled.h3`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  color: #666;
`;

const MainTitle = styled.h2`
  font-size: 30px;
  color: #000;
  font-weight: 450;
  margin: 0;
  line-height: 1.2;
`;

const HighlightText = styled.span`
  color: #000;
  font-weight: 500;
`;

const PreviewSection = styled.div`
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  background: #0000000A;
  margin-bottom: 24px;
`;

const PreviewVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const EffectButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const EffectButton = styled.button<{ $active?: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${props => props.$active ? '#000' : '#eee'};
  background: ${props => props.$active ? '#000' : '#fff'};
  color: ${props => props.$active ? '#fff' : '#000'};
  font-size: 14px;
  font-weight: 450;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.$active ? '#000' : '#f5f5f5'};
  }
`;

const LoopIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1L21 5M21 5L17 9M21 5H7C4.79086 5 3 6.79086 3 9V10" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 23L3 19M3 19L7 15M3 19H17C19.2091 19 21 17.2091 21 15V14" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const LoopSection: React.FC = () => {
  const [selectedEffect, setSelectedEffect] = useState('Staircase');
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSources: { [key: string]: string } = {
    Flower: 'https://cdn.openai.com/sora-ga/dev/features/hq/feature-loop-flower-double.mp4.mp4',
    Fire: 'https://cdn.openai.com/sora-ga/dev/features/hq/feature-loop-fire-double.mp4.mp4',
    Staircase: 'https://cdn.openai.com/sora-ga/dev/features/hq/feature-loop-stairs-double.mp4.mp4',
    Wave: 'https://cdn.openai.com/sora-ga/dev/features/hq/feature-loop-wave-double.mp4.mp4',
  };

  const effects = ['Flower', 'Fire', 'Staircase', 'Wave'];

  const handleEffectChange = (effect: string) => {
    setSelectedEffect(effect);
    if (videoRef.current) {
      videoRef.current.src = videoSources[effect];
      videoRef.current.load();

      const playVideo = () => {
        videoRef.current?.play().catch((error) => {
          console.error('Error playing video:', error);
        });
      };

      videoRef.current.addEventListener('canplay', playVideo, { once: true });
    }
  };

  return (
    <Container>
      <SectionTitle>
        <TitleRow>
          <IconWrapper>
            <LoopIcon />
          </IconWrapper>
          <TitleText>Loop</TitleText>
        </TitleRow>

        <MainTitle>
          Trim down and create seamless repeating videos with <HighlightText>Loop</HighlightText>
        </MainTitle>
      </SectionTitle>

      <PreviewSection>
        <PreviewVideo
          ref={videoRef}
          src={videoSources[selectedEffect]}
          autoPlay
          loop
          muted
          playsInline
        />
      </PreviewSection>

      <EffectButtons>
        {effects.map((effect) => (
          <EffectButton
            key={effect}
            $active={selectedEffect === effect}
            onClick={() => handleEffectChange(effect)}
          >
            {effect}
          </EffectButton>
        ))}
      </EffectButtons>
    </Container>
  );
};

export default LoopSection;
