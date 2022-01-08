import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../Components/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={"aff2"}>
            <div className={"sms"}>{props.affair.name} </div>
        <div className={`prior ${props.affair.priority}`}>{props.affair.priority} </div>
            <div className={"xbut"}>
                <SuperButton onClickCallback={deleteCallback} text={"X"} className={"btn-class"}/>
            </div>
        </div>
    )
}

export default Affair
