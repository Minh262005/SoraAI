import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${props => (props.$isOpen ? 1 : 0)};
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  transition: all 0.2s ease-in-out;
  z-index: 1100;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  justify-content: space-between;
`;

const Logo = styled.a`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
    border-color: #d0d0d0;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const SearchContainer = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  max-width: 600px;
  margin: 145px 340px auto 0;
  padding: 0 24px;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 48px;
  font-weight: 400;
  color: #666;
  background: transparent;
  padding: 0;
  margin-left: 12px;

  &::placeholder {
    color: #666;
  }
`;

const SearchIcon = styled.div`
  width: 24px;
  height: 24px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  color: #666;
  border-radius: 6px;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`;

const SearchResults = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 145px 340px auto 0;
  width: 100%;
  max-width: 600px;
`;

const SearchPlaceholder = styled.div`
  padding: 32px 16px;
  text-align: center;
  color: #666;
  font-size: 14px;
`;

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <Overlay $isOpen={isOpen}>
      <Header>
        <Logo href="" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png" alt="OpenAI Logo" />
        </Logo>
        <RightSection>
          <CloseButton onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M4 4l12 12M16 4l-12 12" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </CloseButton>
          <LoginButton>
            
            Log in
          </LoginButton>
        </RightSection>
      </Header>
      <SearchContainer $isOpen={isOpen}>
        <SearchWrapper>
          <SearchIcon>
              
          </SearchIcon>
          <SearchInput
            ref={inputRef}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search openai.com"
          />
        </SearchWrapper>
      </SearchContainer>
   
    </Overlay>
  );
};

export default SearchModal;