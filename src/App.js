// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';

import Shell from './components/Shell';
import './App.less';

class Navbar extends Component {
    render() {
        return (
            <div className="app-navbar">
                Citrix Cloud
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Shell />
            </div>
        );
    }
}

export default App;