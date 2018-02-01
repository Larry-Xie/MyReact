import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Home from './page/Home/Home';
import About from './page/About/About';
import Detail from './page/Detail/Detail';
import logo from './logo.svg';
import './App.css';

class Nav extends Component {
    render() {
        return (
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h1 className="app-title">Welcome to React</h1>
                <div>
                    <Link className="app-nav-item" to='/'>Home</Link>
                    <Link className="app-nav-item" to='/detail'>Detail</Link>
                    <Link className="app-nav-item" to='/about'>About</Link>
                </div>
            </header>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/detail' component={Detail}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </main>
        )
    }
}

class App extends Component {
    render() {
        return ( 
            <div className="app">
                <Nav />
                <Main />
            </div>
        );
    }
}

export default App;