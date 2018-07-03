// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import xaxdService from '../../services/xaxd';

function requestXaxdUsageData() {
    return ({
        type: types.XAXD_USAGE_REQUEST_DATA
    });
}

function receiveXaxdUsageData(data) {
    return ({
        type: types.XAXD_USAGE_RECEIVE_DATA,
        data
    });
}

function requestXaxdUsageExportData() {
    return ({
        type: types.XAXD_USAGE_REQUEST_EXPORT
    });
}

function receiveXaxdUsageExportData(data) {
    return ({
        type: types.XAXD_USAGE_RECEIVE_EXPORT,
        data
    });
}

export function fetchXaxdUsageData() {
    return async (dispatch) => {
        dispatch(requestXaxdUsageData());
        const data = await xaxdService.getXaxdUsage();
        return dispatch(receiveXaxdUsageData(data));
    };
}

export function sortBy(key) {
    return ({
        type: types.XAXD_USAGE_SORT,
        key
    });
}

export function exportCSV() {
    return async (dispatch) => {
        dispatch(requestXaxdUsageExportData());
        const data = await xaxdService.getXaxdUsageExportation();
        return dispatch(receiveXaxdUsageExportData(data));
    };
}