import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`;

const MainContent = styled.main<{ $isSidebarOpen: boolean }>`
  margin-left: ${props => props.$isSidebarOpen ? '240px' : '0'};
  transition: margin-left 0.3s ease;
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <LayoutContainer>
      <Navbar
        onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <MainContent $isSidebarOpen={isSidebarOpen}>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout; 