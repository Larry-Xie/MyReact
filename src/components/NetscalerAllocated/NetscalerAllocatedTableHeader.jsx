// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './NetscalerAllocatedTableHeader.less';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import localization from '../../services/localization';

class NetscalerAllocatedTableHeader extends Component {
    render() {
        const arrow = this.props.sortType === 'Ascend' ?
            <div className="table-header-arrow-up"><LuiIcon type="filter" /></div> :
            <div className="table-header-arrow-down"><LuiIcon type="filter" /></div>;
        return (
            <div className="netscaler-allocated-table-header">
                <div className="col-md-5 col-sm-4 col-xs-3 pointer" onClick={() => this.props.onClickSort('hostId')}>
                    {localization.languages.HostIDAndProductName}
                    {this.props.sortKey === 'hostId' ? arrow : ''}
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2 pointer" onClick={() => this.props.onClickSort('fqdn')}>
                    {localization.languages.NetScalerFqdn}
                    {this.props.sortKey === 'fqdn' ? arrow : ''}
                </div>
                <div className="col-md-2 col-sm-3 col-xs-4 pointer" onClick={() => this.props.onClickSort('isReporting')}>
                    {localization.languages.NetScalerStatus}
                    {this.props.sortKey === 'isReporting' ? arrow : ''}
                </div>
                <div className="col-md-2 col-sm-2 col-xs-2 pointer" onClick={() => this.props.onClickSort('localReportingDate')}>
                    {localization.languages.NetScalerLastReported}
                    {this.props.sortKey === 'localReportingDate' ? arrow : ''}
                </div>
                <div className="col-md-1 col-sm-1 col-xs-1"></div>
            </div>
        )
    }
}

NetscalerAllocatedTableHeader.propTypes = {
    onClickSort: PropTypes.func,
    sortKey: PropTypes.string,
    sortType: PropTypes.string
}

export default NetscalerAllocatedTableHeader;