// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import XaxdUsersAll from '../containers/XaxdUsersAll';
import XaxdUsersFree from '../containers/XaxdUsersFree';
import '../common/navigation.less';

class XaxdUsers extends Component {
    render() {
        return ( 
            <React.Fragment>
                <div className="users-nav-container">
                    <NavLink className="users-nav-item" activeClassName="users-nav-active" to={`${this.props.match.url}/all`}>All Users</NavLink>
                    <NavLink className="users-nav-item" activeClassName="users-nav-active" to={`${this.props.match.url}/free`}>Free Users List</NavLink>
                </div>
                <div className="users-content-container">
                    <Switch>
                        <Route path={`${this.props.match.url}/all`} component={XaxdUsersAll} />
                        <Route path={`${this.props.match.url}/free`} component={XaxdUsersFree} />
                        <Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/all`} />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default XaxdUsers;