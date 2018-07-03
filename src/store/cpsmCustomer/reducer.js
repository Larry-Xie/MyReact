// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    isLoading: true,
    customers: []
});

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.CPSM_CUSTOMER_REQUEST_DATA:
            return Object.assign({}, state, requestData());
        case types.CPSM_CUSTOMER_RECEIVE_DATA:
            return Object.assign({}, state, receiveData(action.data));
        case types.CPSM_CUSTOMER_REQUEST_ROW_DETAIL:
            return Object.assign({}, state, requestDetailData(state, action.customer));
        case types.CPSM_CUSTOMER_RECEIVE_ROW_DETAIL:
            return Object.assign({}, state, receiveDetailData(state, action.data));
        default:
            return state;
    }
}

export function getIsLoading(state) {
    return state.cpsmCustomer.isLoading;
}

export function getCustomers(state) {
    return state.cpsmCustomer.customers;
}

function requestData() {
    return {
        isLoading: true
    }
}

function receiveData(data) {
    return {
        isLoading: false,
        customers: data
    }
}

function requestDetailData(state, customer) {
    let newCustomers = [...state.customers];
    for (let i = 0; i < newCustomers.length; i++) {
        if (newCustomers[i].fqdn === customer.fqdn && newCustomers[i].cspId === customer.cspId &&
            newCustomers[i].customerName === customer.customerName && newCustomers[i].customerObjectId === customer.customerObjectId) {
            newCustomers[i].isLoading = true;
            break;    
        }
    }
    return {
        customers: newCustomers
    }
}

function receiveDetailData(state, data) {
    let newCustomers = [...state.customers];
    for (let i = 0; i < newCustomers.length; i++) {
        if (newCustomers[i].fqdn === data.fqdn && newCustomers[i].cspId === data.cspId &&
            newCustomers[i].customerName === data.customerName && newCustomers[i].customerObjectId === data.customerObjectId) {
                newCustomers[i].customerServicesUsage = data.customerServicesUsage;
                newCustomers[i].isLoading = false;
                break;
        }
    }
    return {
        customers: newCustomers
    }
}