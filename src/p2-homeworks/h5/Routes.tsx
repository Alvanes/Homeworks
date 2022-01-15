import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Route, Routes, Navigate} from "react-router-dom";
import JuniorPlus from "./pages/JuniorPlus";
import Junior from "./pages/Junior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function Routess() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to={PATH.PRE_JUNIOR} replace/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Error404/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<Error404/>}/>

                <Route path={"*"} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Routess
