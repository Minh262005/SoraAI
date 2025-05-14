import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface LoginDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const DropdownContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  width: 150px;
  background: #fff  ;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-8px)'};
  transition: all 0.15s ease;
  z-index: 1000;
`;

const MenuItem = styled.a`
  display: block;
  padding: 8px 12px;
  color: rgba(0,0,0,0.7);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.15s ease;
  border-radius: 4px;
  margin: 2px 4px;

  &:hover {
    background: rgba(0,0,0,0.04);
    color: rgba(0,0,0,0.9);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(0,0,0,0.1);
  margin: 4px 0;
`;

const LoginDropdown: React.FC<LoginDropdownProps> = ({ isOpen, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <DropdownContainer ref={dropdownRef} $isOpen={isOpen}>
      <MenuItem href="/chatgpt">ChatGPT</MenuItem>
      <MenuItem href="/api">API Platform</MenuItem>
      <MenuItem href="/sora">Sora</MenuItem>
      
    </DropdownContainer>
  );
};

export default LoginDropdown; 