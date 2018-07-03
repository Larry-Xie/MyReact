// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import XaxdUsageDetail from './XaxdUsageDetail';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import './XaxdUsageTableRow.less';

class XaxdUsageTableRow extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = { isExpanding: false };
    }

    onClickExpand() {
        this.setState({ isExpanding: !this.state.isExpanding })
    }

    render() {
        const totalCellClass = classNames({'xaxd-usage-table-row-total-cell': this.state.isExpanding});
        const paidCellClass = classNames({'xaxd-usage-table-row-paid-cell': this.state.isExpanding});
        const freeCellClass = classNames({'xaxd-usage-table-row-free-cell': this.state.isExpanding});

        const arrowCell = this.state.isExpanding ? <LuiIcon type="arrow-down" isEnabled={true} /> : <LuiIcon type="arrow-right" isEnabled={true} />;

        const detailRow = !this.state.isExpanding ? null :
            <XaxdUsageDetail customerCount={this.props.product.linkedCustomerCount}
                customers={this.props.product.linkedCustomerUsages}
                servers={this.props.product.licenseServerUsages} />;

        return (
            <div className="xaxd-usage-table-row-container">
                <div className="table-row">
                    <div className="col-md-1">{this.props.product.featureDescription}</div>
                    <div className="col-md-2 right-text"><span className={totalCellClass}>{this.props.product.count}</span></div>
                    <div className="col-md-2 right-text"><span className={paidCellClass}>{this.props.product.count - this.props.product.freeUsersCount}</span></div>
                    <div className="col-md-2 right-text"><span className={freeCellClass}>{this.props.product.freeUsersCount}</span></div>
                    <div className="col-md-2 right-text">{this.props.product.licenseServerCount}</div>
                    <div className="col-md-2 right-text">{this.props.product.linkedCustomerCount}</div>
                    <div className="col-md-1 right-text" onClick={this.onClickExpand}>{arrowCell}</div>
                </div>
                {detailRow}
            </div>
        )
    }
}

XaxdUsageTableRow.propTypes = {
    product: PropTypes.object
};

export default XaxdUsageTableRow;