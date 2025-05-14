import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  padding: 6rem 1.5rem 2rem;
  background-color: #f7f7f7;
  border-right: 1px solid #eaeaea;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const HomeLink = styled.a`
  display: block;
  text-decoration: none;
  color: #666;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 1rem;
`;

interface MenuLinkProps {
  $active?: boolean;
}

export const MenuLink = styled.a<MenuLinkProps>`
  text-decoration: none;
  color: ${props => props.$active ? '#000' : '#666'};
  font-size: 0.95rem;
  font-weight: ${props => props.$active ? '600' : '400'};
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`; 