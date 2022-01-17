import { GET_USER  } from "./actionTypes";


export const getUser = (user) => {
    return {
        type : GET_USER ,
        payload : user
    }
}