// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './NetscalerAllocatedTableRow.less';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import localization from '../../services/localization';
import NetscalerAllocatedDetail from './NetscalerAllocatedDetail';

class NetscalerAllocatedTableRow extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = { isExpanding: false };
    }

    onClickExpand() {
        this.setState({ isExpanding: !this.state.isExpanding })
    }

    getHostIdCell() {
        const productNameText = this.props.netscaler.productName ?
            <span className="netscaler-allocated-table-row-product-name-text" title={this.props.netscaler.productName}>
                {this.props.netscaler.productName}
            </span> :
            <span className="netscaler-allocated-table-row-product-name-text" title={localization.languages.NoProductName}>
                {localization.languages.NoProductName}
            </span>
        /* TODO: Add host id tooltip */
        const tooltip = this.props.netscaler.netScalerLicenseModels.length <= 1 ? null :
            <a data-tip='React-tooltip' data-for={`hostId${this.props.index}`}>{localization.getString('ViewMoreLicense', {value: this.props.netscaler.netScalerLicenseModels.length - 1})}</a>
        return (
            <div className="col-md-5 col-sm-4 col-xs-3">
                <div className="netscaler-allocated-table-row-hostId-name">
                    <span title={this.props.netscaler.hostId}>{this.props.netscaler.hostId}</span>
                </div>
                <div className="netscaler-allocated-table-row-product-name">
                    {productNameText}
                    {tooltip}
                </div>
            </div>
        )
    }

    getFqdnCell() {
        return (
            <div className="col-md-2 col-sm-2 col-xs-2">
                <span title={this.props.netscaler.fqdn}>{this.props.netscaler.fqdn}</span>
            </div>
        )
    }

    getStatusCell() {
        let hasWarningMessage = this.props.netscaler.warningCount.notFoundInBackOfficeCount
            || this.props.netscaler.warningCount.isExpiredCount;
        const warningText = this.props.netscaler.warningCount.notFoundInBackOfficeCount
            && this.props.netscaler.warningCount.isExpiredCount ? `2 ${localization.languages.Messages}` : localization.languages.OneMessage;

        let statusIcon = null;
        const statusIconClass = classNames({ 'netscaler-allocated-table-row-status-icon-middle': !hasWarningMessage });
        switch(this.props.netscaler.reportingStatus) {
            case 'Reporting': statusIcon = <LuiIcon type="tick" color="positive" />; break;
            case 'Reporting but Warning': statusIcon = <LuiIcon type="warning" color="orange" />; break;
            case 'Not Reporting': statusIcon = <LuiIcon type="error" color="negative" />; break;
            default: break;
        }

        const statusTextClass = classNames(
            'netscaler-allocated-table-row-status-text',
            { 'netscaler-allocated-table-row-status-text-middle': !hasWarningMessage }
        );
        const status = this.props.netscaler.isReporting ? localization.languages.Reporting : localization.languages.NotReporting;

        /* TODO: Add status tooltip */
        const tooltip = !hasWarningMessage ? null :
            <a className="netscaler-allocated-table-row-status-message" data-tip="React-tooltip" data-for={`hostId${this.props.index}`}>{warningText}</a>
        return (
            <div className="col-md-2 col-sm-3 col-xs-4 netscaler-allocated-table-row-status-cell">
                <div className={statusIconClass}>{statusIcon}</div>
                <span className={statusTextClass}>{status}</span>
                {tooltip}
            </div>
        )
    }

    getReportDateCell() {
        return (
            <div className="col-md-2 col-sm-2 col-xs-2 netscaler-allocated-table-row-report-time-cell">
                <span title={this.props.netscaler.localReportingDate}>{this.props.netscaler.localReportingDate}</span>
            </div>
        )
    }

    getArrowCell() {
        const arrowIcon = this.state.isExpanding ? <LuiIcon type="arrow-down" /> : <LuiIcon type="arrow-right" />;
        return (
            <div className="col-md-1 col-sm-1 col-xs-1 right-text">
                {arrowIcon}
            </div>
        )
    }

    render() {
        const containerClass = classNames(
            'netscaler-allocated-table-row-container',
            { 'netscaler-allocated-table-row-container-expand': this.state.isExpanding },
            { 'netscaler-allocated-table-row-container-error': !this.props.netscaler.isReporting },
            { 'netscaler-allocated-table-row-container-warning': this.props.netscaler.reportingStatus === 'Reporting but Warning' }
        );
        const detailRow = !this.state.isExpanding ? null : <NetscalerAllocatedDetail netscaler={this.props.netscaler} />
        return ( 
            <div className={containerClass}>
                <div className="netscaler-allocated-table-row" onClick={this.onClickExpand}>
                    {this.getHostIdCell()}
                    {this.getFqdnCell()}
                    {this.getStatusCell()}
                    {this.getReportDateCell()}
                    {this.getArrowCell()}
                </div>
                {detailRow}
            </div>
        );
    }
}

NetscalerAllocatedTableRow.propTypes = {
    index: PropTypes.string,
    netscaler: PropTypes.object
};

export default NetscalerAllocatedTableRow;