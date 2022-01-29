import {UserType} from "../HW8";


type ReducerAT = ReturnType<typeof homeWorkCheckAC> | ReturnType<typeof homeWorkSortAC>

export const homeWorkReducer = (state: UserType[], action: ReducerAT): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let copyState = [...state]
            switch (action.payload) {
                case "up": return copyState.sort((a, b) => a.name > b.name ? 1 : -1)
                case "down": return copyState.sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return copyState
        }
        case 'check': {
            return state.filter(value => value.age >= action.payload)
        }
        default: return state
    }
}

export const homeWorkSortAC = (payload:"up"|"down") => {
    return {
        type: "sort",
        payload
    } as const
}

export const homeWorkCheckAC = (payload: number) => {
    return {
        type: 'check',
        payload
    } as const
}