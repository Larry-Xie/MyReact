// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

import compareService from '../../services/compare';

const initialState = Immutable({
    isLoading: true,
    deployments: [],
    sortKey: '',
    sortType: ''
});

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.CPSM_STATUS_REQUEST_DATA:
            return Object.assign({}, state, requestData());
        case types.CPSM_STATUS_RECEIVE_DATA:
            return Object.assign({}, state, receiveData(action.data));
        case types.CPSM_STATUS_SORT:
            return Object.assign({}, state, sortData(state, action.key));
        default:
            return state;
    }
}

export function getIsLoading(state) {
    return state.cpsmStatus.isLoading;
}

export function getDeployments(state) {
    return state.cpsmStatus.deployments;
}

export function getSortKey(state) {
    return state.cpsmStatus.sortKey;
}

export function getSortType(state) {
    return state.cpsmStatus.sortType;
}

function requestData() {
    return {
        isLoading: true
    }
}

function receiveData(data) {
    return {
        isLoading: false,
        deployments: data
    }
}

function sortData(state, key) {
    let newDeployments = [...state.deployments];
    let toSortType = (key === state.sortKey) && (state.sortType === 'Ascend') ? 'Descend' : 'Ascend';
    newDeployments.sort(compareService.compareBy(key, toSortType));
    return {
        deployments: newDeployments,
        sortKey: key,
        sortType: toSortType
    };
}