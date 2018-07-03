// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

import netscalerService from '../../services/netscaler';

const initialState = Immutable({
    filter: '',
    filteredNetscaler: [],
    isLoading: true,
    netScalerDetails: [],
    sortKey: '',
    sortType: ''
});

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.NETSCALER_ALLOCATED_CHANGE_FILTER:
            return Object.assign({}, state, onFilterChange(state, action.filter))
        case types.NETSCALER_ALLOCATED_SORT:
            return Object.assign({}, state, onClickSort(state, action.key))
        case types.NETSCALER_ALLOCATED_REQUEST_DATA:
            return Object.assign({}, state, {isLoading: true})
        case types.NETSCALER_ALLOCATED_RECEIVE_DATA:
            return Object.assign({}, state, onReceiveData(action.data))
        case types.NETSCALER_ALLOCATED_EXPORT_CSV:
            return Object.assign({}, state, onExportCsv(state))
        default:
            return state;
    }
}

export function getFilter(state) {
    return state.netscalerAllocated.filter;
}

export function getFilteredNetscaler(state) {
    return state.netscalerAllocated.filteredNetscaler;
}

export function getNetScalerDetails(state) {
    return state.netscalerAllocated.netScalerDetails;
}

export function getIsLoading(state) {
    return state.netscalerAllocated.isLoading;
}

export function getSortKey(state) {
    return state.netscalerAllocated.sortKey;
}

export function getSortType(state) {
    return state.netscalerAllocated.sortType;
}

function onReceiveData(data) {
    return {
        filteredNetscaler: data,
        isLoading: false,
        netScalerDetails: data
    }
}

function onExportCsv(state) {
    netscalerService.exportNetscalerData(state.netScalerDetails);
}

function compareBy(key, toSortType) {
    if (toSortType === 'Ascend') {
        return function (a, b) {
            let comparison = 0;
            if (a[key] === null && b[key] === null) {
                comparison = 0;
            } else if (a[key] === null && b[key] !== null) {
                comparison = 1;
            } else if (a[key] !== null && b[key] === null) {
                comparison = -1;
            } else {
                comparison = a[key].toString().toLowerCase() > b[key].toString().toLowerCase() ? 1 : -1;
            }
            return comparison;
        };
    } else {
        return function (a, b) {
            let comparison = 0;
            if (a[key] === null && b[key] === null) {
                comparison = 0;
            } else if (a[key] === null && b[key] !== null) {
                comparison = 1;
            } else if (a[key] !== null && b[key] === null) {
                comparison = -1;
            } else {
                comparison = a[key].toString().toLowerCase() < b[key].toString().toLowerCase() ? 1 : -1;
            }
            return comparison;
        };
    }
}

function onClickSort(state, key) {
    let newNetScalerDetails = [...state.netScalerDetails];
    let newFilteredNetscaler = [...state.filteredNetscaler];
    let toSortType = (key === state.sortKey) && (state.sortType === 'Ascend') ? 'Descend' : 'Ascend';
    newNetScalerDetails.sort(compareBy(key, toSortType));
    newFilteredNetscaler.sort(compareBy(key, toSortType));
    return {
        filteredNetscaler: newFilteredNetscaler,
        netScalerDetails: newNetScalerDetails,
        sortKey: key,
        sortType: toSortType
    };
}

function onFilterChange(state, filter) {
    let newFilteredNetscaler = [];
    if (filter) {
        newFilteredNetscaler = state.netScalerDetails.filter((netscaler) => netscalerService.checkFilterNetscaler(netscaler, filter));
    } else {
        newFilteredNetscaler = state.netScalerDetails;
    }
    return {
        filter: filter,
        filteredNetscaler: newFilteredNetscaler
    };
}