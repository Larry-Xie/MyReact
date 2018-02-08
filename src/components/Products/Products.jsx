// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import Cpsm from '../Cpsm/Cpsm';
import Netscaler from '../Netscaler/Netscaler';
import Xaxd from '../Xaxd/Xaxd';
import './Products.less';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {service: 'XenApp and XenDesktop'};
        this.selectService = this.selectService.bind(this);
    }

    selectService(event) {
        this.setState({
            service: event.target.innerText.trim()
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="products-container">
                    <div className="products-dropdown-container">
                        <div className="products-dropdown-content">
                            <div>{this.state.service}</div>
                            <div className="icon icon-arrow-down products-dropdown-arrow"></div>
                        </div>
                        <div className="products-dropdown-menu">
                            <NavLink className="products-dropdown-menu-item" activeClassName="active" to={`${this.props.match.url}/xaxd`} onClick={this.selectService}>
                                <div className="icon icon-tick products-dropdown-menu-item-tick"></div>XenApp and XenDesktop
                            </NavLink>
                            <NavLink className="products-dropdown-menu-item" activeClassName="active" to={`${this.props.match.url}/netscaler`} onClick={this.selectService}>
                                <div className="icon icon-tick products-dropdown-menu-item-tick"></div>NetScaler
                            </NavLink>
                            <NavLink className="products-dropdown-menu-item" activeClassName="active" to={`${this.props.match.url}/cpsm`} onClick={this.selectService}>
                                <div className="icon icon-tick products-dropdown-menu-item-tick"></div>CloudPortal Services Manager
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path={`${this.props.match.url}/xaxd`} component={Xaxd} />
                    <Route path={`${this.props.match.url}/netscaler`} component={Netscaler} />
                    <Route path={`${this.props.match.url}/cpsm`} component={Cpsm} />
                    <Redirect from={`${this.props.match.url}`} to={`${this.props.match.url}/xaxd`} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Products;