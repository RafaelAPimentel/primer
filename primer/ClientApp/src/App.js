import React, { Component } from 'react';

import './custom.css'
import { Home } from './components/Home';
import './components/example'

export default class App extends Component {

    render = () =>
        <div className="container-fluid p-4">
            <div className="m-2">
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control" />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input className="form-control" />
                </div>
            </div>
        </div>
}
