// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import * as xaxdUsageActions from '../store/xaxdUsage/actions';
import * as xaxdUsageSelectors from '../store/xaxdUsage/reducer';
import LuiSpinner from '../common/LuiSpinner/LuiSpinner';
import XaxdUsageTableRow from '../components/XaxdUsage/XaxdUsageTableRow';
import XaxdUsageTop from '../components/XaxdUsage/XaxdUsageTop';
import localization from '../services/localization';

class XaxdUsage extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        this.props.dispatch(xaxdUsageActions.fetchXaxdUsageData());
    }

    onClickExport() {
        this.props.dispatch(xaxdUsageActions.exportCSV());
    }

    render() {
        const tableHeader = !this.props.products.length ?
            <div className="table-header">{localization.languages.Username}</div> :
            <div className="table-header">
                <div className="col-md-1">{localization.languages.ProductName}</div>
                <div className="col-md-2 right-text">{localization.languages.TotalUsers}</div>
                <div className="col-md-2 right-text">{localization.languages.PaidUsers}</div>
                <div className="col-md-2 right-text">{localization.languages.FreeUsers}</div>
                <div className="col-md-2 right-text">{localization.languages.LicenseServersCount}</div>
                <div className="col-md-2 right-text">{localization.languages.Customers}</div>
            </div>

        const tableBody = !this.props.products.length ?
            <div className="table-row">{localization.languages.NoUser}</div> :
            this.props.products.map((product, index) => <XaxdUsageTableRow key={index} product={product} />);

        return (
            <div className="netscaler-allocated-container">
                {this.props.isLoading ? <LuiSpinner /> :
                    <div className="xaxd-usage-container">
                        <XaxdUsageTop isEmpty={!this.props.products.length} isLoading={this.props.isLoading} onClick={this.onClickExport} />
                        {tableHeader}
                        {tableBody}
                    </div>
                }
            </div>
        );
    }
}

XaxdUsage.propTypes = {
    isEmpty: PropTypes.bool,
    isLoading: PropTypes.bool,
    isExporting: PropTypes.bool,
    products: PropTypes.array
}

function mapStateToProps(state) {
    return {
        isEmpty: xaxdUsageSelectors.getIsEmpty(state),
        isExporting: xaxdUsageSelectors.getIsExporting(state),
        isLoading: xaxdUsageSelectors.getIsLoading(state),
        products: xaxdUsageSelectors.getLicenseUsage(state)
    };
}

export default connect(mapStateToProps)(XaxdUsage);