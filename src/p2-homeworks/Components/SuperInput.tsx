import React, {ChangeEvent} from 'react';
import s from "./SuperInp.module.css"

type SyperInputType = {
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    classname?: string
}

const SuperInput = (props: SyperInputType) => {
    return (
        <input value={props.value}
               onChange={props.onChange}
               className={props.value.trim() === "" ? s.errorInput : s.input}/>
    );
}

export default SuperInput;