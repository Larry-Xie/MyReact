// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import Products from './Products/Products';
import History from './History/History';
import './Shell.less';

class Shell extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="shell-container">
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
                                <NavLink className="subnavbar-item-tab" activeClassName="active" to='/products'>Products</NavLink>
                            </li>
                            <li className="subnavbar-item">
                                <NavLink className="subnavbar-item-tab" activeClassName="active" to='/detail'>History</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Main Content */}
                <div className="main-content">
                    <Switch>
                        <Route path='/products' component={Products} />
                        <Route path='/detail' component={History} />
                        <Redirect from="/" to="products" />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default Shell;