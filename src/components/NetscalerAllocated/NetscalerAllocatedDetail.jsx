// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import './NetscalerAllocatedDetail.less';
import localization from '../../services/localization';

class NetscalerAllocatedDetail extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    getDetailRow(licenseModel, index) {
        const productNameText = licenseModel.productName ?
            <span className="netscaler-allocated-table-row-product-name-text" title={licenseModel.productName}>
                {licenseModel.productName}
            </span> :
            <span className="netscaler-allocated-table-row-product-name-text" title={localization.languages.NoProductName}>
                {localization.languages.NoProductName}
            </span>
        return (
            <React.Fragment key={index}>
                <div className="netscaler-allocated-detail-divider"></div>
                {productNameText}
                <div className="netscaler-allocated-detail-table-header">
                    {
                        !licenseModel.entitlementId ? null :
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 overflow-ellipsis">
                                {localization.languages.Serial}
                            </div>
                    }
                    {
                        !licenseModel.licenseExpirationDate ? null :
                            <div className="col-lg-1 col-md-3 col-sm-3 col-xs-3 overflow-ellipsis">
                                {localization.languages.Expiration}
                            </div>
                    }
                    {
                        !licenseModel.vpxMode ? null :
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-2 overflow-ellipsis">
                                {localization.languages.VpxMode}
                            </div>
                    }
                    {
                        !licenseModel.deploymentType ? null :
                            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 overflow-ellipsis">
                                {localization.languages.DeploymentMode}
                            </div>
                    }
                </div>
                <div className="netscaler-allocated-detail-table-body">
                    {
                        !licenseModel.entitlementId ? null :
                            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-4 overflow-ellipsis">
                                <span title={licenseModel.entitlementId}>{licenseModel.entitlementId}</span>
                            </div>
                    }
                    {
                        !licenseModel.licenseExpirationDate ? null :
                            <div className="col-lg-1 col-md-3 col-sm-3 col-xs-3 overflow-ellipsis">
                                <span title={licenseModel.licenseExpirationDate}>{licenseModel.licenseExpirationDate}</span>
                            </div>
                    }
                    {
                        !licenseModel.vpxMode ? null :
                            <div className="col-lg-1 col-md-2 col-sm-2 col-xs-2 overflow-ellipsis">
                                <span title={licenseModel.vpxMode}>{licenseModel.vpxMode}</span>
                            </div>
                    }
                    {
                        !licenseModel.deploymentType ? null :
                            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 overflow-ellipsis">
                                <span title={licenseModel.deploymentType}>{licenseModel.deploymentType}</span>
                            </div>
                    }
                </div>
            </React.Fragment>
        )
    }
    render() {
        const rows = this.props.netscaler.netScalerLicenseModels.map((licenseModel, index) => this.getDetailRow(licenseModel, index))
        return (
            <div className="netscaler-allocated-detail-container">
                {rows}
            </div>
        );
    }
}

NetscalerAllocatedDetail.propTypes = {
    netscaler: PropTypes.object
};

export default NetscalerAllocatedDetail;