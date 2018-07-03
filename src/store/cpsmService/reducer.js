// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    isLoading: true,
    services: []
});

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.CPSM_SERVICE_REQUEST_DATA:
            return Object.assign({}, state, requestData());
        case types.CPSM_SERVICE_RECEIVE_DATA:
            return Object.assign({}, state, receiveData(action.data));
        case types.CPSM_SERVICE_REQUEST_ROW_DETAIL:
            return Object.assign({}, state, requestDetailData(state, action.service));
        case types.CPSM_SERVICE_RECEIVE_ROW_DETAIL:
            return Object.assign({}, state, receiveDetailData(state, action.data));
        default:
            return state;
    }
}

export function getIsLoading(state) {
    return state.cpsmService.isLoading;
}

export function getServices(state) {
    return state.cpsmService.services;
}

function requestData() {
    return {
        isLoading: true
    }
}

function receiveData(data) {
    return {
        isLoading: false,
        services: data
    }
}

function requestDetailData(state, service) {
    let newServices = [...state.services];
    for (let i = 0; i < newServices.length; i++) {
        if (newServices[i].fqdn === service.fqdn && newServices[i].cspId === service.cspId &&
            newServices[i].serviceName === service.serviceName && newServices[i].unitOfConsumption === service.unitOfConsumption) {
            newServices[i].isLoading = true;
            break;    
        }
    }
    return {
        services: newServices
    }
}

function receiveDetailData(state, data) {
    let newServices = [...state.services];
    for (let i = 0; i < newServices.length; i++) {
        if (newServices[i].fqdn === data.fqdn && newServices[i].cspId === data.cspId &&
            newServices[i].serviceName === data.serviceName && newServices[i].unitOfConsumption === data.unitOfConsumption) {
                newServices[i].serviceCustomersUsage = data.serviceCustomersUsage;
                newServices[i].isLoading = false;
                break;
        }
    }
    return {
        services: newServices
    }
}