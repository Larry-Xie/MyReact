// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import cpsmService from '../../services/cpsm';

function requestCpsmCustomerData() {
    return ({
        type: types.CPSM_CUSTOMER_REQUEST_DATA
    })
}

function receiveCpsmCustomerData(data) {
    return ({
        type: types.CPSM_CUSTOMER_RECEIVE_DATA,
        data
    })
}

function requestCpsmCustomerDetailData(customer) {
    return ({
        type: types.CPSM_CUSTOMER_REQUEST_ROW_DETAIL,
        customer
    })
}

function receiveCpsmCustomerDetailData(data) {
    return ({
        type: types.CPSM_CUSTOMER_RECEIVE_ROW_DETAIL,
        data
    })
}

export function fetchCpsmCustomerData() {
    return async (dispatch) => {
        dispatch(requestCpsmCustomerData());
        const data = await cpsmService.getCpsmCustomer();
        return dispatch(receiveCpsmCustomerData(data));
    }
}

export function fetchCpsmCustomerDetailData(customer) {
    return async (dispatch) => {
        dispatch(requestCpsmCustomerDetailData(customer));
        const data = await cpsmService.getCpsmCustomerDetail(customer);
        return dispatch(receiveCpsmCustomerDetailData(data));
    }
}