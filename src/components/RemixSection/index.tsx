import React from "react";
import styled from "styled-components";

const ExternalLinkIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 13V19A2 2 0 0 1 16 21H5A2 2 0 0 1 3 19V8A2 2 0 0 1 5 6H11M15 3H21V9M10 14L21 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SectionContainer = styled.section`
  padding: 120px 40px;
  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const TopSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const ExploreButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 20px;
  background: #f2f2f2;
  border-radius: 2.5rem;
  color: #000;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.2s;
  gap: 8px;
  line-height: 0.875rem;
  letter-spacing: 0;

  &:hover {
    background: #e5e5e5;
  }
`;

const MainHeading = styled.h2`
  font-size: 41px;
  font-weight: 500;
  line-height: 47px;
  color: #000;
  max-width: 800px;
  margin: 0 auto;
  letter-spacing: 1px;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const SubHeading = styled.div`
      display: flex
;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-bottom: 8px;
    letter-spacing: -.01em;
    font-weight: 400;
    font-size: 1.0625rem;
    line-height: 1.7499375rem;
`;

const RemixIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: #888;
`;

const RemixText = styled.span`
  font-size: 16px;
  color: #888;
  font-weight: 400;
`;

const Description = styled.p`
 font-size: 22px;
    color: #000;
    max-width: 700px;
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
    text-align: center;
    font-size: clamp(1.5rem, calc(1.5rem + .375 * ((100vw - 23.4375rem) / 66.5625)), 1.875rem);
    line-height: clamp(1.98rem, calc(1.98rem + .495 * ((100vw - 23.4375rem) / 66.5625)), 2.475rem);
    margin-top: .75rem;
`;

const RemixSection: React.FC = () => {
  return (
    <SectionContainer id="remix-section">
      <TopSection>
        <ExploreButton href="/explore">
          Explore feed
          <ExternalLinkIcon />
        </ExploreButton>
      </TopSection>

      <MainHeading>
        Bring your imagination to life with text, image, or video
      </MainHeading>

      <BottomSection>
        <SubHeading>
          <RemixIcon>
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
                d="M12 2C6.5 2 2 6.4 2 11.9C2 17.4 6.5 21.8 12 21.8C17.5 21.8 22 17.4 22 11.9C22 6.4 17.5 2 12 2ZM12 4C16.4 4 20 7.6 20 11.9C20 16.2 20 12.1 20 12.3C19.8 14.2 17.8 15.9 15 15.9C12.2 15.9 14.5 15.9 14.3 15.9C15.3 14.9 16 13.5 16 12C16 8.5 12.7 6 9 6C5.3 6 7.1 6.2 6.2 6.5C7.7 5 9.7 4 12 4ZM14 11.9C14 13.1 13.3 14.3 12 15.1C10.8 14.3 10 13.1 10 11.9C10 10.7 10.7 9.5 12 8.7C13.2 9.5 14 10.7 14 11.9ZM12 19.8C7.6 19.8 4 16.2 4 11.9C4 7.6 4 11.7 4 11.5C4.2 9.6 6.2 7.9 9 7.9C11.8 7.9 9.5 7.9 9.7 7.9C8.6 8.9 8 10.3 8 11.8C8 15.3 11.3 17.8 15 17.8C18.7 17.8 17.5 17 17.8 17.3C16.3 18.8 14.3 19.8 12 19.8Z"
                fill="currentColor"
              ></path>
            </svg>
          </RemixIcon>
          <RemixText>Remix</RemixText>
        </SubHeading>

        <Description>
          Replace, remove, or re-imagine elements in your video with Remix
        </Description>
      </BottomSection>
    </SectionContainer>
  );
};

export default RemixSection;
