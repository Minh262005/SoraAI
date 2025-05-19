import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 280px;
  background: #fff;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 90;
  overflow-y: auto;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 80px;
  flex: 1;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.9);
  }

  &.active {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    background: rgba(0, 0, 0, 0.04);
  }
`;

const HomeLink = styled(NavItem)`
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 24px;
  gap: 8px;

  &::before {
    content: '←';
    font-size: 14px;
  }
`;

const IconWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1002;

  &:hover {
    opacity: 0.6;
  }
`;

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  margin-bottom: 8px;
  width: 200px;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 1001;
`;

const DropdownHeader = styled.button`
  padding: 8px 16px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  font-weight: 500;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

const DropdownItem = styled.a`
  display: block;
  padding: 8px 16px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const SidebarOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 80;

  @media (min-width: 769px) {
    display: none;
  }
`;

const DropdownOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
`;

const LoopIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1L21 5M21 5L17 9M21 5H7C4.79086 5 3 6.79086 3 9V10" stroke="currentColor" strokeWidth="2" />
    <path d="M7 23L3 19M3 19L7 15M3 19H17C19.2091 19 21 17.2091 21 15V14" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClickOutside = useCallback(() => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen, handleClickOutside]);

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const handleHeaderClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setIsDropdownOpen(false); 
  };

  return (
    <>
      <SidebarContainer $isOpen={isOpen}>
        <NavList>
          <HomeLink href="/">Home</HomeLink>
          <NavItem href="/overview" className="active">
            Sora Overview
          </NavItem>
          <NavItem href="#remix-section">Features</NavItem>
          <NavItem href="#pricing-section">Pricing</NavItem>
          <NavItem href="/help">Help center ↗</NavItem>
          <NavItem href="/login">Sora log in ↗</NavItem>
        </NavList>
        <IconWrapper onClick={handleIconClick}>
          <LoopIcon />
          <DropdownMenu $isOpen={isDropdownOpen} onClick={(e) => e.stopPropagation()}>
            <DropdownHeader onClick={handleHeaderClick}>Switch to</DropdownHeader>
            <DropdownItem href="/chatgpt">ChatGPT</DropdownItem>
            <DropdownItem href="/sora">Sora</DropdownItem>
            <DropdownItem href="/api">API Platform</DropdownItem>
          </DropdownMenu>
        </IconWrapper>
      </SidebarContainer>
      <SidebarOverlay $isOpen={isOpen} onClick={onClose} />
      <DropdownOverlay $isOpen={isDropdownOpen} onClick={handleClickOutside} />
    </>
  );
};

export default Sidebar;