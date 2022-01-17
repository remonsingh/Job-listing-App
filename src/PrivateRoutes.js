import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {

    const {user}  = useSelector(state => state.authState)

    if(user[0] === null || user.length === 0) {
        return <Navigate to="/login" />
    }
    if(user[0] !== "recruiter") {
    alert("You are Not Authorized")
    return <Navigate to="/" />
    }


    return children

}

export default PrivateRoutes