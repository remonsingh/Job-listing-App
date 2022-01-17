
import {APPLY_LISTS} from './actionTypes'

export const AppliedLists = (list) => {
    return {
        type : APPLY_LISTS,
        payload : list

    }
}