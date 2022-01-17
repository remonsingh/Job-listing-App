import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { authReducer } from '../Auth/reducer'
import { GetAllReducer, jobReducer } from '../Jobs/reducer'
import thunk from 'redux-thunk'
import { GetAllApplied } from '../Applied/reducer'

const rootReducer = combineReducers({
    authState : authReducer,
    jobsState : jobReducer,
    getJobsState : GetAllReducer,
    appliedState : GetAllApplied
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))