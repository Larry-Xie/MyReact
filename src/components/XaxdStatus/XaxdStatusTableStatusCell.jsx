// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import './XaxdStatusTableStatusCell.less';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import localization from '../../services/localization';

class XaxdStatusTableStatusCell extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    getStatusText() {
        let icon = null;
        let server = this.props.server;
        if (!server.isPhoningHome) {
            icon = <LuiIcon type="error" color="negative" />;
        }
        if (server.isPhoningHome && server.isFoundInBackOffice && !server.isCcu && !server.isNonCspLicenseInstalled && server.daysToExpire > 90) {
            icon = <LuiIcon type="tick" color="positive" />;
        }
        if (server.isPhoningHome && server.isFoundInBackOffice && !server.isCcu && !server.isNonCspLicenseInstalled && (server.daysToExpire <= 90) && (server.daysToExpire > 30)) {
            icon = <LuiIcon type="information" color="primary" />;
        }
        if (server.isPhoningHome && (!server.isFoundInBackOffice || server.isCcu || server.isNonCspLicenseInstalled || server.daysToExpire <= 30)) {
            icon = <LuiIcon type="warning" color="orange" />;
        }
        const status = this.props.server.isPhoningHome ? localization.languages.Reporting : localization.languages.NotReporting;
        return (
            <React.Fragment>
                {icon}
                <span className="mar5l">{status}</span>
            </React.Fragment>
        )
    }

    getStatusTooltip() {
        let server = this.props.server;
        if (!server.isFoundInBackOffice || server.showPhoningHomeWarning || server.isCcu || server.isNonCspLicenseInstalled || server.isExpired || (server.daysToExpire && server.daysToExpire <= 90)) {
            const messageText = server.infoCount === 1 ? localization.languages.OneMessage : `${server.infoCount} ${localization.languages.Messages}`;
            const messageTooltip = (
                <div className="xaxd-status-table-cell-tooltip">
                    {server.isFoundInBackOffice ? null :
                        <div className="xaxd-status-table-status-cell-tooltip-item">{localization.languages.NotFoundInBackOffice}</div>
                    }
                    {!server.showPhoningHomeWarning ? null :
                        <div className="xaxd-status-table-status-cell-tooltip-item">{localization.languages.NotPhoningHome}</div>
                    }
                    {!server.isNonCspLicenseInstalled ? null :
                        <div className="xaxd-status-table-status-cell-tooltip-item">{localization.languages.UB}</div>
                    }
                    {!(server.isExpired && server.fqdn) ? null :
                        <div className="xaxd-status-table-status-cell-tooltip-item">{localization.languages.ExpirationInfo}</div>
                    }
                    {!(!server.isExpired && server.daysToExpire && server.fqdn && server.daysToExpire <= 90) ? null :
                        <div className="xaxd-status-table-status-cell-tooltip-item" dangerouslySetInnerHTML={{__html: localization.getString('WillExpire', {value: server.daysToExpire})}}></div>
                    }
                    {!server.featureList[0] ? null :
                        <div className="xaxd-status-table-status-cell-tooltip-item">{localization.getString('ConcurrentXenAppAdvanced', {value: server.featureList[0]})}</div>
                    }
                    {!server.featureList[1] ? null :
                        <div className="xaxd-status-table-status-cell-tooltip-item">{localization.getString('ConcurrentXenAppPlatinum', {value: server.featureList[1]})}</div>
                    }
                    {!server.featureList[2] ? null :
                        <div className="xaxd-status-table-status-cell-tooltip-item">{localization.getString('ConcurrentXenDesktopPlatinum', {value: server.featureList[2]})}</div>
                    }
                    {!server.featureList[3] ? null :
                        <div className="xaxd-status-table-status-cell-tooltip-item">{localization.getString('ConcurrentXenDesktopVDI', {value: server.featureList[3]})}</div>
                    }
                    {!server.featureList[4] ? null :
                        <div className="xaxd-status-table-status-cell-tooltip-item">{localization.getString('ConcurrentXenAppEnterprise', {value: server.featureList[4]})}</div>
                    }
                </div>
            )
            return (
                <React.Fragment>
                    <div className="xaxd-status-table-status-cell-message">
                        <a data-tip='React-tooltip' data-for={`status${this.props.index}`}>{messageText}</a>
                    </div>
                    <ReactTooltip id={`status${this.props.index}`} place="bottom">{messageTooltip}</ReactTooltip>
                </React.Fragment>
            )
        }
        return null;
    }

    render() {
        return (
            <React.Fragment>
                {this.getStatusText()}
                {this.getStatusTooltip()}
            </React.Fragment>
        )
    }
}

XaxdStatusTableStatusCell.propTypes = {
    index: PropTypes.string,
    server: PropTypes.object
}

export default XaxdStatusTableStatusCell;