import React from 'react';
import { Link, Outlet } from "react-router-dom";
import logo from './Images/logo3.png'

export default function Header () {
    return(
        <header className="header_container">
            <img className="header-logo" src={logo} />
            <ul className="nav_bar">
                <li ><Link className="nav_bar_link" to="/">Home</Link></li>
                <li ><Link className="nav_bar_link" to="/Menu">Menu</Link></li>
                <li ><Link className="nav_bar_link" to="/Reservation">Reservation</Link></li>
                <li ><Link className="nav_bar_link" to="/Review">Review</Link></li>
                <li ><Link className="nav_bar_link" to="/Blog">Blog</Link></li>
            </ul>
        <Outlet />
    </header>
    )
}