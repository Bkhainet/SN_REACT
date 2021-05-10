import './App.css';
import React from "react";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import MessagesContainer from "./components/Messages/MessagesContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route} from "react-router-dom";




function App(props) {
    return (
        <BrowserRouter>
            <div class="row">
                <Header/>
                <Nav/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/messages' render={() => <MessagesContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/users' component={UsersContainer}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;


