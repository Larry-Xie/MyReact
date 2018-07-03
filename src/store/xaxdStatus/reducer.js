// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

import xaxdService from '../../services/xaxd';
import compareService from '../../services/compare';

const initialState = Immutable({
    isLoading: true,
    servers: [],
    sortKey: '',
    sortType: ''
});

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.XAXD_STATUS_LICENSE_SERVER_TYPE_CHANGED:
            return Object.assign({}, state, changeLicenseServerType(state, action.hostId));
        case types.XAXD_STATUS_REQUEST_DATA:
            return Object.assign({}, state, requestData());
        case types.XAXD_STATUS_RECEIVE_DATA:
            return Object.assign({}, state, receiveData(action.data));
        case types.XAXD_STATUS_SORT:
            return Object.assign({}, state, sortData(state, action.key));
        default:
            return state;
    }
}

export function getIsLoading(state) {
    return state.xaxdStatus.isLoading;
}

export function getServer(state) {
    return state.xaxdStatus.servers;
}

export function getSortKey(state) {
    return state.xaxdStatus.sortKey;
}

export function getSortType(state) {
    return state.xaxdStatus.sortType;
}

function changeLicenseServerType(state, hostId) {
    return xaxdService.changeLicenseServerType([...state.servers], hostId);
}

function requestData() {
    return {
        isLoading: true
    }
}

function receiveData(data) {
    return {
        isLoading: false,
        servers: data
    }
}

function sortData(state, key) {
    let newServers = [...state.servers];
    let toSortType = (key === state.sortKey) && (state.sortType === 'Ascend') ? 'Descend' : 'Ascend';
    newServers.sort(compareService.compareBy(key, toSortType));
    return {
        servers: newServers,
        sortKey: key,
        sortType: toSortType
    };
}