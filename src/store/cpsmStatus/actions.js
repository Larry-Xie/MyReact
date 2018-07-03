// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import cpsmService from '../../services/cpsm';

function requestCpsmStatusData() {
    return ({
        type: types.CPSM_STATUS_REQUEST_DATA
    })
}

function receiveCpsmStatusData(data) {
    return ({
        type: types.CPSM_STATUS_RECEIVE_DATA,
        data
    })
}

export function fetchCpsmStatusData() {
    return async (dispatch) => {
        dispatch(requestCpsmStatusData());
        const data = await cpsmService.getCpsmStatus();
        return dispatch(receiveCpsmStatusData(data));
    }
}

export function sortData(key) {
    return ({
        type: types.CPSM_STATUS_SORT,
        key
    })
}