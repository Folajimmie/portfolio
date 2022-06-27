import React from 'react'
import { Nav, NavMenu, NavItem, NavWrapper, NavLinks } from './Sidebar.style'
import {ImHome} from 'react-icons/im';
import {FaUserAlt} from 'react-icons/fa';
import {RiServiceLine} from 'react-icons/ri';
import {BiBookAlt} from 'react-icons/bi';
import {MdOutlineContactSupport} from 'react-icons/md';

const index = () => {
  return (
    <Nav>
        <NavWrapper>
            <NavMenu>
                <NavItem>
                <NavLinks to='home' className='active'><ImHome /></NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to='about'><FaUserAlt /></NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to='skills'><RiServiceLine /></NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to='portfolio'><BiBookAlt /></NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to='contact'><MdOutlineContactSupport /></NavLinks>
                </NavItem> 
            </NavMenu>
        </NavWrapper>
    </Nav>
  )
}

export default index