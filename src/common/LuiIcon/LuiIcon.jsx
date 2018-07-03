// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './LuiIcon.less';

class LuiIcon extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    onClick() {
        if (this.props.onClick && typeof(this.props.onClick) === 'function') {
            this.props.onClick();
        }
    }

    render() {
        const iconClass = classNames({
            'icon': true,
            'pointer': this.props.isEnabled,
            'disabled': this.props.isDisabled,
            [`${this.props.className}`]: !!this.props.className,
            [`icon-${this.props.type}`]: !!this.props.type,
            [`icon-size-${this.props.size}`]: !!this.props.size,
            [`icon-color-${this.props.color}`]: !!this.props.color
        })
        return (
            <div className={iconClass} onClick={this.onClick}></div>
        )
    }
}

LuiIcon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    isDisabled: PropTypes.bool,
    isEnabled: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string,
    type: PropTypes.string.isRequired
}

LuiIcon.defaultProps = {
    color: 'default',
    isDisabled: false,
    isEnabled: false,
    size: 'xs',
    type: 'tick'
}

export default LuiIcon;