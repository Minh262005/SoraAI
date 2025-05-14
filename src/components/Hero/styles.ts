import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  margin-left: 250px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-left: 200px;
  }

  @media (max-width: 576px) {
    margin-left: 0;
  }
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 1;
  font-weight: 600;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 576px) {
    font-size: 3rem;
  }
`; 