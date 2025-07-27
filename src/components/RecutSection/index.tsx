import React, { useState } from "react";
import styled from "styled-components";

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
      font-size: 1.0625rem;
    line-height: 1.7499375rem;
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
  width: 80vw;
  margin: 0 auto 32px auto;
`;

const Video = styled.video`
  width: 65rem;
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
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
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
  color: ${(props) => (props.$active ? "#111" : "")};
  font-size: 15px;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  cursor: pointer;
  padding: 8px 24px;
  border-radius: 100px;
  transition: all 0.2s;
  outline: none;
`;

const ScissorsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.50011 3.95703C4.57875 3.95703 3.00488 5.50229 3.00488 7.42846C3.00488 9.35463 4.57875 10.8999 6.50011 10.8999C7.39749 10.8999 8.21907 10.5628 8.8399 10.0073L11.6215 11.8858L8.83995 13.7642C8.21912 13.2087 7.39752 12.8716 6.50011 12.8716C4.57875 12.8716 3.00488 14.4168 3.00488 16.343C3.00488 18.2692 4.57875 19.8144 6.50011 19.8144C8.42147 19.8144 9.99534 18.2692 9.99534 16.343C9.99534 16.0384 9.95597 15.7433 9.88209 15.4623L13.9422 12.7204C13.9522 12.7139 13.9621 12.7072 13.9719 12.7004L20.5567 8.25345C21.0122 7.94583 21.1321 7.3272 20.8245 6.87169C20.5169 6.41618 19.8982 6.29629 19.4427 6.60391L13.3998 10.6849L9.88207 8.30923C9.95597 8.02824 9.99534 7.73311 9.99534 7.42846C9.99534 5.50229 8.42147 3.95703 6.50011 3.95703ZM4.99534 7.42846C4.99534 6.61949 5.66005 5.94749 6.50011 5.94749C7.34017 5.94749 8.00488 6.61949 8.00488 7.42846C8.00488 8.23742 7.34017 8.90943 6.50011 8.90943C5.66005 8.90943 4.99534 8.23742 4.99534 7.42846ZM4.99534 16.343C4.99534 15.534 5.66005 14.862 6.50011 14.862C7.34017 14.862 8.00488 15.534 8.00488 16.343C8.00488 17.152 7.34017 17.824 6.50011 17.824C5.66005 17.824 4.99534 17.152 4.99534 16.343Z"
      fill="currentColor"
    ></path>
    <path
      d="M17.2567 13.2895C16.8012 12.9819 16.1826 13.1018 15.875 13.5573C15.5673 14.0128 15.6872 14.6314 16.1427 14.9391L19.4427 17.1676C19.8982 17.4753 20.5169 17.3554 20.8245 16.8999C21.1321 16.4443 21.0122 15.8257 20.5567 15.5181L17.2567 13.2895Z"
      fill="currentColor"
    ></path>
  </svg>
);

const timeMarkers = ["00", "01", "02", "03", "04", "05", "06", "07"];

const RecutSection: React.FC = () => {
  const [selectedFrame, setSelectedFrame] = useState(4);
  const [mode, setMode] = useState<
    "original" | "extend-before" | "extend-after"
  >("original");

  return (
    <Container>
      <HeadingContainer>
        <RecutIcon>
          <ScissorsIcon />
        </RecutIcon>
        <RecutText>Re-cut</RecutText>
      </HeadingContainer>
      <Description>
        Find and isolate the best frames, extending them in either direction to
        complete a scene
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
          <ControlButton
            $active={mode === "original"}
            onClick={() => setMode("original")}
          >
            Original
          </ControlButton>
          <ControlButton
            $active={mode === "extend-before"}
            onClick={() => setMode("extend-before")}
          >
            Extend before
          </ControlButton>
          <ControlButton
            $active={mode === "extend-after"}
            onClick={() => setMode("extend-after")}
          >
            Extend after
          </ControlButton>
        </Controls>
      </TimelineContainer>
    </Container>
  );
};

export default RecutSection;
