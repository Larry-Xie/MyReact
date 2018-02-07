// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import Status from '../Xaxd/Status';
import Usage from '../Xaxd/Usage';
import Users from '../Xaxd/Users';
import './Xaxd.less';

class Xaxd extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="xaxd-container">
                        <NavLink className="xaxd-nav-item" activeClassName="xaxd-nav-active" to={`${this.props.match.url}/status`}>Server Status</NavLink>
                        <NavLink className="xaxd-nav-item" activeClassName="xaxd-nav-active" to={`${this.props.match.url}/usage`}>Usage</NavLink>
                        <NavLink className="xaxd-nav-item" activeClassName="xaxd-nav-active" to={`${this.props.match.url}/users`}>Users</NavLink>
                </div>
                <Switch>
                    <Route path={`${this.props.match.url}/status`} component={Status} />
                    <Route path={`${this.props.match.url}/usage`} component={Usage} />
                    <Route path={`${this.props.match.url}/users`} component={Users} />
                    <Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/status`} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Xaxd;