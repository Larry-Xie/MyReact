// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import History from '../History/History'
import './Products.less';

class Products extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="products-container">
                    <div className="products-dropdown-container">
                        <div className="products-dropdown-content">
                            <div>XenApp and XenDesktop</div>
                            <div className="icon icon-arrow-down"></div>
                        </div>
                        <div className="products-dropdown-menu">
                            <NavLink className="products-dropdown-menu-item" activeClassName="active" to={`${this.props.match.url}/xaxd`}>Products</NavLink>
                            <NavLink className="products-dropdown-menu-item" activeClassName="active" to={`${this.props.match.url}/cpsm`}>History</NavLink>
                        </div>
                    </div>
                </div>
                {/* Main Content */}
                <Switch>
                    <Route path={`${this.props.match.url}/xaxd`} component={History} />
                    <Route path={`${this.props.match.url}/cpsm`} component={History} />
                    <Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/xaxd`} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Products;