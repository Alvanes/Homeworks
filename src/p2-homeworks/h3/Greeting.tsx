import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import SuperButton from "../Components/SuperButton";
import SuperInput from "../Components/SuperInput";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    // const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <SuperInput value={name} onChange={setNameCallback}/>
            <SuperButton text={"add"} onClickCallback={addUser} />
            <span className={"total"}> {totalUsers}</span>
            <div className={"error"}>{error}</div>
        </div>
    )
}

export default Greeting
