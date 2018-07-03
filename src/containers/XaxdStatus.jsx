// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import * as xaxdStatusActions from '../store/xaxdStatus/actions';
import * as xaxdStatusSelectors from '../store/xaxdStatus/reducer';
import LuiSpinner from '../common/LuiSpinner/LuiSpinner';
import XaxdStatusTableHeader from '../components/XaxdStatus/XaxdStatusTableHeader';
import XaxdStatusTableRow from '../components/XaxdStatus/XaxdStatusTableRow';
import localization from '../services/localization';

class XaxdStatus extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        this.props.dispatch(xaxdStatusActions.fetchXaxdStatusData());
    }

    onClickSort(key) {
        this.props.dispatch(xaxdStatusActions.sortData(key));
    }

    onToggleLicenseServerType(hostId) {
        this.props.dispatch(xaxdStatusActions.changeLicenseServerType(hostId));
    }

    render() {
        const content = !this.props.servers.length ?
            <div className="table-row">{localization.languages.StatusInformation}</div> :
            this.props.servers.map((server, index) =>
                <XaxdStatusTableRow
                    key={index}
                    index={index.toString()}
                    server={server}
                    onToggle={this.onToggleLicenseServerType} />
            );
        return (
            <div className="xaxd-status-container">
                {this.props.isLoading ? <LuiSpinner /> :
                    <React.Fragment>
                        <XaxdStatusTableHeader
                            onClickSort={this.onClickSort}
                            sortKey={this.props.sortKey}
                            sortType={this.props.sortType} />
                        {content}
                    </React.Fragment>
                }
            </div>
        );
    }
}

XaxdStatus.propTypes = {
    isLoading: PropTypes.bool,
    servers: PropTypes.array,
    sortKey: PropTypes.string,
    sortType: PropTypes.string
}

function mapStateToProps(state) {
    return {
        isLoading: xaxdStatusSelectors.getIsLoading(state),
        servers: xaxdStatusSelectors.getServer(state),
        sortKey: xaxdStatusSelectors.getSortKey(state),
        sortType: xaxdStatusSelectors.getSortType(state)
    }
}

export default connect(mapStateToProps)(XaxdStatus);