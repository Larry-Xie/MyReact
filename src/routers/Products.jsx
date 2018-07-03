// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

import LuiIcon from '../common/LuiIcon/LuiIcon';
import localization from '../services/localization';
import Cpsm from './Cpsm';
import Netscaler from './Netscaler';
import Xaxd from './Xaxd';
import '../common/navigation.less';

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
        const tickIcon = <div className="products-dropdown-menu-item-tick"><LuiIcon type="tick" color="positive" /></div>;
        return (
            <React.Fragment>
                <div className="products-container">
                    <div className="products-dropdown-container">
                        <div className="products-dropdown-content">
                            <div>{this.state.service}</div>
                            <div className="products-dropdown-arrow"><LuiIcon type="arrow-down" /></div>
                        </div>
                        <div className="products-dropdown-menu">
                            <NavLink className="products-dropdown-menu-item" activeClassName="active" to={`${this.props.match.url}/xaxd`} onClick={this.selectService}>
                                {tickIcon}{localization.languages.XAXD}
                            </NavLink>
                            <NavLink className="products-dropdown-menu-item" activeClassName="active" to={`${this.props.match.url}/netscaler`} onClick={this.selectService}>
                                {tickIcon}{localization.languages.NetScaler}
                            </NavLink>
                            <NavLink className="products-dropdown-menu-item" activeClassName="active" to={`${this.props.match.url}/cpsm`} onClick={this.selectService}>
                                {tickIcon}{localization.languages.CPSM}
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