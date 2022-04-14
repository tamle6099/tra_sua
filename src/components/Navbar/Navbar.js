import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom';
import { FaGulp} from "react-icons/fa";

export const NavContainer = styled.div`
    position: block;
    width: 100vw;

    @media only screen and (min-height: 200px) {
        position: fixed;
    }
`

export const Nav = styled.nav `
    background: transparent;
    height:80px;
    display: flex;
    justify-content:center;
    font-weight:700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size:2rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    cursor:pointer;
    @midea screen and(max-width: 400px){
        position: absolute;
        top:10px;
        left:25px;

    }
`;
export const NavIcon = styled.div `
    display:block;
    position:absolute;
    top:-0;
    right:0;
    cursor:pointer;
    color:#fff;
    p {
        transform: translate(-170%, 100%);
        font-weight:bold;
        font-size:2rem;
    }
`

export const Bars = styled(FaGulp) `
    font-size:3rem;
    transform: translate(-40%, 10%)
`