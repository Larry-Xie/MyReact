// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import localization from '../services/localization';
import Products from './Products';
import Detail from '../containers/Detail';
import History from '../containers/History';
import '../common/navigation.less';

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
                                <NavLink className="subnavbar-item-tab" activeClassName="active" to="/products">{localization.languages.Products}</NavLink>
                            </li>
                            <li className="subnavbar-item">
                                <NavLink className="subnavbar-item-tab" activeClassName="active" to="/history">{localization.languages.History}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Main Content */}
                <div className="main-content">
                    <Switch>
                        <Route path="/products" component={Products} />
                        <Route path="/history" component={History} />
                        <Route path="/detail" component={Detail} />
                        <Redirect from="/" to="products" />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default Shell;