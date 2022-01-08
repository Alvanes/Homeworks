import React from 'react';
import s from "./SuperBut.module.css"

type SuperButtonPropsType = {
    text?:string,
    onClickCallback?: ()=>void
    className?: string
    disabled?: boolean
}

export const SuperButton = (props:SuperButtonPropsType) => {
        return (
            <button
                className={props.className ? props.className : s.button }
                onClick={props.onClickCallback}
                disabled={props.disabled}>
                {props.text}
            </button>
        );
    }

export default SuperButton;