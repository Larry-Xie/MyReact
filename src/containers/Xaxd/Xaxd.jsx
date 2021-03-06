// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import XaxdStatus from '../XaxdStatus/XaxdStatus';
import XaxdUsage from '../XaxdUsage/XaxdUsage';
import XaxdUsers from '../XaxdUsers/XaxdUsers';

class Xaxd extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="products-nav-container">
                    <NavLink className="products-nav-item" activeClassName="products-nav-active" to={`${this.props.match.url}/status`}>Server Status</NavLink>
                    <NavLink className="products-nav-item" activeClassName="products-nav-active" to={`${this.props.match.url}/usage`}>Usage</NavLink>
                    <NavLink className="products-nav-item" activeClassName="products-nav-active" to={`${this.props.match.url}/users`}>Users</NavLink>
                </div>
                <div className="products-content-container">
                    <Switch>
                        <Route path={`${this.props.match.url}/status`} component={XaxdStatus} />
                        <Route path={`${this.props.match.url}/usage`} component={XaxdUsage} />
                        <Route path={`${this.props.match.url}/users`} component={XaxdUsers} />
                        <Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/status`} />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default Xaxd;