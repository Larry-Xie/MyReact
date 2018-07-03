// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, {Component} from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import * as cpsmCustomerActions from '../store/cpsmCustomer/actions';
import * as cpsmCustomerSelectors from '../store/cpsmCustomer/reducer';
import LuiSpinner from '../common/LuiSpinner/LuiSpinner';
import CpsmCustomerTableRow from '../components/CpsmCustomer/CpsmCustomerTableRow';
import localization from '../services/localization';

class CpsmCustomer extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        this.props.dispatch(cpsmCustomerActions.fetchCpsmCustomerData());
    }

    fetchCpsmCustomerDetailData(customer) {
        this.props.dispatch(cpsmCustomerActions.fetchCpsmCustomerDetailData(customer));
    }

    render() {
        const tableBody = !this.props.customers.length ?
            <div className="table-row">{localization.languages.NoCustomer}</div> :
            this.props.customers.map((customer, index) =>
                <CpsmCustomerTableRow key={index} customer={customer} fetchData={() => this.fetchCpsmCustomerDetailData(customer)} />);

        return (
            <div className="cpsm-customer-container">
                {this.props.isLoading ? <LuiSpinner /> :
                    <React.Fragment>
                        <div className="table-header">
                            <div className="col-md-3">{localization.languages.Customers}</div>
                            <div className="col-md-2 right-text">{localization.languages.TotalUnits}</div>
                            <div className="col-md-2 right-text">{localization.languages.PaidUnits}</div>
                            <div className="col-md-2 right-text">{localization.languages.FreeUnits}</div>
                            <div className="col-md-2 right-text">{localization.languages.Services}</div>
                        </div>
                        {tableBody}
                    </React.Fragment>
                }
            </div>
        );
    }
}

CpsmCustomer.propTypes = {
    isLoading: PropTypes.bool,
    customers: PropTypes.array
}

// Always use selectors here and avoid accessing the state directly
function mapStateToProps(state) {
    return {
        isLoading: cpsmCustomerSelectors.getIsLoading(state),
        customers: cpsmCustomerSelectors.getCustomers(state)
    }
}

export default connect(mapStateToProps)(CpsmCustomer);