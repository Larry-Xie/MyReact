// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './LuiInputSearch.less';
import LuiIcon from '../LuiIcon/LuiIcon';

class LuiInputSearch extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    onInputChange(event) {
        if (this.props.onChange && typeof(this.props.onChange) === 'function' && event) {
            this.props.onChange(event.target.value.trim());
        }
    }

    render() {
        const inputClass = classNames(
            'lui-input-search-box',
            { 'disabled': this.props.isDisabled }
        );
        return (
            <div className={this.props.className}>
                <div className="lui-input-search-container">
                    <input type="text" className={inputClass}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        onChange={this.onInputChange} />
                    <LuiIcon type="search" isDisabled={this.props.isDisabled} className="lui-input-search-icon" />
                </div>
            </div>
        );
    }
}

LuiInputSearch.propTypes = {
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
}

export default LuiInputSearch;