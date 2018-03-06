// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import licensingService from '../../services/licensing';

function requestXaxdStatusData() {
    return ({
        type: types.XAXD_STATUS_REQUEST_DATA
    })
}

function receiveXaxdStatusData(data) {
    return ({
        type: types.XAXD_STATUS_RECEIVE_DATA,
        data: data
    })
}

export function fetchXaxdStatusData() {
    return async (dispatch) => {
        dispatch(requestXaxdStatusData());
        const data = await licensingService.getLicenseServer();
        return dispatch(receiveXaxdStatusData(data));
    }
}

export function sortBy(key) {
    return ({
        type: types.XAXD_STATUS_SORT,
        key
    })
}

export function changeLicenseServerType(hostId) {
    return ({
        type: types.XAXD_STATUS_LICENSE_SERVER_TYPE_CHANGED,
        hostId
    })
}