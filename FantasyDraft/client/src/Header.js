import { React, useState, useEffect } from "react";
// import { logout } from "./AuthManager";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"

export default function Header() {
    
    return (
        <>
            <div className="navWrapper">
                <ul className="navbar">
                    <li className="navbarItem">
                        <Link className="navbarLink" to="/">
                            <i class="fa-solid fa-football fa-xl"></i>
                                <p className="logo">Draft Master&trade;</p>
                        </Link>                    
                    </li>
                    <li className="navbarItem">
                        <Link className="navbarLink" to="/players">Player Rankings</Link>
                    </li>
                    <li className="navbarItem">
                        <Link className="navbarLink" to="/board">Draft Board</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}