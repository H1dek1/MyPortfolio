import styled from "styled-components"
import { Link, NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import { GiSloth } from 'react-icons/gi'
import { Container } from "../../GlobalStyles"
import { customMedia } from "../../GlobalStyles"

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.Background};
  height: ${({ theme }) => theme.heights.Header};
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
  height: ${({ theme }) => theme.heights.Header};
`

export const NavLogo = styled(Link)`
  /* color: #fff; */
  color: ${({ theme }) => theme.colors.Headline};
  height: ${({ theme }) => theme.heights.Header};
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
export const MobileMenu = styled.div`
  display: none;

  ${customMedia.lessThan('medium')`
    display: flex;
    align-items: center;
    // border: solid yellow;
    line-height: 0;
  `}
`
export const HamburgerIcon = styled(motion.div)`

  ${customMedia.lessThan('medium')`
    display: block;
    // border: solid yellow;
  `}

  /* @media screen and (max-width: 960px){
    color: ${({ theme }) => theme.colors.Headline};
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  } */
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  ${customMedia.lessThan('medium')`
    flex-direction: column;
    width: 100%;
    height: calc(100vh - ${({ theme }) => theme.heights.Header});
    position: absolute;
    top: 60px;
    left: ${({isOpen}) => (isOpen ? 0 : '-100%')};
    opacity: ${({isOpen}) => (isOpen ? 1 : 0.5)};
    transition: all 0.5s ease;
    background-color: ${({ theme }) => theme.colors.Background};
  `}

  /* @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 60px);
    position: absolute;
    top: 60px;
    left: ${({isOpen}) => (isOpen ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: ${({ theme }) => theme.colors.Background};

  } */
`
export const NavItem = styled.li`
  height: ${({ theme }) => theme.heights.Header};

  ${customMedia.lessThan('medium')`
  `}
  /* @media screen and (max-width: 960px) {
    width: 100%;
    display: block;
    height: 80px;
  } */
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

  /* @media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: block;
    border: none;

    &:hover {
      border: none;
      background-color: ${({ theme }) => theme.colors.Primary};
      transition: all 0.3s ease;
    }
    &.active {
      background-color: ${({ theme }) => theme.colors.Primary};
    }
  } */
  
`