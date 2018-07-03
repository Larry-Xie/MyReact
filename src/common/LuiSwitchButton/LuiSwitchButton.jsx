// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import './LuiSwitchButton.less';

class LuiSwitchButton extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    onToggleChange() {
        if (this.props.onToggle && typeof(this.props.onToggle) === 'function') {
            this.props.onToggle();
        }
    }

    render() {
        return (
            <div className="lui-switch-button-container">
                <input 
                    type="checkbox"
                    name="lui-switch-button"
                    className="lui-switch-button-checkbox"
                    checked={this.props.isChecked}
                    onChange={this.onToggleChange} />
                <label className="lui-switch-button-border" onClick={this.onToggleChange}>
                    <span className="lui-switch-button-inner-text"></span>
                    <span className="lui-switch-button-inner-switch"></span>
                </label>
            </div>
        )
    }
}

LuiSwitchButton.propTypes = {
    isChecked: PropTypes.bool,
    onToggle: PropTypes.func
}

LuiSwitchButton.defaultProps = {
    isChecked: false
}

export default LuiSwitchButton;