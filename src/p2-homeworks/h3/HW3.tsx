import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import './Greeting.css';
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, {_id: v1(), name: name}]) // need to fix
    }
    const allUsers = users.map(u => (
        <div className={"someClass"} style={{display: "flex", justifyContent: "flex-start"}}>
            <div className={"total"}>id: {u._id} </div>
            <div className={"someClass total"}>name: {u.name}</div>
        </div>))


    return (
        <div>
            <hr/>
            homeworks 3
            <div className={'someClass'}>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>
            {allUsers}


            <hr/>
            <hr/>
        </div>
    )
}

export default HW3
