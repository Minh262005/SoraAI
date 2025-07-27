import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
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

const SearchIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <Overlay $isOpen={isOpen}>
      <Header>
        <Logo href="" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png"
            alt="OpenAI Logo"
          />
        </Logo>
        <RightSection>
          <CloseButton onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.8333 13.8333L10.7022 10.7022M10.7022 10.7022C11.607 9.79738 12.1667 8.54738 12.1667 7.16667C12.1667 4.40525 9.9281 2.16667 7.16667 2.16667C4.40525 2.16667 2.16667 4.40525 2.16667 7.16667C2.16667 9.9281 4.40525 12.1667 7.16667 12.1667C8.54738 12.1667 9.79738 11.607 10.7022 10.7022Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </CloseButton>
          <LoginButton>Log in</LoginButton>
        </RightSection>
      </Header>
      <SearchContainer $isOpen={isOpen}>
        <SearchWrapper>
          <SearchIcon />
          <SearchInput
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search openai.com"
          />
        </SearchWrapper>
      </SearchContainer>
    </Overlay>
  );
};

export default SearchModal;
