// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './XaxdStatusTableRow.less';
import LuiSwitchButton from '../../common/LuiSwitchButton/LuiSwitchButton';
import XaxdStatusTableStatusCell from './XaxdStatusTableStatusCell';
import localization from '../../services/localization';

class XaxdStatusTableRow extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    getHostCustomers() {
        if (this.props.server.linkedCustomerList && this.props.server.linkedCustomerList.length) {
            const customerMessage = this.props.server.linkedCustomerList.length === 1 ?
                localization.languages.OneCustomer : `${this.props.server.linkedCustomerList.length} ${localization.languages.Customers}`;
            /* TODO: Replace domain with real value */
            const customerTooltip = this.props.server.linkedCustomerList.map((customer, index) =>
                <div className="xaxd-status-table-host-cell-tooltip-item" key={index}>
                    {customer.customerType.toLowerCase() === 'managed' ?
                        <a title={customer.customerNickName} href={`{domain}/customeraccount/${customer.customerId}`}>{customer.customerNickName}</a> :
                        <span title={customer.customerNickName}>{customer.customerNickName}</span>}
                </div>
            );
            return (
                <React.Fragment>
                    <div className="xaxd-status-table-host-cell-message">
                        <a data-tip='React-tooltip' data-for={`hostId${this.props.index}`} data-event='click'>{customerMessage}</a>
                    </div>
                    <ReactTooltip id={`hostId${this.props.index}`} place="bottom" globalEventOff='click'>
                        <div className="xaxd-status-table-cell-tooltip">
                            {customerTooltip}
                        </div>
                    </ReactTooltip>
                </React.Fragment>
            );
        }
        return null;
    }

    render() {
        const hostId = this.props.server.fqdn === null ? <span title={this.props.server.hostId}>{this.props.server.hostId}</span> :
            <Link to={`/detail?fqdn=${this.props.server.fqdn}`} title={this.props.server.hostId}>{this.props.server.hostId}</Link>;
        const typeCell = !this.props.server.fqdn ? null :
            <LuiSwitchButton
                isChecked={this.props.server.isLicenseServerFree}
                onToggle={() => this.props.onToggle(this.props.server.hostId)} />;
        return (
            <div className="table-row">
                <div className="col-md-2">{hostId}{this.getHostCustomers()}</div>
                <div className="col-md-3"><XaxdStatusTableStatusCell server={this.props.server} index={this.props.index} /></div>
                <div className="col-md-2"><span title={this.props.server.fqdn}>{this.props.server.fqdn}</span></div>
                <div className="col-md-3"><span title={this.props.server.modifiedDate}>{this.props.server.modifiedDate}</span></div>
                <div className="col-md-2">{typeCell}</div>
            </div>
        )
    }
}

XaxdStatusTableRow.propTypes = {
    index: PropTypes.string,
    server: PropTypes.object,
    onToggle: PropTypes.func
}

export default XaxdStatusTableRow;