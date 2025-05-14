import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.a`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SearchIcon = styled.div`
  cursor: pointer;
  color: #000;
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`; 