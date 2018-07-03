// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './XaxdUsageDetailRow.less';
import localization from '../../services/localization';

class XaxdUsageDetailRow extends Component {
    render() {
        let customerName;
        if (this.props.customer.fqdn) {
            customerName = this.props.customer.fqdn;
        } else if (this.props.customer.isLinked) {
            customerName = this.props.customer.customerNickName;
        } else {
            customerName = <span className="xaxd-usage-detail-not-linked">{localization.languages.NotLinked}</span>;
        }

        return (
            <div className="xaxd-usage-detail-row-container">
                <div className="col-md-3">{customerName}</div>
                <div className="col-md-3">
                    <span className="xaxd-usage-table-row-total-cell">{this.props.customer.count}</span>
                </div>
                <div className="col-md-3">
                    <span className="xaxd-usage-table-row-paid-cell">{this.props.customer.count - this.props.customer.freeUsersCount}</span>
                </div>
                <div className="col-md-3">
                    <span className="xaxd-usage-table-row-free-cell">{this.props.customer.freeUsersCount}</span>
                </div>
            </div>
        )
    }
}

XaxdUsageDetailRow.propTypes = {
    customer: PropTypes.object
};

export default XaxdUsageDetailRow;