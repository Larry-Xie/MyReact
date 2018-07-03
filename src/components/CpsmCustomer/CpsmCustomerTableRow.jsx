// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './CpsmCustomerTableRow.less';
import CpsmCustomerDetail from './CpsmCustomerDetail';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import LuiSpinner from '../../common/LuiSpinner/LuiSpinner';

class CpsmCustomerTableRow extends Component {
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
        const arrowCell = this.props.customer.isLoading ? <LuiSpinner size="small" className="cpsm-customer-table-row-spinner" /> :
            <LuiIcon type={arrowType} isEnabled={true} onClick={this.onClickExpand} />;

        const totalCellClass = classNames({'cpsm-customer-table-row-total-cell': this.state.isExpanding});
        const paidCellClass = classNames({'cpsm-customer-table-row-paid-cell': this.state.isExpanding});
        const freeCellClass = classNames({'cpsm-customer-table-row-free-cell': this.state.isExpanding});

        const detailCell = !this.state.isExpanding ? null :
            <CpsmCustomerDetail totalService={this.props.customer.totalServicesNumber} services={this.props.customer.customerServicesUsage} />;

        return (
            <React.Fragment>
                <div className="table-row">
                    <div className="col-md-3"><span title={this.props.customer.customerName}>{this.props.customer.customerName}</span></div>
                    <div className="col-md-2 right-text"><span className={totalCellClass}>{this.props.customer.totalUnitNumber}</span></div>
                    <div className="col-md-2 right-text"><span className={paidCellClass}>{this.props.customer.paidUnitNumber}</span></div>
                    <div className="col-md-2 right-text"><span className={freeCellClass}>{this.props.customer.freeUnitNumber}</span></div>
                    <div className="col-md-2 right-text">{this.props.customer.totalServicesNumber}</div>
                    <div className="col-md-1 right-text">{arrowCell}</div>
                </div>
                {detailCell}
            </React.Fragment>
        )
    }
}

CpsmCustomerTableRow.propTypes = {
    fetchData: PropTypes.func,
    customer: PropTypes.object
}

export default CpsmCustomerTableRow;