// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

import compareService from '../../services/compare';

const initialState = Immutable({
    detail: {},
    fqdn: '',
    isLoading: true,
    sortKey: '',
    sortType: ''
});

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.DETAIL_GET_FQDN:
            return Object.assign({}, state, getFqdnFromUrl(action.value));
        case types.DETAIL_LICENSE_SERVER_TYPE_CHANGED:
            return Object.assign({}, state, changeLicenseServerType(state));
        case types.DETAIL_REQUEST_DATA:
            return Object.assign({}, state, requestData());
        case types.DETAIL_RECEIVE_DATA:
            return Object.assign({}, state, receiveData(action.data));
        case types.DETAIL_SORT:
            return Object.assign({}, state, sortData(state, action.key));
        default:
            return state;
    }
}

export function getDetail(state) {
    return state.detail.detail;
}

export function getFqdn(state) {
    return state.detail.fqdn;
}

export function getIsLoading(state) {
    return state.detail.isLoading;
}

export function getSortKey(state) {
    return state.detail.sortKey;
}

export function getSortType(state) {
    return state.detail.sortType;
}

function changeLicenseServerType(state) {
    let newDetail = {...state.detail};
    newDetail.serverStatus.isLicenseServerFree = !newDetail.serverStatus.isLicenseServerFree;
    return {
        detail: newDetail
    }
}

function getFqdnFromUrl(value) {
    const fqdn = value.slice(value.indexOf('=') + 1);
    return {
        fqdn
    }
}

function requestData() {
    return {
        isLoading: true
    }
}

function receiveData(data) {
    return {
        isLoading: false,
        detail: data
    }
}

function sortData(state, key) {
    let newDetail = {...state.detail};
    let toSortType = (key === state.sortKey) && (state.sortType === 'Ascend') ? 'Descend' : 'Ascend';
    newDetail.serverLicenses.sort(compareService.compareBy(key, toSortType));
    return {
        detail: newDetail,
        sortKey: key,
        sortType: toSortType
    };
}