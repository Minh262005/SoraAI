import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
  border-bottom: 1px solid #eaeaea;
  position: relative;
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #000;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;

  &:hover {
    background: #f5f5f5;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #000;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;

  &:hover {
    background: #f5f5f5;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #000;
  text-align: center;
`;

const VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Prompt = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
  justify-content: center;
`;

interface VideoDetailProps {
  videoUrl: string;
  title: string;
  prompt?: string;
  onClose: () => void;
}

const VideoDetail: React.FC<VideoDetailProps> = ({ videoUrl, title, prompt, onClose }) => {
  return (
    <Container>
      <TopBar>
        <ShareButton>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          Share video
        </ShareButton>
        <CloseButton onClick={onClose}>×</CloseButton>
      </TopBar>

      <ContentContainer>
        <Title>{title}</Title>
        <VideoContainer>
          <VideoPlayer
            src={videoUrl}
            autoPlay 
              loop 
              muted 
          />
        </VideoContainer>
        {prompt && (
          <Prompt>
            <span>Prompt:</span>
            <span>{prompt}</span>
          </Prompt>
        )}
      </ContentContainer>
    </Container>
  );
};

export default VideoDetail; 