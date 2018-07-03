// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import '../common/navigation.less';
import * as detailActions from '../store/detail/actions';
import * as detailSelectors from '../store/detail/reducer';
import LuiSpinner from '../common/LuiSpinner/LuiSpinner';
import DetailTop from '../components/Detail/DetailTop';
import DetailTableHeader from '../components/Detail/DetailTableHeader';
import DetailTableRow from '../components/Detail/DetailTableRow';

class Detail extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        this.props.dispatch(detailActions.fetchDetailData());
        this.props.dispatch(detailActions.getFqdnFromUrl(this.props.location.search));
    }

    onClickSort(key) {
        this.props.dispatch(detailActions.sortData(key));
    }

    onToggleLicenseServerType() {
        this.props.dispatch(detailActions.changeLicenseServerType());
    }

    render() {
        const content = !!this.props.detail.serverLicenses && !!this.props.detail.serverLicenses.length ?
            this.props.detail.serverLicenses.map((server, index) =>
                <DetailTableRow
                    key={index}
                    index={index.toString()}
                    server={server} />
            ) : <div className="table-row"></div>;
        return (
            <div className="detail-container">
                {this.props.isLoading ? <LuiSpinner /> :
                    <React.Fragment>
                        <DetailTop
                            fqdn={this.props.fqdn}
                            detail={this.props.detail}
                            onToggle={this.onToggleLicenseServerType} />
                        <div className="detail-content-container">
                            <DetailTableHeader
                                onClickSort={this.onClickSort}
                                sortKey={this.props.sortKey}
                                sortType={this.props.sortType} />
                            {content}
                        </div>
                    </React.Fragment>
                }
            </div>
        );
    }
}

Detail.propTypes = {
    detail: PropTypes.object,
    fqdn: PropTypes.string,
    isLoading: PropTypes.bool,
    sortKey: PropTypes.string,
    sortType: PropTypes.string
}

function mapStateToProps(state) {
    return {
        detail: detailSelectors.getDetail(state),
        fqdn: detailSelectors.getFqdn(state),
        isLoading: detailSelectors.getIsLoading(state),
        sortKey: detailSelectors.getSortKey(state),
        sortType: detailSelectors.getSortType(state)
    }
}

export default connect(mapStateToProps)(Detail);