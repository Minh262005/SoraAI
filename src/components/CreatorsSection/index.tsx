import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding: 80px 40px;
  background: #fff;
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 48px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 16px;
`;

const CreatorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CreatorCard = styled.figure`
  margin: 0;
  text-align: left;
`;

const CreatorImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  display: block;
`;

const CreatorName = styled.figcaption`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const creators = [
  {
    name: "Minne Atairu & Sora",
    image:
      "https://cdn.openai.com/sora-ga/minne-atairu.jpeg?w=640&q=90&fm=webp",
  },
  {
    name: "Vallée Duhamel & Sora",
    image:
      "https://cdn.openai.com/sora-ga/dev/artists/d/valleduhamel.jpeg?w=640&q=90&fm=webp",
  },
  {
    name: "Lyndon Barrois & Sora",
    image:
      "https://cdn.openai.com/sora-ga/dev/artists/d/lyndon-barrois.jpeg?w=640&q=90&fm=webp",
  },
];

const CreatorsSection: React.FC = () => {
  return (
    <Container aria-labelledby="creators-title">
      <Header>
        <Title id="creators-title">Finding new ways to create</Title>
        <Subtitle>
          Learn how artists, filmmakers and animators are using Sora
        </Subtitle>
      </Header>

      <CreatorsGrid>
        {creators.map((creator) => (
          <CreatorCard key={creator.name}>
            <CreatorImage src={creator.image} alt={creator.name} />
            <CreatorName>{creator.name}</CreatorName>
          </CreatorCard>
        ))}
      </CreatorsGrid>
    </Container>
  );
};

export default CreatorsSection;
