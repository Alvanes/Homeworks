import React from 'react'
import Header from './Header'
import Routess from './Routes'
import {HashRouter} from "react-router-dom";
import s from "./Header.module.css"

function HW5() {
    return (
            <HashRouter>
                <div className={s.block}>
                    <div className={s.header}>
                        <Header/>
                    </div>
                    <div className={s.select}>SELECT LEVEL </div>
                </div>
                <Routess/>
            </HashRouter>
    )
}

export default HW5
