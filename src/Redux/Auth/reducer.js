import { getLocal, saveData } from "../../utils/localStorage";
import { GET_USER  } from "./actionTypes";


const init = {
    user : getLocal("Juser") || []
}

export const authReducer = (state=init, {type, payload}) => {
        switch(type) {

            case GET_USER  : 
            saveData("Juser", [payload])
            return {
                user : [payload]
            }

            default :
            return state
        }
}

