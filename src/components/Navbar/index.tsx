import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginDropdown from '../LoginDropdown';
import SearchModal from '../SearchModal';

interface NavbarProps {
  onSidebarToggle: () => void;
  isSidebarOpen: boolean;
}

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  padding: 0 24px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  color: #000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const NavbarLeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NavbarRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const NavbarLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;
`;

const LogoImage = styled.img`
  width: 32px; 
  height: 32px;
  object-fit: contain;
  transition: opacity 0.3s ease;
`;

const NavbarIconButton = styled.button<{ $active?: boolean }>`
  width: 15px;
  height:15px;
  margin-left: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.$active ? '#666' : '#666')};
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    color: #000;
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

const NavbarLoginSection = styled.div`
  position: relative;
`;

const NavbarLoginButton = styled.button<{ $active?: boolean }>`
  padding: 8px 12px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 16px;
  transition: all 0.15s ease;
  background: #0000000A;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const BlendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor">
    <path
      d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle, isSidebarOpen }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavbarContainer>
        <NavbarLeftSection>
          <NavbarLogo href="/" aria-label="Homepage">
            {showLogo ? (
              <LogoImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdM9MEQ0ExL1PmInT3U5I8v63YXBEdoIT0Q&s" alt="OpenAI Logo" />
            ) : (
              'OpenAI'
            )}
          </NavbarLogo>
          <NavbarIconButton
            onClick={onSidebarToggle}
            $active={isSidebarOpen}
            aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            <BlendIcon />
          </NavbarIconButton>
        </NavbarLeftSection>

        <NavbarRightSection>
          <NavbarIconButton onClick={() => setIsSearchOpen(true)} aria-label="Search">
            <SearchIcon />
          </NavbarIconButton>
          <NavbarLoginSection>
            <NavbarLoginButton
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              $active={isLoginOpen}
            >
              Log in
            </NavbarLoginButton>
            <LoginDropdown isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
          </NavbarLoginSection>
        </NavbarRightSection>
      </NavbarContainer>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;