// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import licensingService from '../../services/licensing';

// eslint-disable-next-line
function requestXaxdStatusData(xaxdStatus) {
    return ({
        type: types.XAXD_STATUS_REQUEST_DATA,
        xaxdStatus
    })
}

function receiveXaxdStatusData(xaxdStatus, data) {
    return ({
        type: types.XAXD_STATUS_RECEIVE_DATA,
        xaxdStatus,
        data: data
    })
}

export function fetchXaxdStatusData(xaxdStatus) {
    return (dispatch) => {
        const data = licensingService.getLicenseServer();
        return dispatch(receiveXaxdStatusData(xaxdStatus, data));
    }
}

export function changeLicenseServerType(licenseServer) {
    return ({
        type: types.XAXD_STATUS_LICENSE_SERVER_TYPE_CHANGED,
        licenseServer
    })
}