// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import CpsmDeployment from '../CpsmDeployment/CpsmDeployment';
import CpsmServices from '../CpsmServices/CpsmServices';
import CpsmCustomers from '../CpsmCustomers/CpsmCustomers';

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
                        <Route path={`${this.props.match.url}/deployment`} component={CpsmDeployment} />
                        <Route path={`${this.props.match.url}/services`} component={CpsmServices} />
                        <Route path={`${this.props.match.url}/customers`} component={CpsmCustomers} />
                        <Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/deployment`} />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default Cpsm;