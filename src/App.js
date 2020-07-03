import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Logo from "./Components/Logo/Logo";
import Messages from "./Components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Logo/>
                <Header/>
                <Navbar/>
                <div className="main">
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/messages' component={Messages}/>*/}
                    <Route path='/profile' render={ () => <Profile/>}/>  {/* anonymous function */}
                    <Route path='/messages' render={ () => <Messages personData={props.personData}/>}/> {/* anonymous function */}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
