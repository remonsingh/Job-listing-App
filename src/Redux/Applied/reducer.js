import { APPLY_LISTS } from "./actionTypes"

const init = {
    applied : []
}

export const GetAllApplied = (state = init, {type, payload}) => {
    switch(type) {
        case APPLY_LISTS : 
        return {
            ...state,
            applied : payload
        }
        default :
        return state
    }
}