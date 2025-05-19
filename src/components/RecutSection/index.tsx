import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 0px 40px;
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
`;

const RecutIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: #888;
`;

const RecutText = styled.span`
  font-size: 16px;
  color: #888;
  font-weight: 400;
`;

const Description = styled.h2`
  font-size: 30px;
  color: #000;
  max-width: 700px;
  margin: 16px auto 32px auto;
  line-height: 1.4;
  font-weight: 500;
  text-align: center;
`;

const MainVideo = styled.div`
  aspect-ratio: 16/9;
  border-radius: 16px;
  overflow: hidden;
  background: #000;
  width: 80vw;
  max-width: 900px;
  margin: 0 auto 32px auto;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TimelineContainer = styled.div`
  width: 80vw;
  max-width: 900px;
  margin: 0 auto 0 auto;
`;

const TimeMarkers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const TimeMarker = styled.span`
  font-size: 14px;
  color: #aaa;
  width: 12.5%;
  text-align: center;
`;

const TimelineBar = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
  background: linear-gradient(90deg, #1e3c72 0%, #2a5298 100%);
  border-radius: 16px;
  margin-bottom: 24px;
`;

const SelectedFrame = styled.div<{ $index: number }>`
  position: absolute;
  top: 50%;
  left: ${({ $index }) => `calc(${$index} * 12.5% + 0.5% )`};
  transform: translate(-50%, -50%);
  width: 13.5%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    border: 3px solid #fff;
    box-shadow: 0 2px 12px rgba(0,0,0,0.10);
    background: none;
    display: block;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 24px 0 0 0;
`;

const ControlButton = styled.button<{ $active?: boolean }>`
  background: #fff;
  border: 1.5px solid ${props => props.$active ? '#888' : '#e0e0e0'};
  color: ${props => props.$active ? '#111' : '#888'};
  font-size: 15px;
  font-weight: ${props => props.$active ? '600' : '400'};
  cursor: pointer;
  padding: 8px 24px;
  border-radius: 100px;
  transition: all 0.2s;
  outline: none;
`;

const ScissorsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 4L8.12 15.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.47 14.48L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.12 8.12L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);



const timeMarkers = ["00", "01", "02", "03", "04", "05", "06", "07"];

const RecutSection: React.FC = () => {
  const [selectedFrame, setSelectedFrame] = useState(4);
  const [mode, setMode] = useState<'original' | 'extend-before' | 'extend-after'>('original');

  return (
    <Container>
      <HeadingContainer>
        <RecutIcon>
          <ScissorsIcon />
        </RecutIcon>
        <RecutText>Re-cut</RecutText>
      </HeadingContainer>
      <Description>
        Find and isolate the best frames, extending them in either direction to complete a scene
      </Description>
      <MainVideo>
        <Video 
          src="https://cdn.openai.com/sora-ga/dev/features/hq/feature-recut-desktop-light-20.3.mp4.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </MainVideo>
      <TimelineContainer>
       
        <Controls>
          <ControlButton $active={mode === 'original'} onClick={() => setMode('original')}>Original</ControlButton>
          <ControlButton $active={mode === 'extend-before'} onClick={() => setMode('extend-before')}>Extend before</ControlButton>
          <ControlButton $active={mode === 'extend-after'} onClick={() => setMode('extend-after')}>Extend after</ControlButton>
        </Controls>
      </TimelineContainer>
    </Container>
  );
};

export default RecutSection; 