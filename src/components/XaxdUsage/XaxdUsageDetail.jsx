// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import './XaxdUsageDetail.less';
import XaxdUsageDetailRow from './XaxdUsageDetailRow';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import localization from '../../services/localization';

class XaxdUsageDetail extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            isCustomersExpanding: true,
            isServersExpanding: true
        };
    }

    onClickExpandCustomers() {
        this.setState({ isCustomersExpanding: !this.state.isCustomersExpanding })
    }

    onClickExpandServers() {
        this.setState({ isServersExpanding: !this.state.isServersExpanding })
    }

    render() {
        const notLinkedMessage = this.props.customerCount ? null :
            <div>
                <LuiIcon type="warning" color="orange" />
                <span className="xaxd-usage-detail-no-sku-text">{localization.languages.NoSkuCustomer}</span>
                <span className="xaxd-usage-detail-no-sku-text xaxd-usage-detail-not-linked">{localization.languages.NotLinked}</span>
            </div>;
        const customers = !this.props.customers.length ? null :
            this.props.customers.map((customer, index) => <XaxdUsageDetailRow key={index} customer={customer} />);
        const customersList = this.state.isCustomersExpanding ? <div>{notLinkedMessage}{customers}</div> : null;

        const licenseServers = this.props.servers.length ?
            this.props.servers.map((server, index) => <XaxdUsageDetailRow key={index} customer={server} />) :
            <div className="xaxd-usage-detail-empty-server-text">{localization.languages.NoLicenseServers}</div>;
        const licenseServersList = this.state.isServersExpanding ? licenseServers : null;

        let customerHideStatus = this.state.isCustomersExpanding ? 'Hide' : 'Show';
        let serverHideStatus = this.state.isServersExpanding ? 'Hide' : 'Show';

        return (
            <div className="xaxd-usage-detail-container">
                <div className="xaxd-usage-detail-customer-section">
                    <div className="xaxd-usage-detail-customer-section-title">
                        {`Customers (${this.props.customerCount})`}
                        <div className="xaxd-usage-detail-detail-visibility" onClick={this.onClickExpandCustomers}>
                            {customerHideStatus}
                        </div>
                    </div>
                </div>
                {customersList}
                <div className="xaxd-usage-detail-customer-section-title">
                    {`License Servers (${this.props.servers.length})`}
                    <div className="xaxd-usage-detail-detail-visibility" onClick={this.onClickExpandServers}>
                        {serverHideStatus}
                    </div>
                </div>
                {licenseServersList}
            </div>
        );
    }
}

XaxdUsageDetail.propTypes = {
    customerCount: PropTypes.number,
    customers: PropTypes.array,
    servers: PropTypes.array
};

export default XaxdUsageDetail;