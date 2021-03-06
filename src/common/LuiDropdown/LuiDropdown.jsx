// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

const DEFAULT_PLACEHOLDER_STRING = 'Select...'

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.value || {
                label: props.placeholder || DEFAULT_PLACEHOLDER_STRING,
                value: ''
            },
            isOpen: false
        };
        this.mounted = true;
        autoBind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.value && newProps.value !== this.state.selected) {
            this.setState({ selected: newProps.value })
        } else if (!newProps.value) {
            this.setState({
                selected: {
                    label: newProps.placeholder || DEFAULT_PLACEHOLDER_STRING,
                    value: ''
                }
            })
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick, false)
        document.addEventListener('touchend', this.handleDocumentClick, false)
    }

    componentWillUnmount() {
        this.mounted = false
        document.removeEventListener('click', this.handleDocumentClick, false)
        document.removeEventListener('touchend', this.handleDocumentClick, false)
    }

    handleMouseDown(event) {
        if (this.props.onFocus && typeof this.props.onFocus === 'function') {
            this.props.onFocus(this.state.isOpen)
        }
        if (event.type === 'mousedown' && event.button !== 0) return
        event.stopPropagation()
        event.preventDefault()

        if (!this.props.disabled) {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }

    setValue(value, label) {
        let newState = {
            selected: {
                value,
                label
            },
            isOpen: false
        }
        this.fireChangeEvent(newState)
        this.setState(newState)
    }

    fireChangeEvent(newState) {
        if (newState.selected !== this.state.selected && this.props.onChange) {
            this.props.onChange(newState.selected)
        }
    }

    renderOption(option) {
        const classes = {
            [`${this.props.baseClassName}-option`]: true,
            [option.className]: !!option.className,
            'is-selected': option === this.state.selected
        }

        const optionClass = classNames(classes)

        let value = option.value || option.label || option
        let label = option.label || option.value || option

        return (
            <div
                key={value}
                className={optionClass}
                onMouseDown={this.setValue.bind(this, value, label)}
                onClick={this.setValue.bind(this, value, label)}>
                {label}
            </div>
        )
    }

    buildMenu() {
        let { options, baseClassName } = this.props
        let ops = options.map((option) => {
            if (option.type === 'group') {
                let groupTitle = (<div className={`${baseClassName}-title`}>{option.name}</div>)
                let _options = option.items.map((item) => this.renderOption(item))

                return (
                    <div className={`${baseClassName}-group`} key={option.name}>
                        {groupTitle}
                        {_options}
                    </div>
                )
            } else {
                return this.renderOption(option)
            }
        })

        return ops.length ? ops : <div className={`${baseClassName}-noresults`}>No options found</div>
    }

    handleDocumentClick(event) {
        if (this.mounted) {
            if (!ReactDOM.findDOMNode(this).contains(event.target)) {
                if (this.state.isOpen) {
                    this.setState({ isOpen: false })
                }
            }
        }
    }

    render() {
        const { baseClassName, placeholderClassName, menuClassName, arrowClassName, className } = this.props

        const disabledClass = this.props.disabled ? 'Dropdown-disabled' : ''
        const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

        const dropdownClass = classNames({
            [`${baseClassName}-root`]: true,
            [className]: !!className,
            'is-open': this.state.isOpen
        })
        const placeholderClass = classNames({
            [`${baseClassName}-placeholder`]: true,
            [placeholderClassName]: !!placeholderClassName
        })
        const menuClass = classNames({
            [`${baseClassName}-menu`]: true,
            [menuClassName]: !!menuClassName
        })
        const arrowClass = classNames({
            [`${baseClassName}-arrow`]: true,
            [arrowClassName]: !!arrowClassName
        })

        const value = (<div className={placeholderClass}>{placeHolderValue}</div>)
        const menu = this.state.isOpen ? <div className={menuClass}>{this.buildMenu()}</div> : null

        return (
            <div className={dropdownClass}>
                <div className={`${baseClassName}-control ${disabledClass}`} onMouseDown={this.handleMouseDown.bind(this)} onTouchEnd={this.handleMouseDown.bind(this)}>
                    {value}
                    <span className={arrowClass} />
                </div>
                {menu}
            </div>
        )
    }
}

Dropdown.defaultProps = { baseClassName: 'Dropdown' }
export default Dropdown