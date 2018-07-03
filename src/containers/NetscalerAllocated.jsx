// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import * as netscalerAllocatedActions from '../store/netscalerAllocated/actions';
import * as netscalerAllocatedSelectors from '../store/netscalerAllocated/reducer';
import LuiSpinner from '../common/LuiSpinner/LuiSpinner';
import NetscalerAllocatedEmpty from '../components/NetscalerAllocated/NetscalerAllocatedEmpty';
import NetscalerAllocatedTableHeader from '../components/NetscalerAllocated/NetscalerAllocatedTableHeader';
import NetscalerAllocatedTableRow from '../components/NetscalerAllocated/NetscalerAllocatedTableRow';
import NetscalerAllocatedTop from '../components/NetscalerAllocated/NetscalerAllocatedTop';

class NetscalerAllocated extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        this.props.dispatch(netscalerAllocatedActions.fetchNetscalerAllocatedData());
    }

    onClickSort(key) {
        this.props.dispatch(netscalerAllocatedActions.sortBy(key));
    }

    onClickExport() {
        this.props.dispatch(netscalerAllocatedActions.exportCSV());
    }

    onFilterChange(filter) {
        this.props.dispatch(netscalerAllocatedActions.changeFilter(filter));
    }

    render() {
        let content = null;
        if (!this.props.netScalerDetails.length) {
            content = <NetscalerAllocatedEmpty isFilterEmpty={false} onChange={this.onFilterChange} />
        } else if (!this.props.filteredNetscaler.length) {
            content = <NetscalerAllocatedEmpty isFilterEmpty={true} onChange={this.onFilterChange} />
        } else {
            content = (
                <React.Fragment>
                    <NetscalerAllocatedTableHeader
                        onClickSort={this.onClickSort}
                        sortKey={this.props.sortKey}
                        sortType={this.props.sortType} />
                    {
                        this.props.filteredNetscaler.map((netscaler, index) =>
                            <NetscalerAllocatedTableRow key={index}
                                index={index.toString()}
                                netscaler={netscaler} />
                        )
                    }
                </React.Fragment>
            )
        }
        return (
            <div className="netscaler-allocated-container">
                {this.props.isLoading ? <LuiSpinner /> :
                    <React.Fragment>
                        <NetscalerAllocatedTop
                            isEmpty={!this.props.netScalerDetails.length}
                            onChange={this.onFilterChange}
                            onClickExport={this.onClickExport}
                            value={this.props.filter} />
                        {content}
                    </React.Fragment>
                }
            </div>
        );
    }
}

NetscalerAllocated.propTypes = {
    filter: PropTypes.string,
    filteredNetscaler: PropTypes.array,
    isLoading: PropTypes.bool,
    netScalerDetails: PropTypes.array,
    sortKey: PropTypes.string,
    sortType: PropTypes.string
}

// Always use selectors here and avoid accessing the state directly
function mapStateToProps(state) {
    return {
        filter: netscalerAllocatedSelectors.getFilter(state),
        filteredNetscaler: netscalerAllocatedSelectors.getFilteredNetscaler(state),
        isLoading: netscalerAllocatedSelectors.getIsLoading(state),
        netScalerDetails: netscalerAllocatedSelectors.getNetScalerDetails(state),
        sortKey: netscalerAllocatedSelectors.getSortKey(state),
        sortType: netscalerAllocatedSelectors.getSortType(state)
    }
}

export default connect(mapStateToProps)(NetscalerAllocated);