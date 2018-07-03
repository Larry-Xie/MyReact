// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import xaxdService from '../../services/xaxd';

function requestDetailData() {
    return ({
        type: types.DETAIL_REQUEST_DATA
    })
}

function receiveDetailData(data) {
    return ({
        type: types.DETAIL_RECEIVE_DATA,
        data
    })
}

export function changeLicenseServerType() {
    return ({
        type: types.DETAIL_LICENSE_SERVER_TYPE_CHANGED
    })
}

export function fetchDetailData() {
    return async (dispatch) => {
        dispatch(requestDetailData());
        const data = await xaxdService.getXaxdDetail();
        return dispatch(receiveDetailData(data));
    }
}

export function getFqdnFromUrl(value) {
    return ({
        type: types.DETAIL_GET_FQDN,
        value
    })
}

export function sortData(key) {
    return ({
        type: types.DETAIL_SORT,
        key
    })
}