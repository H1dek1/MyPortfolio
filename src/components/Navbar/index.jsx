import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamburgerMenu,
  NavMenu,
  NavItem,
  StyledNavLink,
} from './elements'

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const toggleMenuClicked = () => setIsMenuClicked(!isMenuClicked);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            Portfolio
          </NavLogo>
          <HamburgerMenu onClick={toggleMenuClicked}>
            <IconContext.Provider value={{color: '#fff'}}>
              {isMenuClicked ? <FaTimes /> : <FaBars />}
            </IconContext.Provider>
          </HamburgerMenu>
          <NavMenu isOpen={isMenuClicked}>
            <NavItem>
              <StyledNavLink to='/'>Home</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to='/about'>About</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to='/skills'>Skills</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to='/contact'>Contact</StyledNavLink>
            </NavItem>
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar