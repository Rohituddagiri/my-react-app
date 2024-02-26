import React from 'react';
import reactLogo from './react-1-logo-png-transparent.png';

export default function Header(){
    return(
        <header>
            <nav className="nav">
            <img src={reactLogo} className="nav-logo" alt="React Logo" />
                <ul className="nav-itmes">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}