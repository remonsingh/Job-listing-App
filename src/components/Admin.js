import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getJobs } from '../Redux/Jobs/action'
import Navbar from './Navbar'

const Admin = () => {


    const [form, setForm] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let {value, name} = e.target

        setForm({
            ...form,
            [name] : value
        })
    }


    const handleSubmit = () => {
        fetch("http://localhost:5000/jobs", {
            method : "POST",
            body : JSON.stringify(form),
            headers : {
                'Content-Type' : "application/json"
            }
        }).then(res => res.json())
        .then(res => {
            dispatch(getJobs(res))
        })
    }


    return (
        <div>
            <Navbar />
            <h1>ADMIN</h1>
            <input type="text" name='company_name' placeholder='company name' onChange={(e) => handleChange(e)} />
            <input type="text" name='job_title' placeholder='job_title' onChange={(e) => handleChange(e)} />
            <input type="number" name='salary_range' placeholder='salary range'  onChange={(e) => handleChange(e)}/>
            <input type="text" name='description' placeholder='job description' onChange={(e) => handleChange(e)} />
            <input type="text" name='location' placeholder='job location' onChange={(e) => handleChange(e)} />
            <input type="text" name='jobtype' placeholder='job type' onChange={(e) => handleChange(e)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Admin