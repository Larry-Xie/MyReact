// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './NetscalerAllocatedTop.less';
import localization from '../../services/localization';
import LuiInputSearch from '../../common/LuiInputSearch/LuiInputSearch';

class NetscalerAllocatedTop extends Component {
    render() {
        const exportClass = classNames(
            { 'disable': this.props.isEmpty },
            'netscaler-allocated-top-export'
        );
        return (
            <div className="netscaler-allocated-top-container">
                <div className="netscaler-allocated-top-title">{localization.languages.NetScalerTitle}</div>
                <LuiInputSearch className="netscaler-allocated-top-input" value={this.props.value} isDisabled={this.props.isEmpty} onChange={this.props.onChange} placeholder={localization.languages.FilterNetScaler} />
                <div className={exportClass} onClick={() => this.props.onClickExport()}>{localization.languages.ExportToCsv}</div>
            </div>
        );
    }
}

NetscalerAllocatedTop.propTypes = {
    isEmpty: PropTypes.bool,
    onChange: PropTypes.func,
    onClickExport: PropTypes.func
}

export default NetscalerAllocatedTop;