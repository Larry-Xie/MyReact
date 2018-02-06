import React, { Component } from 'react';

import Shell from './views/Shell';
import './App.less';

class App extends Component {
    render() {
        return ( 
            <div className="app">
                <Shell />
            </div>
        );
    }
}

export default App;