import React from 'react'
import { Link, Navigate , useNavigate} from 'react-router-dom'
import '../Styles/navbar.css'
import { saveData } from '../utils/localStorage'

const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        saveData("Juser", [])
        navigate("/login")
    }
    return (
        <nav className='navbar'>
            <Link className='link'  to="/">DASHBOARD</Link>
            <Link className='link' to="/admin">ADMIN PAGE</Link>
            <Link className='link' to="/applied">Applied Jobs</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    )
}

export default Navbar