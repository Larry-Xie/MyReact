// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import xaxdService from '../../services/xaxd';

function requestXaxdStatusData() {
    return ({
        type: types.XAXD_STATUS_REQUEST_DATA
    })
}

function receiveXaxdStatusData(data) {
    return ({
        type: types.XAXD_STATUS_RECEIVE_DATA,
        data
    })
}

export function changeLicenseServerType(hostId) {
    return ({
        type: types.XAXD_STATUS_LICENSE_SERVER_TYPE_CHANGED,
        hostId
    })
}

export function fetchXaxdStatusData() {
    return async (dispatch) => {
        dispatch(requestXaxdStatusData());
        const data = await xaxdService.getXaxdStatus();
        return dispatch(receiveXaxdStatusData(data));
    }
}

export function sortData(key) {
    return ({
        type: types.XAXD_STATUS_SORT,
        key
    })
}