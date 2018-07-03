// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './XaxdStatusTableHeader.less';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import localization from '../../services/localization';

class XaxdStatusTableHeader extends Component {
    render() {
        const arrow = this.props.sortType === 'Ascend' ?
            <LuiIcon type="filter" color="white" className="table-header-arrow-up" /> :
            <LuiIcon type="filter" color="white" className="table-header-arrow-down" />;
        return (
            <div className="table-header">
                <div className="col-md-2 pointer" onClick={() => this.props.onClickSort('hostId')}>
                    {localization.languages.HostID}
                    {this.props.sortKey === 'hostId' ? arrow : null}
                </div>
                <div className="col-md-3 pointer" onClick={() => this.props.onClickSort('isPhoningHome')}>
                    {localization.languages.Status}
                    {this.props.sortKey === 'isPhoningHome' ? arrow : null}
                </div>
                <div className="col-md-2 pointer" onClick={() => this.props.onClickSort('fqdn')}>
                    {localization.languages.Fqdn}
                    {this.props.sortKey === 'fqdn' ? arrow : null}
                </div>
                <div className="col-md-3 pointer" onClick={() => this.props.onClickSort('modifiedDate')}>
                    {localization.languages.LastReported}
                    {this.props.sortKey === 'modifiedDate' ? arrow : null}
                </div>
                <div className="col-md-2">{localization.languages.Type}</div>
            </div>
        )
    }
}

XaxdStatusTableHeader.propTypes = {
    onClickSort: PropTypes.func,
    sortKey: PropTypes.string,
    sortType: PropTypes.string
}

export default XaxdStatusTableHeader;