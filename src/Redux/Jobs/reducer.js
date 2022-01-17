import { GET_JOBS, GET_LISTS } from "./actionTypes";

const init = {
    jobs : []
}

export const jobReducer = (state=init, {type , payload}) => {
    switch(type) {
        case GET_JOBS :
            return {
                ...state,
                jobs : [...state.jobs, payload]
            }
      

        default :
        return state
    }
}

const init2 = {
    lists : []
}

export const GetAllReducer = (state = init2, {type, payload}) => {
    switch(type) {
        case GET_LISTS : 
        return {
            ...state,
            lists : payload
        }
        default :
        return state
    }
}
