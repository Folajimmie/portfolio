import styled from "styled-components";
import {Link as LinkS} from "react-scroll";

export const Nav = styled.div`
    top: 3rem;
    right: .5rem;
    display: block;
    max-width: max-content;
    z-index: 2;
    position: fixed;

    @media screen and (max-width:780px){
        position: fixed;
        z-index: 2;
        top: 1rem;
        right: 0.6rem;
    }
    @media screen and (max-width:500px){
        position: fixed;
        z-index: 2;
        top: 1rem;
        right: 0rem;
    }
`
export const NavWrapper = styled.div`
    display: block;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    backdrop-filter: blur(15px);
    /* z-index: 1; */
`
export const NavMenu = styled.ul`
    display: none;

    @media screen and (max-width:780px){
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 0.7rem 1.2rem;
    align-items: center;
    text-align: center;
    }
    @media screen and (max-width:480px){
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 0.7rem 1.2rem;
    align-items: center;
    text-align: center;
    }
    
`
export const NavItem = styled.li`
    gap: 20px;
    
`
export const NavLinks = styled(LinkS)`
    display: flex;
    cursor: pointer;
    align-items: center;
    color: var(--color-dark);
    :hover{
        background: rgba(0, 0, 0, 0.3);
        color: var(--color-primary);
        transform: scale(1.2);
    }
`