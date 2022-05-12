import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileMenu,
  HamburgerIcon,
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
          <MobileMenu>
            <HamburgerIcon onClick={toggleMenuClicked} whileTap={{rotate: 90}}>
              <IconContext.Provider value={{color: '#fff'}}>
                {isMenuClicked ? <FaTimes /> : <FaBars />}
              </IconContext.Provider>
            </HamburgerIcon>
          </MobileMenu>
          <NavMenu isOpen={isMenuClicked}>
            <NavItem>
              <StyledNavLink to='/'>Home</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to='/Personality'>Personality</StyledNavLink>
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