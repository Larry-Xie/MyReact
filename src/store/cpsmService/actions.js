// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import cpsmService from '../../services/cpsm';

function requestCpsmServiceData() {
    return ({
        type: types.CPSM_SERVICE_REQUEST_DATA
    })
}

function receiveCpsmServiceData(data) {
    return ({
        type: types.CPSM_SERVICE_RECEIVE_DATA,
        data
    })
}

function requestCpsmServiceDetailData(service) {
    return ({
        type: types.CPSM_SERVICE_REQUEST_ROW_DETAIL,
        service
    })
}

function receiveCpsmServiceDetailData(data) {
    return ({
        type: types.CPSM_SERVICE_RECEIVE_ROW_DETAIL,
        data
    })
}

export function fetchCpsmServiceData() {
    return async (dispatch) => {
        dispatch(requestCpsmServiceData());
        const data = await cpsmService.getCpsmService();
        return dispatch(receiveCpsmServiceData(data));
    }
}

export function fetchCpsmServiceDetailData(service) {
    return async (dispatch) => {
        dispatch(requestCpsmServiceDetailData(service));
        const data = await cpsmService.getCpsmServiceDetail(service);
        return dispatch(receiveCpsmServiceDetailData(data));
    }
}