import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import "./Header.module.css"
import 'animate.css';

function Header() {
    return (
        <nav className={"animate__animated animate__fadeInLeft"}>
         <NavLink to={PATH.PRE_JUNIOR} >Pre-Junior</NavLink>
         <NavLink to={PATH.JUNIOR} >Junior</NavLink>
         <NavLink to={PATH.JUNIOR_PLUS} >Junior-Plus</NavLink>
        </nav>
    )
}

export default Header
