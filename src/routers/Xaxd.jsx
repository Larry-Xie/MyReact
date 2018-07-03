// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import localization from '../services/localization';
import XaxdStatus from '../containers/XaxdStatus';
import XaxdUsage from '../containers/XaxdUsage';
import XaxdUsers from './XaxdUsers';

class Xaxd extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="products-nav-container">
                    <NavLink className="products-nav-item" activeClassName="products-nav-active" to={`${this.props.match.url}/status`}>{localization.languages.ServerStatus}</NavLink>
                    <NavLink className="products-nav-item" activeClassName="products-nav-active" to={`${this.props.match.url}/usage`}>{localization.languages.Usage}</NavLink>
                    <NavLink className="products-nav-item" activeClassName="products-nav-active" to={`${this.props.match.url}/users`}>{localization.languages.Users}</NavLink>
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