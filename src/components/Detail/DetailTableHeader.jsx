// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DetailTableHeader.less';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import localization from '../../services/localization';

class DetailTableHeader extends Component {
    render() {
        const arrow = this.props.sortType === 'Ascend' ?
            <LuiIcon type="filter" color="white" className="table-header-arrow-up" /> :
            <LuiIcon type="filter" color="white" className="table-header-arrow-down" />;
        return (
            <div className="table-header">
                <div className="col-md-2 pointer" onClick={() => this.props.onClickSort('licenseName')}>
                    {localization.languages.LicenseFile}
                    {this.props.sortKey === 'licenseName' ? arrow : null}
                </div>
                <div className="col-md-1 pointer" onClick={() => this.props.onClickSort('productNumber')}>
                    {localization.languages.Products}
                    {this.props.sortKey === 'productNumber' ? arrow : null}
                </div>
                <div className="col-md-3">{localization.languages.SerialNumber}</div>
                <div className="col-md-1 pointer" onClick={() => this.props.onClickSort('featureNumber')}>
                    {localization.languages.Features}
                    {this.props.sortKey === 'featureNumber' ? arrow : null}
                </div>
                <div className="col-md-2 pointer" onClick={() => this.props.onClickSort('createDate')}>
                    {localization.languages.CreationDate}
                    {this.props.sortKey === 'createDate' ? arrow : null}
                </div>
                <div className="col-md-2 pointer" onClick={() => this.props.onClickSort('expiredDate')}>
                    {localization.languages.ExpirationDate}
                    {this.props.sortKey === 'expiredDate' ? arrow : null}
                </div>
            </div>
        )
    }
}

DetailTableHeader.propTypes = {
    onClickSort: PropTypes.func,
    sortKey: PropTypes.string,
    sortType: PropTypes.string
}


export default DetailTableHeader;