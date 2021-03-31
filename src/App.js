import React, { Component } from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import Users from "./components/user/Users";
export class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <Users/>
                </div>
            </div>
        )
    }
}

export default App
