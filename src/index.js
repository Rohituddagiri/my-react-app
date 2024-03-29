import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



import Header from "./Header"
import Footer from "./Footer"
import MainContent from './MainContent';


function App(){
    const [darkMode, setDarkMode] = React.useState(true)
    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }
    return(
        <div>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <MainContent darkMode={darkMode}/>
            <Footer darkMode={darkMode}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
