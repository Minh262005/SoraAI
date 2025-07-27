import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 257px;
  background: #fff;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
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
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  transition: background-color 0.2s, color 0.2s;

  

  &.active {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    background: rgba(0, 0, 0, 0.04);
  }
`;

const HomeLink = styled(NavItem)`
  color: rgba(0, 0, 0, 0.4);
  padding-bottom: 0.75rem;
  gap: 8px;
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
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
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
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
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
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1000;
`;


export const SidebarIcon = () => (
  <svg
    width="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 12.3393C1.58579 12.3393 1.25 12.0035 1.25 11.5893L1.25 6.48933C1.25 4.55633 2.817 2.98933 4.75 2.98933L6.75 2.98933V1.97671C6.75 1.53439 7.2821 1.30991 7.59892 1.61858L9.38241 3.3562C9.58386 3.55246 9.58386 3.8762 9.38242 4.07246L7.59892 5.81008C7.2821 6.11875 6.75 5.89427 6.75 5.45196V4.48933L4.75 4.48933C3.64543 4.48933 2.75 5.38476 2.75 6.48933L2.75 11.5893C2.75 12.0035 2.41421 12.3393 2 12.3393ZM14 3.66067C14.4142 3.66067 14.75 3.99646 14.75 4.41067V9.51066C14.75 11.4437 13.183 13.0107 11.25 13.0107H9.25001V14.0233C9.25001 14.4656 8.7179 14.6901 8.40109 14.3814L6.61759 12.6438C6.41615 12.4475 6.41615 12.1238 6.61759 11.9275L8.40109 10.1899C8.7179 9.88124 9.25001 10.1057 9.25001 10.548V11.5107H11.25C12.3546 11.5107 13.25 10.6152 13.25 9.51066V4.41067C13.25 3.99646 13.5858 3.66067 14 3.66067Z"
      fill="currentColor"
    ></path>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 12H5M12 19L5 12L12 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width="9"
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: "translate(1px, -2px)" }}
  >
    <path
      d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
      stroke="currentColor"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
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
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen, handleClickOutside]);


  const handleHeaderClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(false);
  };

  return (
    <>
      <SidebarContainer $isOpen={isOpen}>
        {isOpen && (
          <IconWrapper
            onClick={onClose}
            style={{ position: "absolute", top: 618, left: 16 }}
            aria-label="Close sidebar"
          >
            <SidebarIcon />
          </IconWrapper>
        )}
        <NavList>
          <HomeLink href="/">
            <ArrowLeftIcon />
            Home
          </HomeLink>
          <NavItem href="/overview" className="active">
            Sora Overview
          </NavItem>
          <NavItem href="#remix-section">Features</NavItem>
          <NavItem href="#pricing-section">Pricing</NavItem>
          <NavItem href="/help">
            Help center
            <ExternalLinkIcon />
          </NavItem>
          <NavItem href="/login">
            Sora log in
            <ExternalLinkIcon />
          </NavItem>
        </NavList>
        <DropdownMenu
          $isOpen={isDropdownOpen}
          onClick={(e) => e.stopPropagation()}
        >
          <DropdownHeader onClick={handleHeaderClick}>Switch to</DropdownHeader>
          <DropdownItem href="/chatgpt">ChatGPT</DropdownItem>
          <DropdownItem href="/sora">Sora</DropdownItem>
          <DropdownItem href="/api">API Platform</DropdownItem>
        </DropdownMenu>
      </SidebarContainer>
      <SidebarOverlay $isOpen={isOpen} onClick={onClose} />
      <DropdownOverlay $isOpen={isDropdownOpen} onClick={handleClickOutside} />
    </>
  );
};

export default Sidebar;
