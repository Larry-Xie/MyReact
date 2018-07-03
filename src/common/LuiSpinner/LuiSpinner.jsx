// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './LuiSpinner.less';

class LuiSpinner extends Component {
    render() {
        const spinnerClass = classNames({
            'spinner-container': true,
            [`${this.props.className}`]: !!this.props.className,
            [`lui-spinner-${this.props.size}`]: !!this.props.size
        });
        return (
            <div className={spinnerClass}>
                <i className="spinner-circle"></i>
                <i className="spinner-segment"></i>
            </div>
        )
    }
}

LuiSpinner.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string
}

LuiSpinner.defaultProps = {
    size: 'medium'
}

export default LuiSpinner;