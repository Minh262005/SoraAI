import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 80px 40px;
  background: #fff;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 450;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 16px;
`;

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PlanCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  background: #000;
`;

const PlanVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlanContent = styled.div`
  padding: 24px;
`;

const PlanName = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const PlanDescription = styled.p`
  color: #666;
  margin-bottom: 24px;
  font-size: 14px;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: 24px;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 14px;
`;

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Price = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  
  span {
    font-size: 14px;
    color: #666;
    font-weight: normal;
  }
`;

const GetButton = styled.a`
  display: inline-block;
  padding: 8px 24px;
  background: #000;
  color: #fff;
  border-radius: 24px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const LearnMoreLink = styled.a`
  color: #000;
  text-decoration: underline;
  font-size: 14px;
  display: block;
  margin-top: 12px;
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 48px;

  a {
    color: #000;
    text-decoration: underline;
    font-size: 14px;
  }
`;

const PricingSection: React.FC = () => {
  return (
    <Container id="pricing-section">
      <Header>
        <Title>Pricing</Title>
        <Subtitle>Sora is included in these ChatGPT plans</Subtitle>
      </Header>

      <PlansContainer>
        <PlanCard>
          <VideoContainer>
            <PlanVideo
              src="https://cdn.openai.com/sora-ga/dev/features/md/-c0df-4d0e-a1a4-9ce71b9ab562.mp4.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </VideoContainer>
          <PlanContent>
            <PlanName>ChatGPT Plus</PlanName>
            <PlanDescription>
              Plus includes the ability to explore your creativity through image and video
            </PlanDescription>
            <FeatureList>
              <Feature>
                <CheckIcon /> Up to 720p resolution and 10s duration videos
              </Feature>
              <Feature>
                <LearnMoreLink href="#">Learn more about everything you get with ChatGPT Plus</LearnMoreLink>
              </Feature>
            </FeatureList>
            <Price>
              $20 <span>/month</span>
            </Price>
            <GetButton href="#">Get Plus</GetButton>
          </PlanContent>
        </PlanCard>

        <PlanCard>
          <VideoContainer>
            <PlanVideo
              src="https://cdn.openai.com/sora-ga/dev/features/md/-63d4-4dda-8d3f-e6e8f49946ec.mp4.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </VideoContainer>
          <PlanContent>
            <PlanName>ChatGPT Pro</PlanName>
            <PlanDescription>
              Pro includes faster generations and the highest resolution for high volume workflows
            </PlanDescription>
            <FeatureList>
              <Feature>
                <CheckIcon /> Faster generations
              </Feature>
              <Feature>
                <CheckIcon /> Up to 1080p resolution and 20s duration videos
              </Feature>
              <Feature>
                <CheckIcon /> Up to 5 concurrent generations
              </Feature>
              <Feature>
                <CheckIcon /> Download videos without watermark
              </Feature>
              <Feature>
                <LearnMoreLink href="#">Learn more about everything you get with ChatGPT Pro</LearnMoreLink>
              </Feature>
            </FeatureList>
            <Price>
              $200 <span>/month</span>
            </Price>
            <GetButton href="#">Get Pro</GetButton>
          </PlanContent>
        </PlanCard>
      </PlansContainer>

      <Footer>
        <a href="#">Billing & Plan FAQ</a>
      </Footer>
    </Container>
  );
};

export default PricingSection; 