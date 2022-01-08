import React from 'react'
import Header from './Header'
import Routess from './Routes'
import {BrowserRouter} from "react-router-dom";

function HW5() {
    return (
            <BrowserRouter>
                <Header/>
                <Routess/>
            </BrowserRouter>
    )
}

export default HW5
