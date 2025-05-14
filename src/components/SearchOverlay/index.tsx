import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(8px);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Logo = styled.div`
  margin-right: auto;
  
  img {
    height: 50px;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 145px 340px auto 0;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px;
  font-size: 24px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  background: transparent;
  outline: none;
  
  &:focus {
    border-color: #000;
  }
`;

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <Overlay $isOpen={isOpen}>
      <SearchHeader>
        <Logo>
          <img src="#" alt="OpenAI" />
        </Logo>
        <CloseButton onClick={onClose}>
          
        </CloseButton>
      </SearchHeader>
      
      <SearchContainer>
        <SearchInput 
          ref={inputRef}
          type="text" 
          placeholder="Search..."
          autoComplete="off"
        />
      </SearchContainer>
    </Overlay>
  );
};

export default SearchOverlay; 