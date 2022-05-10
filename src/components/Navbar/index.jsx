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
  NavLink,
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
              <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/skills'>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/contact'>Contact</NavLink>
            </NavItem>
          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar