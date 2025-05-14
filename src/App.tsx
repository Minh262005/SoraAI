import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import SoraLogo from './components/SoraLogo';
import PresetSection from './components/PresetSection';
import PricingSection from './components/PricingSection';
import RecutSection from './components/RecutSection';
import RemixSection from './components/RemixSection';
import StoryboardSection from './components/StoryboardSection';
import TransformationDemo from './components/TransformationDemo';
import BlendSection from './components/BlendSection';
import LoopSection from './components/LoopSection';
import ImageGrid from './components/ImageGrid';
import ContributorsSection from './components/ContributorsSection';
import CreatorsSection from './components/CreatorsSection';
import FadeSection from './components/FadeSection';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    line-height: 1.6;
    color: #000;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  html {
    scroll-behavior: smooth;
    background-color: #fff;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`;

const MainContent = styled.main<{ $isSidebarOpen: boolean }>`
  margin-left: ${props => props.$isSidebarOpen ? '240px' : '0'};
  transition: margin-left 0.3s ease;
`;

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar
        onSidebarToggle={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      <MainContent $isSidebarOpen={isSidebarOpen}>
        <Hero />
        <ImageGrid />
        <RemixSection />
        <TransformationDemo />
        <RecutSection />
        <StoryboardSection />
        <LoopSection />
        <BlendSection />
        <PresetSection />
        <PricingSection />
        <CreatorsSection />
        <SoraLogo />

        <ContributorsSection />
        <GetStarted />
        <Footer />

      </MainContent>
    </AppContainer>
  );
};

export default App; 