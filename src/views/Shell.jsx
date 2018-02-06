import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import Detail from './Detail/Detail';
import './Shell.less';

class Shell extends Component {
    render() {
        return (
            <div className="shell-wrap">
                {/*<!-- Notification -->
                <div className="main-notifications" ng-class="{'main-notifications-opened' : shellController.notification}">
                    <div className="notification {{shellController.notificationType}}">
                        <ctx-icon type="{{shellController.notificationType}}" size="'small'" color="white" css-class="left-icon"></ctx-icon>
                        <span className="icon icon-close right-icon pointer" ng-click="shellController.closeNotifications()"></span>
                        <span className="message" ng-bind-html="shellController.notification"></span>
                    </div>
                </div>*/}

                {/* SubNavbar */}
                <div className="cwc-subnavbar">
                    <ul className="pull-left">
                        <li className="subnavbar-item">
                            <NavLink className="subnavbar-item-tab" activeClassName="active" to='/'>Products</NavLink>
                        </li>
                        <li className="subnavbar-item">
                            <NavLink className="subnavbar-item-tab" activeClassName="active" to='/detail'>History</NavLink>
                        </li>
                    </ul>
                </div>
                {/* Main Content */}
                <main>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/detail' component={Detail} />
                        <Route path='/about' component={About} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Shell;