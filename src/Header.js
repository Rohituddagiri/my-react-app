import React from 'react';
import reactLogo from './react-1-logo-png-transparent.png';

export default function Header(){
    return(
        <header>
            <nav className="nav">
                <img src={reactLogo} className="nav-logo" alt="React Logo" />
                <h3 className='nav-logo_text'>ReactFacts</h3>
                <h4 className='nav-title'>React Course - Project 1</h4>
            </nav>
        </header>
    )
}