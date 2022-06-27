import React from 'react';
import { Nav, NavbarContainer, NavLogo, /*MobileIcon*/ NavMenu, NavItem, NavLinks } from './navStyle';
// import {FaBars} from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';
import {RiServiceLine} from 'react-icons/ri';
import {BiBookAlt} from 'react-icons/bi';
import {MdOutlineContactSupport} from 'react-icons/md';
import {ImHome} from 'react-icons/im';

const index = ({toggle}) => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>&lt;Jimmie&gt;</NavLogo>
      <NavMenu>
        <NavItem>
          <NavLinks to='home'>Home<ImHome /></NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='about'>About<FaUserAlt /></NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='skills'>Skills<RiServiceLine /></NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='portfolio'>Portfolio<BiBookAlt /></NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='contact'>Contact<MdOutlineContactSupport /></NavLinks>
        </NavItem>
      </NavMenu>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default index

// <div className="logo"><span>&lt;</span>jimmie<span>&gt;</span></div>