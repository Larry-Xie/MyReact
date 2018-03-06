// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as xaxdStatusActions from '../../store/xaxdStatus/actions';
import * as xaxdStatusSelectors from '../../store/xaxdStatus/reducer';
import './XaxdStatus.less';

class Row extends Component {
    render() {
        return (
            <div className="table-row">
                <div>{this.props.server.hostId}</div>
                <div>{this.props.server.isPhoningHome.toString()}</div>
                <div>{this.props.server.fqdn}</div>
                <div>{this.props.server.modifiedDate}</div>
                <div onClick={() => this.props.onClick(this.props.server.hostId)}>
                    {this.props.server.isLicenseServerFree.toString()}
                </div>
            </div>
        )
    }
}

class XaxdStatus extends Component {
    constructor(props) {
        super(props);
        this.onClickSort = this.onClickSort.bind(this);
        this.onToggleLicenseServerType = this.onToggleLicenseServerType.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(xaxdStatusActions.fetchXaxdStatusData());
    }

    onClickSort(key) {
        this.props.dispatch(xaxdStatusActions.sortBy(key));
    }

    onToggleLicenseServerType(hostId) {
        this.props.dispatch(xaxdStatusActions.changeLicenseServerType(hostId));
    }

    render() {
        const rows = this.props.servers.map((server) => 
            <Row key={server.hostId.toString()}
                server={server}
                onClick={this.onToggleLicenseServerType} />
        );
        return (
            <div className="status-container">
                <div className="table-header">
                    <div onClick={() => this.onClickSort('hostId')}>Host ID</div>
                    <div onClick={() => this.onClickSort('isPhoningHome')}>Status</div>
                    <div onClick={() => this.onClickSort('fqdn')}>FQDN</div>
                    <div onClick={() => this.onClickSort('modifiedDate')}>Last Reported Date</div>
                    <div onClick={() => this.onClickSort('isLicenseServerFree')}>Type</div>
                </div>
                {rows}
            </div>
        );
    }
}

XaxdStatus.propTypes = {
    isEmpty: PropTypes.bool,
    isLoading: PropTypes.bool,
    servers: PropTypes.array
}

// Always use selectors here and avoid accessing the state directly
function mapStateToProps(state) {
    return {
        servers: xaxdStatusSelectors.getLicenseServer(state),
        isEmpty: xaxdStatusSelectors.getIsEmpty(state),
        isLoading: xaxdStatusSelectors.getIsLoading(state)
    }
}

export default connect(mapStateToProps)(XaxdStatus);