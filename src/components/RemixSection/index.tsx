import React from 'react';
import styled from 'styled-components';

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
  border-radius: 100px;
  color: #000;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: #e5e5e5;
  }

  &::after {
    content: "↗";
    margin-left: 8px;
  }
`;

const MainHeading = styled.h2`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.1;
  color: #000;
  max-width: 900px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 8px;
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
  max-width: 900px;
  margin: 0;
  line-height: 1.4;
  font-weight: 500;
  text-align: center;
`;

const RemixSection: React.FC = () => {
  return (
    <SectionContainer id="remix-section">
      <TopSection>
        <ExploreButton href="/explore">
          Explore feed
        </ExploreButton>
      </TopSection>
      
      <MainHeading>
        Bring your imagination to life with text, image, or video
      </MainHeading>

      <BottomSection>
        <SubHeading>
          <RemixIcon>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7" stroke="#888" strokeWidth="1.5" fill="none" />
              <path d="M8 4.5c-2.2 0-3.5 1.6-3.5 3.5s1.3 3.5 3.5 3.5c1.2 0 2.5-0.7 2.5-2 0-1.2-1.2-1.5-2-1.5-0.7 0-1.5 0.3-1.5 1 0 0.5 0.4 1 1 1" stroke="#888" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
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