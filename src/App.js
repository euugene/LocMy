import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Logo from "./Components/Logo/Logo";

const App = () => {
    return (
        <div className="app-wrapper">
            <Logo/>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
