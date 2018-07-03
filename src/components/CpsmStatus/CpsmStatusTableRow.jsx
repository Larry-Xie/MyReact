// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CpsmStatusTableRow.less';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import localization from '../../services/localization';

class CpsmStatusTableRow extends Component {
    render() {
        const statusIcon = this.props.deployment.isReporting ?
            <LuiIcon className="cpsm-status-table-row-icon" type="tick" color="positive" /> :
            <LuiIcon className="cpsm-status-table-row-icon" type="error" color="negative" />;
        const statusText = this.props.deployment.isReporting ? localization.languages.Reporting : localization.languages.NotReporting;
        return (
            <div className="table-row">
                <div className="col-md-4"><span title={this.props.deployment.fqdn}>{this.props.deployment.fqdn}</span></div>
                <div className="col-md-4">
                    {statusIcon}
                    <span title={statusText}>{statusText}</span>
                </div>
                <div className="col-md-4"><span title={this.props.deployment.modifiedDate}>{this.props.deployment.modifiedDate}</span></div>
            </div>
        )
    }
}

CpsmStatusTableRow.propTypes = {
    deployment: PropTypes.object
}

export default CpsmStatusTableRow;