// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import * as cpsmServiceActions from '../store/cpsmService/actions';
import * as cpsmServiceSelectors from '../store/cpsmService/reducer';
import LuiSpinner from '../common/LuiSpinner/LuiSpinner';
import CpsmServiceTableRow from '../components/CpsmService/CpsmServiceTableRow';
import localization from '../services/localization';

class CpsmService extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        this.props.dispatch(cpsmServiceActions.fetchCpsmServiceData());
    }

    fetchCpsmServiceDetailData(service) {
        this.props.dispatch(cpsmServiceActions.fetchCpsmServiceDetailData(service));
    }

    render() {
        const tableBody = !this.props.services.length ?
            <div className="table-row">{localization.languages.NoUser}</div> :
            this.props.services.map((service, index) =>
                <CpsmServiceTableRow key={index} service={service} fetchData={() => this.fetchCpsmServiceDetailData(service)} />);

        return (
            <div className="cpsm-service-container">
                {this.props.isLoading ? <LuiSpinner /> :
                    <React.Fragment>
                        <div className="table-header">
                            <div className="col-md-2">{localization.languages.Service}</div>
                            <div className="col-md-1 right-text">{localization.languages.ResourceUnit}</div>
                            <div className="col-md-2 right-text">{localization.languages.TotalUnits}</div>
                            <div className="col-md-2 right-text">{localization.languages.PaidUnits}</div>
                            <div className="col-md-2 right-text">{localization.languages.FreeUnits}</div>
                            <div className="col-md-2 right-text">{localization.languages.Customers}</div>
                        </div>
                        {tableBody}
                    </React.Fragment>
                }
            </div>
        );
    }
}

CpsmService.propTypes = {
    isLoading: PropTypes.bool,
    services: PropTypes.array
}

// Always use selectors here and avoid accessing the state directly
function mapStateToProps(state) {
    return {
        isLoading: cpsmServiceSelectors.getIsLoading(state),
        services: cpsmServiceSelectors.getServices(state)
    }
}

export default connect(mapStateToProps)(CpsmService);