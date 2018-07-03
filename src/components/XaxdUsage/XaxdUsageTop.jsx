// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './XaxdUsageTop.less';
import localization from '../../services/localization';

class XaxdUsageTop extends Component {
    render() {
        const exportClass = classNames(
            { 'disabled': this.props.isEmpty || this.props.isLoading },
            'xaxd-usage-top-export'
        );
        return (
            /* TODO: Add dropdown */
            <div className="xaxd-usage-top-container">
                <div className={exportClass} onClick={() => this.props.onClick()}>{localization.languages.ExportToCsv}</div>
            </div>
        );
    }
}

XaxdUsageTop.propTypes = {
    isEmpty: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func
}

export default XaxdUsageTop;