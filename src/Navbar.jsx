import React from 'react'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav>
            <ul>
                <li className="logo"> Travel Cards</li>
                <li> <a href="#">Home</a> </li>
                <li><a href="#">More</a></li>
            </ul>
        </nav>
    )
}
