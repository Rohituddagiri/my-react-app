import React from 'react';
import reactLogo from './react-1-logo-png-transparent.png';

export default function Header(props){
    return(
        <header>
            <nav className={props.darkMode? "dark":""}>
                <img src={reactLogo} className="nav--logo_icon" alt="React Logo" />
                <h3 className='nav--logo_text'>ReactFacts</h3>
                {/* <h4 className='nav-title'>React Course - Project 1</h4> */}
                <div className="toggler">
                    <p className="toggler--light">Light</p>
                    <div className="toggler--slider" onClick={props.toggleDarkMode}>
                        <div className="toggler--slider--circle"></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </nav>
        </header>
    )
}