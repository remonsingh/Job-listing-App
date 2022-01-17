import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {nanoid} from 'nanoid'
import { getUser } from '../Redux/Auth/action'
import { useNavigate} from 'react-router-dom'

const Login = () => {

    const [form, setForm] = useState({})

    const {user} = useSelector(state => state.authState)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleChange = (e) => {
        let {value, name} = e.target

        setForm({
            ...form,
            [name] : value
        })
    }

    const handleLogin = () => {
        form["token"] = nanoid(7)
        
        dispatch(getUser(form.role))

        if(user[0] == "recruiter") {
            navigate("/admin")
        }else {
            navigate("/")
        }
    }


    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='email' name="email" onChange={(e) => handleChange(e)}/> <br />
            <input type="text" placeholder='password' name='password' onChange={(e) => handleChange(e)} /> <br />
            <input type="text" placeholder='role : recruiter or user' name='role' onChange={(e) => handleChange(e)}/> <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login