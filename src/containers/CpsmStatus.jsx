// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import * as cpsmStatusActions from '../store/cpsmStatus/actions';
import * as cpsmStatusSelectors from '../store/cpsmStatus/reducer';
import LuiSpinner from '../common/LuiSpinner/LuiSpinner';
import CpsmStatusTableHeader from '../components/CpsmStatus/CpsmStatusTableHeader';
import CpsmStatusTableRow from '../components/CpsmStatus/CpsmStatusTableRow';
import localization from '../services/localization';

class CpsmStatus extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        this.props.dispatch(cpsmStatusActions.fetchCpsmStatusData());
    }

    onClickSort(key) {
        this.props.dispatch(cpsmStatusActions.sortData(key));
    }

    render() {
        const content = !this.props.deployments || !this.props.deployments.length ?
            <div className="table-row">{localization.languages.NoDeployment}</div> :
            this.props.deployments.map((deployment, index) =>
                <CpsmStatusTableRow
                    key={index}
                    deployment={deployment} />
            );
        return (
            <div className="cpsm-status-container">
                {this.props.isLoading ? <LuiSpinner /> :
                    <React.Fragment>
                        <CpsmStatusTableHeader
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

CpsmStatus.propTypes = {
    isLoading: PropTypes.bool,
    deployments: PropTypes.array,
    sortKey: PropTypes.string,
    sortType: PropTypes.string
}

function mapStateToProps(state) {
    return {
        isLoading: cpsmStatusSelectors.getIsLoading(state),
        deployments: cpsmStatusSelectors.getDeployments(state),
        sortKey: cpsmStatusSelectors.getSortKey(state),
        sortType: cpsmStatusSelectors.getSortType(state)
    }
}

export default connect(mapStateToProps)(CpsmStatus);