// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './NetscalerAllocatedEmpty.less';
import localization from '../../services/localization';
import emptySvg from '../../common/svg/filter-no-result-found.svg';

class NetscalerAllocatedEmpty extends Component {
    render() {
        const title = this.props.isFilterEmpty ?
            localization.languages.NoNetScalerDetailsFilterResultFound :
            localization.languages.NoNetScalerDetailsAllocationDataFound;
        const content = this.props.isFilterEmpty ?
            localization.languages.NoNetScalerDetailsFilterResultFoundDetailOne :
            localization.languages.NetscalerNoDataInformation;
        return ( 
            <div className="netscaler-allocated-empty-container">
                <img className="netscaler-allocated-empty-icon" alt="empty" src={emptySvg} />
                <span className="netscaler-allocated-empty-title">{title}</span>
                <span className="netscaler-allocated-empty-content">{content}</span>
                {
                    !this.props.isFilterEmpty ? null :
                    <span className="netscaler-allocated-empty-content">
                        <a className="netscaler-allocated-empty-clear" onClick={() => this.props.onChange('')}>{localization.languages.NoNetScalerDetailsFilterResultFoundResetFilter} </a>
                        {localization.languages.NoNetScalerDetailsFilterResultFoundDetailTwo}
                    </span>
                }
            </div>
        );
    }
}

NetscalerAllocatedEmpty.propTypes = {
    isFilterEmpty: PropTypes.bool,
    onChange: PropTypes.func
}

export default NetscalerAllocatedEmpty;