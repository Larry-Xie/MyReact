// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import netscalerService from '../../services/netscaler';

function requestNetscalerAllocatedData() {
    return ({
        type: types.NETSCALER_ALLOCATED_REQUEST_DATA
    })
}

function receiveNetscalerAllocatedData(data) {
    return ({
        type: types.NETSCALER_ALLOCATED_RECEIVE_DATA,
        data: data
    })
}

export function fetchNetscalerAllocatedData() {
    return async (dispatch) => {
        dispatch(requestNetscalerAllocatedData());
        const data = await netscalerService.getNetscalerStatus();
        return dispatch(receiveNetscalerAllocatedData(data));
    }
}

export function sortBy(key) {
    return ({
        type: types.NETSCALER_ALLOCATED_SORT,
        key
    })
}

export function exportCSV() {
    return ({
        type: types.NETSCALER_ALLOCATED_EXPORT_CSV
    })
}

export function changeFilter(filter) {
    return ({
        type: types.NETSCALER_ALLOCATED_CHANGE_FILTER,
        filter
    })
}