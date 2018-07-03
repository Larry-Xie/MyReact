// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './CpsmCustomerDetail.less';
import localization from '../../services/localization';

class CpsmCustomerDetail extends Component {
    render() {
        const serviceCell = this.props.services.map((service, index) =>
            <div className="cpsm-customer-detail-chart-label-text" key={index}>
                <div class="cpsm-customer-detail-text-line">
                    <div class="cpsm-customer-detail-service-link">
                        <span class="cpsm-customer-detail-add-underline">{service.serviceLabel}</span>
                        <span class="cpsm-customer-detail-unit-label"> ({service.unitOfConsumption})</span>
                    </div>
                </div>
            </div>
        );
        return (
            !this.props.totalService ? <div>{localization.languages.NoCustomerService}</div> :
                <div className="cpsm-customer-detail-container">
                    <div className="cpsm-customer-detail-chart-label">
                        {serviceCell}
                    </div>
                    <div className="cpsm-customer-detail-bar-stack"></div>
                </div>
        )
    }
}

CpsmCustomerDetail.propTypes = {
    services: PropTypes.array,
    totalService: PropTypes.number
};

export default CpsmCustomerDetail;