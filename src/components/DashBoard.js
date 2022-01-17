import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { jobLists } from '../Redux/Jobs/action'
import Navbar from './Navbar'
import '../Styles/dashboard.css'

const DashBoard = () => {

    const dispatch = useDispatch()
    const {lists} = useSelector(state => state.getJobsState)
    const {user}  = useSelector(state => state.authState)

    const getAll = async() => {
        let res = await fetch("http://localhost:5000/jobs")
        let dat = await res.json()
        dispatch(jobLists(dat))
    }

    const Addtoapply = (e) => {
        fetch("http://localhost:5000/applied", {
            method : 'POST',
            body : JSON.stringify(e),
            headers : {
                "Content-Type" : 'application/json'
            }
        })
    }

    useEffect(() => {
        getAll()
    },[])


    const handleINC = () => {
        let temp = lists.sort((a,b) => Number(a.salary_range) - Number(b.salary_range))
        dispatch(jobLists(temp))

    }
    const handleDSC = () => {
        let temp = lists.sort((a,b) => Number(b.salary_range) - Number(a.salary_range))
        dispatch(jobLists(temp))

    }

    if(user.length === 0 || user[0] === null) {
        return <Navigate to="/login"/>
    }
    
    return (
        <>

        <Navbar />
        <h1>All Jobs List</h1>
        <div>

            <button onClick={handleINC}>Increasing order of Salary</button>
            <button onClick={handleDSC}>Decreasing order of Salary</button>

            <div className='card_cont'>
        {
            lists.map((e) => (
                <div key={e.id} className='card'>
                    <div>Company Name : {e.company_name}</div>
                    <div>Job Title : {e.job_title}</div>
                    <div>Salary : {e.salary_range}</div>
                    <div>Description :{e.description}</div>
                    <div>Location : {e.location}</div>
                    <div>JobType : {e.jobtype}</div>
                    <button onClick={() => Addtoapply(e)}>APPLY</button>
                </div>
            ))
        }
        </div>

        </div>
        </>
    )
}

export default DashBoard