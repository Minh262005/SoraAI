import React, { useState } from 'react';
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
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const PresetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h16v12H4V6zm0 0l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconLabel = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  font-weight: 450;
  color: rgb(0, 0, 0);
  margin-bottom: 60px;
`;

const PreviewContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  margin-bottom: 32px;
`;

const PreviewVideo = styled.video`
  width: 100%;
  border-radius: 16px;
  aspect-ratio: 16/9;
  object-fit: cover;
  background: #000;
`;

const PresetInfo = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  background: rgba(255, 255, 255, 0.9);
  padding: 16px 20px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  max-width: 360px;
`;

const PresetName = styled.h3`
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 600;
  color: #000;
`;

const PresetDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.7);
`;

const PresetTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const PresetTab = styled.button<{ $active?: boolean }>`
  padding: 8px 0;
  border: none;
  background: none;
  color: ${props => props.$active ? '#000' : 'rgba(0, 0, 0, 0.5)'};
  font-size: 14px;
  cursor: pointer;
  font-weight: ${props => props.$active ? '600' : '400'};
  transition: all 0.2s;

  &:hover {
    color: #000;
  }
`;

const presets = [
  {
    name: 'Cardboard & papercraft',
    video: 'https://cdn.openai.com/sora-ga/dev/features/hq/style-presets-01-cardboard-papercraft.mp4.mp4',
    description: 'Earthy tones with muted pastels and pops of color. Soft, diffused lighting enhances handcrafted textures. Everything—characters, objects, and scenery—is transformed into cardboard and paper, complete with visible creases and folds.',
    category: 'Cardboard & papercraft'
  },
  {
    name: 'Archival',
    video: 'https://cdn.openai.com/sora-ga/dev/features/hq/style-presets-02-archival.mp4.mp4',
    description: 'Shot on 100ft film, the image quality is grainy and high contrast, with shallow depth of field and cinematic look, epic and dramatic shot, very nostalgic.',
    category: 'Archival'
  },
  {
    name: 'Film noir',
    video: 'https://cdn.openai.com/sora-ga/dev/features/hq/style-presets-03-film-noir.mp4.mp4',
    description: 'Shot in high-contrast black and white with deep shadows and selective highlights. Features low-key chiaroscuro lighting, hard shadows, and venetian blind effects. Moody, mysterious, and suspenseful, with a vintage cinematic vibe.',
    category: 'Film noir'
  },
  {
    name: 'Original',
    video: 'https://cdn.openai.com/sora-ga/dev/features/hq/style-presets-00-og.mp4.mp4',
    description: '',
    category: 'Original'
  }
];

const PresetSection: React.FC = () => {
  const [activePreset, setActivePreset] = useState('Archival');
  const currentPreset = presets.find(p => p.name === activePreset) || presets[0];

  return (
    <Container>
      <HeaderContainer>
        <IconLabel>
          <PresetIcon />
          Style presets
        </IconLabel>
      </HeaderContainer>
      
      <Title>
        Create and share styles that capture your
        <br />
        imagination with Presets
      </Title>

      <PreviewContainer>
        <PreviewVideo
          src={currentPreset.video}
          autoPlay
          loop
          muted
          playsInline
        />
        {currentPreset.description && (
          <PresetInfo>
            <PresetName>{currentPreset.name}</PresetName>
            <PresetDescription>{currentPreset.description}</PresetDescription>
          </PresetInfo>
        )}
      </PreviewContainer>

      <PresetTabs>
        {presets.map(preset => (
          <PresetTab
            key={preset.name}
            $active={activePreset === preset.name}
            onClick={() => setActivePreset(preset.name)}
          >
            {preset.name}
          </PresetTab>
        ))}
      </PresetTabs>
    </Container>
  );
};

export default PresetSection; 