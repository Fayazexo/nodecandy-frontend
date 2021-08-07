import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Logo1 from '../../images/logo1.svg';
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavLogo to='/' onClick={toggleHome}>
              <img src={Logo1} alt="" />
            </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to='getstarted'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Get Started</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to='portfolio'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Portfolio</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to='whyus'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Why Us?</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='collaborate'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Collaborate</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar