import React from 'react'
import { Link } from 'react-router-dom'
import {PATH} from "./Routes";
import "./Header.css"
import 'animate.css';

function Header() {
    return (
        <nav className={"animate__animated animate__fadeInLeft"}>
         <Link to={PATH.PRE_JUNIOR} >Pre-Junior</Link>
         <Link to={PATH.JUNIOR} >Junior</Link>
         <Link to={PATH.JUNIOR_PLUS} >Junior-Plus</Link>
        </nav>
    )
}

export default Header
