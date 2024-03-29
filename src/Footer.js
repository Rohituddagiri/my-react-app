import React from 'react';

export default function Footer(props){
    return(
        <footer className={props.darkMode? "dark": ""}>
            <small>© 2024 Rohit Uddagiri development. All rights reserved.</small>
        </footer>
    )
}

