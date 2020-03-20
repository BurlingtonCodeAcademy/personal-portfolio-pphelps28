import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Router extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div id="main">
                <div id="background-layer"></div>
                <div>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Router />, document.getElementById('root'));
