import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppliedLists } from '../Redux/Applied/action'
import Navbar from './Navbar'

const Applied = () => {

    const {applied} = useSelector(state => state.appliedState)

    const dispatch = useDispatch()

    const getAll = async () => {
        let res = await fetch("http://localhost:5000/applied")
        let dat = await  res.json()
        dispatch(AppliedLists(dat))
    }
    useEffect(() => {
        getAll()
    },[])

    return (
        <>
    <Navbar />
    <h1>Applied Jobs</h1>
        <div className='card_cont'>
            {
                applied.map((e) => (
                    <div key={e.id} className='card'>
                      <div>Company Name : {e.company_name}</div>
                    <div>Job Title : {e.job_title}</div>
                    <div>Salary : {e.salary_range}</div>
                    <div>Description :{e.description}</div>
                    <div>Location : {e.location}</div>
                    <div>JobType : {e.jobtype}</div>
                    </div>
                ))
            }
        </div>
            
        </>
    )
}

export default Applied