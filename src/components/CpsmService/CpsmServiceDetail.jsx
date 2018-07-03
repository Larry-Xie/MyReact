// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './CpsmServiceDetail.less';
import localization from '../../services/localization';

class CpsmServiceDetail extends Component {
    render() {
        const customerCell = this.props.customers.map((customer, index) => 
            <div className="cpsm-service-detail-chart-label-text" key={index}>
                <div title={customer.customerName} className="cpsm-service-detail-customer-link">{customer.customerName}</div>
            </div>
        );
        return (
            !this.props.totalCustomer ? <div>{localization.languages.NoServiceCustomer}</div> :
                <div className="cpsm-service-detail-container">
                    <div className="cpsm-service-detail-chart-label">
                        {customerCell}
                    </div>
                    <div className="cpsm-service-detail-bar-stack"></div>
                </div>
        )
    }
}

CpsmServiceDetail.propTypes = {
    customers: PropTypes.array,
    totalCustomer: PropTypes.number
};

export default CpsmServiceDetail;