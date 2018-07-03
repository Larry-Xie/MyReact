// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import './DetailTableRow.less';
import LuiIcon from '../../common/LuiIcon/LuiIcon';
import localization from '../../services/localization';

class DetailTableRow extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = { isExpanding: false };
    }

    onClickExpand() {
        this.setState({ isExpanding: !this.state.isExpanding })
    }

    getSerialCell() {
        /* TODO: Add tooltip */
        return this.props.server.serialNumbersCount <= 1 ?
            <span title={this.props.server.serialNumbers[0]}>{this.props.server.serialNumbers[0]}</span> :
            <span title={localization.getString('SerialNumbers', {value: this.props.server.serialNumbersCount})}>
                {localization.getString('SerialNumbers', {value: this.props.server.serialNumbersCount})}
            </span>;
    }

    getExpireCell() {
        let content = null
        if (this.props.server.daysToExpire <= 0) {
            content = <React.Fragment>
                    <LuiIcon type="error" color="negative" />
                    <span className="detail-table-row-expire" title={localization.languages.Expired}>
                        {localization.languages.Expired}
                    </span>
                    <span className="detail-table-row-expire-days" title={localization.getString('DaysAgo', {day: -this.props.server.daysToExpire})}>
                        ({localization.getString('DaysAgo', {day: -this.props.server.daysToExpire})})
                    </span>
                </React.Fragment>
        } else if (this.props.server.daysToExpire <= 30) {
            content = <React.Fragment>
                    <LuiIcon type="warning" color="orange" />
                    <span className="detail-table-row-expire" title={this.props.server.expiredDate}>
                        {this.props.server.expiredDate}
                    </span>
                    <span className="detail-table-row-expire-days" title={localization.getString('DaysLeft', {day: this.props.server.daysToExpire})}>
                        ({localization.getString('DaysLeft', {day: this.props.server.daysToExpire})})
                    </span>
                </React.Fragment>
        } else {
            content = <span title={this.props.server.expiredDate}>{this.props.server.expiredDate}</span>;
        }
        return content;
    }

    getOpenCell() {
        return (
            <div className="detail-table-row-open-container">
                <div className="detail-table-row-open">
                    <div className="detail-table-row-open-product">
                        <div className="detail-table-row-open-title">{localization.languages.Products}</div>
                        {this.props.server.products.map((product, index) => 
                            <div className="detail-table-row-open-item" key={index} title={product}>{product}</div>
                        )}
                    </div>
                    <div className="detail-table-row-open-feature">
                        <div className="detail-table-row-open-title">{localization.languages.Features}</div>
                        {this.props.server.features.map((feature, index) => 
                            <div className="detail-table-row-open-item" key={index} title={feature}>{feature}</div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const detailRow = !this.state.isExpanding ? null : this.getOpenCell();
        const arrowIcon = this.state.isExpanding ? <LuiIcon type="arrow-down" /> : <LuiIcon type="arrow-right" />;
        return (
            <div>
                <div className="table-row">
                    <div className="col-md-2">
                        <span title={this.props.server.licenseName}>{this.props.server.licenseName}</span>
                    </div>
                    <div className="col-md-1">
                        <span title={this.props.server.productNumber}>{this.props.server.productNumber}</span>
                    </div>
                    <div className="col-md-3">{this.getSerialCell()}</div>
                    <div className="col-md-1">
                        <span title={this.props.server.featureNumber}>{this.props.server.featureNumber}</span>
                    </div>
                    <div className="col-md-2">
                        <span title={this.props.server.createDate}>{this.props.server.createDate}</span>
                    </div>
                    <div className="col-md-2">{this.getExpireCell()}</div>
                    <div className="col-md-1 right-text pointer" onClick={this.onClickExpand}>{arrowIcon}</div>
                </div>
                {detailRow}
            </div>
        );
    }
}

DetailTableRow.propTypes = {
    index: PropTypes.string,
    server: PropTypes.object
};

export default DetailTableRow;