import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to = "/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link nav-item">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link nav-item">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link nav-item">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
