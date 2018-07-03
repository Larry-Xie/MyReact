// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './DetailTop.less';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import LuiSwitchButton from '../../common/LuiSwitchButton/LuiSwitchButton';
import localization from '../../services/localization';

class DetailTop extends Component {
    render() {
        let detailIcon = null;
        if (this.props.detail.serverStatus.daysToExpire <= 0) {
            detailIcon = <LuiIcon type="error" color="red" size="small" className="detail-top-number-icon" />
        }
        if (this.props.detail.serverStatus.daysToExpire <= 30 && this.props.detail.serverStatus.daysToExpire > 0) {
            detailIcon = <LuiIcon type="warning" color="orange" size="small" className="detail-top-number-icon" />
        }
        if (this.props.detail.serverStatus.daysToExpire <= 90 && this.props.detail.serverStatus.daysToExpire > 30) {
            detailIcon = <LuiIcon type="information" color="primary" size="small" className="detail-top-number-icon" />
        }
        if (this.props.detail.serverStatus.daysToExpire > 90) {
            detailIcon = <LuiIcon type="tick" color="positive" size="small" className="detail-top-number-icon" />
        }

        const status = this.props.detail.serverStatus.isPhoningHome ? localization.languages.Reporting : localization.languages.NotReporting;

        return (
            <div className="detail-top-container">
                <div className="detail-top-title">
                    <Link to={`/products/xaxd/status`}><LuiIcon type="back" /></Link>
                    <span className="detail-top-title-name" title={this.props.fqdn}>{this.props.fqdn}</span>
                </div>
                <div className="detail-top-left">
                    <div className="detail-top-number">
                        {detailIcon}
                        {this.props.detail.serverLicenseCount}
                    </div>
                    <div className="detail-top-install" title={localization.languages.LicenseInstall}>
                        {localization.languages.LicenseInstall}
                    </div>
                </div>
                <div className="detail-top-vertical-line"></div>
                <div className="detail-top-right-narrow">
                    <div className="detail-top-subtitle" title={localization.languages.ServerType}>{localization.languages.ServerType}:</div>
                    <LuiSwitchButton
                        isChecked={this.props.detail.serverStatus.isLicenseServerFree}
                        onToggle={() => this.props.onToggle(this.props.server.hostId)} />
                </div>
                <div className="detail-top-horizontal-line"></div>
                <div className="detail-top-middle">
                    <div className="detail-top-subtitle">
                        <div className="detail-top-item" title={localization.languages.Status}>{localization.languages.Status}:</div>
                        <div className="detail-top-item" title={localization.languages.LastReportedDate}>{localization.languages.LastReportedDate}:</div>
                        <div className="detail-top-item" title={localization.languages.Fqdn.toUpperCase()}>{localization.languages.Fqdn.toUpperCase()}:</div>
                    </div>
                    <div className="detail-top-content">
                        <div className="detail-top-item" title={status}>{status}</div>
                        <div className="detail-top-item" title={this.props.detail.serverStatus.lastPhoningHomeTime}>{this.props.detail.serverStatus.lastPhoningHomeTime}</div>
                        <div className="detail-top-item" title={this.props.detail.serverStatus.fqdn}>{this.props.detail.serverStatus.fqdn}</div>
                    </div>
                </div>
                <div className="detail-top-vertical-line detail-top-vertical-line-narrow"></div>
                <div className="detail-top-right">
                    <div className="detail-top-subtitle" title={localization.languages.ServerType}>{localization.languages.ServerType}:</div>
                    <LuiSwitchButton
                        isChecked={this.props.detail.serverStatus.isLicenseServerFree}
                        onToggle={() => this.props.onToggle()} />
                </div>
            </div>
        );
    }
}

DetailTop.propTypes = {
    detail: PropTypes.object,
    fqdn: PropTypes.string,
    onToggle: PropTypes.func
}

export default DetailTop;