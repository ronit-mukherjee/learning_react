import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css'
import Menubar from "./components/Menubar/Menubar"
import AppRoutes from './AppRoutes'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <header className="App-header">
                        <h1 className="App-title">Learning React Js</h1>
                    </header>
                    <Menubar/>
                    <AppRoutes/>
                </div>
            </Router>
        );
    }
}

export default App;
