// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Shell from './routers/Shell';
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

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Navbar />
                    <Shell />
                </div>
            </Provider>
        );
    }
}

export default App;