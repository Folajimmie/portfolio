import styled from "styled-components";
import { Link as LinkR} from "react-router-dom";
import { Link as LinkS} from "react-scroll";

export const Nav = styled.nav`
    background: url(../../assets/images/bg1.jpg);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: relative;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 1024px){
        transition: all 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    z-index: 1;
    width: 100%;
    padding: 0 14px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: var(--color-dark);
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 9px;
    display: flex;
    align-items: center;
    margin-left: 1px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 780px){
        margin-top: 9px;
    }
    @media screen and (max-width: 500px){
        margin-top: 9px;
    }
`;

// export const MobileIcon = styled.div`
//     display: none;

//     @media screen and (max-width: 780px){
//         display: block;
//         position: absolute;
//         top: -9px;
//         right: 1rem;
//         transform: translate(-100%, 60%);
//         font-size: 1.5rem;
//         cursor: pointer;
//     }
//     @media screen and (max-width: 480px){
//         display: block;
//         position: absolute;
//         top: -9px;
//         right: 1rem;
//         transform: translate(-100%, 60%);
//         font-size: 1.5rem;
//         cursor: pointer;
//     }
// `;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 780px){
        display: none;
    }
    @media screen and (max-width: 500px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 50px;
`;

export const NavLinks = styled(LinkS)`
    color: var(--color-dark);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    :hover{
        color: var(--color-primary);
    }
    &.active{
        border-bottom: 3px solid var(--color-primary);
    }
`;
