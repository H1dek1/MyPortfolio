import styled from "styled-components"
import { Link, NavLink } from 'react-router-dom'
import { GiSloth } from 'react-icons/gi'
import { Container } from "../../GlobalStyles"

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.Background};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 60px;
`

export const NavLogo = styled(Link)`
  /* color: #fff; */
  color: ${({ theme }) => theme.colors.Headline};
  height: 60px;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`
export const NavIcon = styled(GiSloth)`
  margin-right: 0.5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.Headline};
`
export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 960px){
    color: ${({ theme }) => theme.colors.Headline};
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 60px);
    position: absolute;
    top: 60px;
    left: ${({isOpen}) => (isOpen ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: ${({ theme }) => theme.colors.Background};

  }
`
export const NavItem = styled.li`
  height: 60px;
  @media screen and (max-width: 960px) {
    width: 100%;
    display: block;
    height: 80px;
  }
`
export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.Headline};
  display: flex;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0.5rem 1rem;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.Headline};
    transition: all 0.3s ease;
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.Primary};
  }

  @media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: block;
    border: none;
    /* border: solid white; */

    &:hover {
      border: none;
      background-color: ${({ theme }) => theme.colors.Primary};
      transition: all 0.3s ease;
    }
    &.active {
      background-color: ${({ theme }) => theme.colors.Primary};
    }
  }
  
`