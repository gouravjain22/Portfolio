import React from "react";
import './Navbar.css';
import {Link} from 'react-scroll'
const Navbar = () =>{
    return (
        <div className="navbar">
            <img src="" alt="Logo" className="logo"/>
            <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn">
            <img src="" alt=""/>
           ContactMe </button>
        </div>
    )
}
export default Navbar;