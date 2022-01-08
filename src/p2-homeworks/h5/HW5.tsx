import React from 'react'
import Header from './Header'
import Routess from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
            <HashRouter>
                <Header/>
                <Routess/>
            </HashRouter>
    )
}

export default HW5
