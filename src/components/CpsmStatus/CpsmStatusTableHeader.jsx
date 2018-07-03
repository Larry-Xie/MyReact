// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CpsmStatusTableHeader.less';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import localization from '../../services/localization';

class CpsmStatusTableHeader extends Component {
    render() {
        const arrow = this.props.sortType === 'Ascend' ?
            <LuiIcon type="filter" color="white" className="table-header-arrow-up" /> :
            <LuiIcon type="filter" color="white" className="table-header-arrow-down" />;
        return (
            <div className="table-header">
                <div className="col-md-4 pointer" onClick={() => this.props.onClickSort('fqdn')}>
                    {localization.languages.Fqdn}
                    {this.props.sortKey === 'fqdn' ? arrow : null}
                </div>
                <div className="col-md-4 pointer" onClick={() => this.props.onClickSort('isReporting')}>
                    {localization.languages.Status}
                    {this.props.sortKey === 'isReporting' ? arrow : null}
                </div>
                <div className="col-md-4 pointer" onClick={() => this.props.onClickSort('modifiedDate')}>
                    {localization.languages.LastReported}
                    {this.props.sortKey === 'modifiedDate' ? arrow : null}
                </div>
            </div>
        )
    }
}

CpsmStatusTableHeader.propTypes = {
    onClickSort: PropTypes.func,
    sortKey: PropTypes.string,
    sortType: PropTypes.string
}

export default CpsmStatusTableHeader;