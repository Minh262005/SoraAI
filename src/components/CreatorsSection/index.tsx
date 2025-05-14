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
  color: #666;
  font-size: 16px;
`;

const CreatorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CreatorCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1;

  &:hover img {
    transform: scale(1.05);
  }
`;

const CreatorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const CreatorName = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const creators = [
  {
    name: 'Minne Atairu & Sora',
    image: 'https://cdn.openai.com/sora-ga/minne-atairu.jpeg?w=640&q=90&fm=webp'
  },
  {
    name: 'Vallée Duhamel & Sora',
    image: 'https://cdn.openai.com/sora-ga/dev/artists/d/valleduhamel.jpeg?w=640&q=90&fm=webp'
  },
  {
    name: 'Lyndon Barrois & Sora',
    image: 'https://cdn.openai.com/sora-ga/dev/artists/d/lyndon-barrois.jpeg?w=640&q=90&fm=webp'
  }
];

const CreatorsSection: React.FC = () => {
  return (
    <Container>
      <>
        <Header>
          <Title>Finding new ways to create</Title>
          <Subtitle>Learn how artists, filmmakers and animators are using Sora</Subtitle>
        </Header>

        <CreatorsGrid>
          {creators.map((creator) => (
            <CreatorCard key={creator.name}>
              <CreatorImage src={creator.image} alt={creator.name} />
              <CreatorName>{creator.name}</CreatorName>
            </CreatorCard>
          ))}
        </CreatorsGrid>
      </>
    </Container>
  );
};

export default CreatorsSection; 