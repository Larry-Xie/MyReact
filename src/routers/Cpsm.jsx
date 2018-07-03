// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import CpsmStatus from '../containers/CpsmStatus';
import CpsmService from '../containers/CpsmService';
import CpsmCustomer from '../containers/CpsmCustomer';

class Cpsm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="products-nav-container">
                    <NavLink className="products-nav-item" activeClassName="products-nav-active" to={`${this.props.match.url}/deployment`}>Deployment Status</NavLink>
                    <NavLink className="products-nav-item" activeClassName="products-nav-active" to={`${this.props.match.url}/services`}>Services</NavLink>
                    <NavLink className="products-nav-item" activeClassName="products-nav-active" to={`${this.props.match.url}/customers`}>Customers</NavLink>
                </div>
                <div className="products-content-container">
                    <Switch>
                        <Route path={`${this.props.match.url}/deployment`} component={CpsmStatus} />
                        <Route path={`${this.props.match.url}/services`} component={CpsmService} />
                        <Route path={`${this.props.match.url}/customers`} component={CpsmCustomer} />
                        <Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/deployment`} />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default Cpsm;