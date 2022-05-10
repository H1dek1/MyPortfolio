import styled from "styled-components"
import { Link, NavLink } from 'react-router-dom'
import { FaMagento } from 'react-icons/fa'
import { GiSloth } from 'react-icons/gi'
import { Container } from "../../GlobalStyles"



export const Nav = styled.nav`
  background: #101522;
  height: 80px;
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
  height: 80px;
`

export const NavLogo = styled(Link)`
  /* color: #fff; */
  color: #ACB6E5;
  background: -webkit-linear-gradient(0deg, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`
export const NavIcon = styled(GiSloth)`
  margin-right: 0.5rem;
  font-size: 4rem;
`
export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 960px){
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
    height: calc(100vh - 80px);
    position: absolute;
    top: 80px;
    left: ${({isOpen}) => (isOpen ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;

  }
`
export const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`
export const StyledNavLink = styled(NavLink)`
  border-bottom: 4px solid transparent;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0.5rem 1rem;

  &:hover {
    border-bottom: 4px solid #4b59f7;
    transition: all 0.3s ease;
  }
  &.active {
    background-color: #4b59f7;
  }

  @media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    border: none;

    &:hover {
      border: none;
      background-color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
  
`