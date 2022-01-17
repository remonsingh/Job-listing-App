import { GET_JOBS , GET_LISTS} from "./actionTypes";

export const getJobs = (job) => {
   return {
        type : GET_JOBS,
        payload : job
    }
}

export const jobLists = (list) => {
    return {
        type : GET_LISTS,
        payload : list

    }
}