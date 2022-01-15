import React from 'react'
import s from "./Error.module.css"
import 'animate.css';
function Error404() {
    return (
        <div className={s.center}>
            <h1 className={"animate__animated animate__bounce animate__infinite"}>УПС, КАЖЕТСЯ ЧТО-ТО ПОШЛО НЕ ТАК</h1>
            <h3 className={"animate__animated animate__bounce animate__infinite"}>ПОПРОБУЙ ТКНУТЬ НА ПАРУ КНОПОЧЕК ВЫШЕ :)</h3>
            <img width={"700px"} src="https://cdn.lyft.com/static/redirects/assets/car_tree.1.gif"
                 alt="Lost car driving in circles around a tree" data-reactid="53"/>
        </div>
    )
}

export default Error404
