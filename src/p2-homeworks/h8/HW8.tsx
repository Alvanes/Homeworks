import React, {useState} from 'react'
import {homeWorkCheckAC, homeWorkReducer, homeWorkSortAC} from './bll/homeWorkReducer'
import "./HW8.css"
import SuperButton from "../Components/SuperButton";

export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            <div className="containerHW8">
                <div className="names">{p.name}</div>
                <div className="ages">{p.age}</div>
            </div>

        </div>
    ))

    const sort = (sorting: "up" | "down") => setPeople(homeWorkReducer(initialPeople, homeWorkSortAC(sorting)))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, homeWorkCheckAC(18)))

    return (
        <div>
            <hr/>
            homeworks 8

            {finalPeople}

            <div>
                <SuperButton onClickCallback={() => sort("up")} text={"sort up"}/>
                <SuperButton onClickCallback={() => sort("down")} text={"sort down"}/>
                <SuperButton onClickCallback={sortAge} text={"sort 18"}/>
            </div>
            <hr/>
        </div>
    )
}

export default HW8
