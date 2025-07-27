import React, { useState, useRef } from "react";
import styled from "styled-components";

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
  background: #0000000a;
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
  background: ${(props) => (props.$active ? "#000" : "#ffffff1f")};
  color: ${(props) => (props.$active ? "#fff" : "#000")};
  font-size: 14px;
  font-weight: 450;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.$active ? "#000" : "#ffffff1f")};
  }
`;

const LoopIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.51146 10.806C3.09981 6.08786 7.12281 2.4375 12 2.4375C14.3605 2.4375 16.5579 3.29386 18.25 4.71499V4C18.25 3.44772 18.6977 3 19.25 3C19.8023 3 20.25 3.44772 20.25 4V7.5C20.25 8.05228 19.8023 8.5 19.25 8.5H15.75C15.1977 8.5 14.75 8.05228 14.75 7.5C14.75 6.94772 15.1977 6.5 15.75 6.5H17.0653C15.7232 5.29726 13.9311 4.5625 12 4.5625C8.20806 4.5625 5.07749 7.40122 4.62013 11.069C4.54752 11.6513 4.01661 12.0644 3.43432 11.9918C2.85203 11.9192 2.43885 11.3883 2.51146 10.806Z"
      fill="currentColor"
    ></path>
    <path
      d="M20.5657 12.0082C21.148 12.0808 21.5612 12.6117 21.4886 13.194C20.9003 17.9121 16.8773 21.5625 12 21.5625C9.63946 21.5625 7.44199 20.7061 5.75 19.285V20C5.75 20.5523 5.30228 21 4.75 21C4.19771 21 3.75 20.5523 3.75 20V16.5C3.75 15.9477 4.19771 15.5 4.75 15.5H8.25C8.80228 15.5 9.25 15.9477 9.25 16.5C9.25 17.0523 8.80228 17.5 8.25 17.5H6.93473C8.27699 18.7028 10.069 19.4375 12 19.4375C15.792 19.4375 18.9226 16.5988 19.3799 12.931C19.4525 12.3487 19.9835 11.9356 20.5657 12.0082Z"
      fill="currentColor"
    ></path>
    <path
      d="M10 9.81878V14.1812C10 14.828 10.7115 15.2186 11.2525 14.8688L14.6267 12.6876C15.1244 12.3658 15.1244 11.6342 14.6267 11.3124L11.2525 9.13117C10.7115 8.78144 10 9.17205 10 9.81878Z"
      fill="currentColor"
    ></path>
  </svg>
);

const LoopSection: React.FC = () => {
  const [selectedEffect, setSelectedEffect] = useState("Staircase");
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSources: { [key: string]: string } = {
    Flower:
      "https://cdn.openai.com/sora-ga/dev/features/hq/feature-loop-flower-double.mp4.mp4",
    Fire: "https://cdn.openai.com/sora-ga/dev/features/hq/feature-loop-fire-double.mp4.mp4",
    Staircase:
      "https://cdn.openai.com/sora-ga/dev/features/hq/feature-loop-stairs-double.mp4.mp4",
    Wave: "https://cdn.openai.com/sora-ga/dev/features/hq/feature-loop-wave-double.mp4.mp4",
  };

  const effects = ["Flower", "Fire", "Staircase", "Wave"];

  const handleEffectChange = (effect: string) => {
    setSelectedEffect(effect);
    if (videoRef.current) {
      videoRef.current.src = videoSources[effect];
      videoRef.current.load();

      const playVideo = () => {
        videoRef.current?.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      };

      videoRef.current.addEventListener("canplay", playVideo, { once: true });
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
          Trim down and create seamless repeating videos with{" "}
          <HighlightText>Loop</HighlightText>
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
