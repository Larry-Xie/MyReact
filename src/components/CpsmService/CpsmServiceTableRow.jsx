// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './CpsmServiceTableRow.less';
import CpsmServiceDetail from './CpsmServiceDetail';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import LuiSpinner from '../../common/LuiSpinner/LuiSpinner';

class CpsmServiceTableRow extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = { isExpanding: false };
    }

    componentDidMount() {
        this.props.fetchData();
    }

    onClickExpand() {
        this.setState({ isExpanding: !this.state.isExpanding });
    }

    render() {
        const arrowType = this.state.isExpanding ? 'arrow-down' : 'arrow-right';
        const arrowCell = this.props.service.isLoading ? <LuiSpinner size="small" className="cpsm-service-table-row-spinner" /> :
            <LuiIcon type={arrowType} isEnabled={true} onClick={this.onClickExpand} />;

        const totalCellClass = classNames({'cpsm-service-table-row-total-cell': this.state.isExpanding});
        const paidCellClass = classNames({'cpsm-service-table-row-paid-cell': this.state.isExpanding});
        const freeCellClass = classNames({'cpsm-service-table-row-free-cell': this.state.isExpanding});

        const detailCell = !this.state.isExpanding ? null :
            <CpsmServiceDetail totalCustomer={this.props.service.totalCustomerNumber} customers={this.props.service.serviceCustomersUsage} />;

        return (
            <React.Fragment>
                <div className="table-row">
                    <div className="col-md-2"><span title={this.props.service.serviceLabel}>{this.props.service.serviceLabel}</span></div>
                    <div className="col-md-1 right-text"><span title={this.props.service.unitOfConsumption}>{this.props.service.unitOfConsumption}</span></div>
                    <div className="col-md-2 right-text"><span className={totalCellClass}>{this.props.service.totalUnitNumber}</span></div>
                    <div className="col-md-2 right-text"><span className={paidCellClass}>{this.props.service.paidUnitNumber}</span></div>
                    <div className="col-md-2 right-text"><span className={freeCellClass}>{this.props.service.freeUnitNumber}</span></div>
                    <div className="col-md-2 right-text">{this.props.service.totalCustomerNumber}</div>
                    <div className="col-md-1 right-text">{arrowCell}</div>
                </div>
                {detailCell}
            </React.Fragment>
        )
    }
}

CpsmServiceTableRow.propTypes = {
    fetchData: PropTypes.func,
    service: PropTypes.object
}

export default CpsmServiceTableRow;