import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import './Affair.css';
import SuperButton from "../Components/SuperButton";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const changeFilterHandler = (filter: FilterType) => {
        props.setFilter(filter)
    }

    return (
        <div className={"pad"}>
            <div className={"aff"}>

                {mappedAffairs}
                <div className={"but"}>
                    <SuperButton
                        className={"button-1"}
                        onClickCallback={() => changeFilterHandler("All")}
                        text={"All"}/>
                    <> </>
                    <SuperButton
                        className={"button-1"}
                        onClickCallback={() => changeFilterHandler("High")}
                        text={"High"}/>
                    <> </>
                    <SuperButton
                        className={"button-1"}
                        onClickCallback={() => changeFilterHandler("Middle")}
                        text={"Middle"}/>
                    <> </>
                    <SuperButton
                        className={"button-1"}
                        onClickCallback={() => changeFilterHandler("Low")}
                        text={"Low"}/>
                </div>
            </div>
        </div>
    )
}

export default Affairs
