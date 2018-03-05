// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import moment from 'moment';

import { timeZoneConverterService } from '../../services/time-converter';

const initialState = Immutable({
    isEmpty: false,
    servers: []
});

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.XAXD_STATUS_RECEIVE_DATA:
            return Object.assign({}, state, processStatusData(action.data))
        case types.XAXD_STATUS_LICENSE_SERVER_TYPE_CHANGED:
            return Object.assign({}, state)
        default:
            return state;
    }
}

export function getLicenseServer(state) {
    return state.xaxdStatus.servers;
}

export function getIsEmpty(state) {
    return state.xaxdStatus.isEmpty;
}

function processStatusData(data) {
    let licenseServers = data.licenseServersStatus;

    let willExpireList = [],
        hasExpiredList = [],
        featureIndex;

    for (let [index, server] of licenseServers.entries()) {
        server.modifiedDate = server.lastPhoningHomeTime &&
            moment(timeZoneConverterService.convertTimeZone(server.lastPhoningHomeTime))
            .format('MMM DD, YYYY HH:mm:ss').toString();

        server.infoCount = 0;
        server.showPhoningHomeWarning = false;
        server.willExpire = false;
        server.reportedInPast30Days = ((!!server.lastPhoningHomeTime) || (!!server.fqdn)) ? true : false;
        if (!server.isFoundInBackOffice) {
            server.infoCount++;
        }
        if ((!server.isPhoningHome) && (server.reportedInPast30Days)) {
            server.infoCount++;
            server.showPhoningHomeWarning = true;
        }
        if (server.isNonCspLicenseInstalled) {
            server.infoCount++;
        }
        if (server.isExpired && server.fqdn) {
            server.infoCount++;
            hasExpiredList.push(server.hostId);
        }
        if ((!server.isExpired) && (server.daysToExpire) && (server.daysToExpire <= 90) && (server.fqdn)) {
            server.willExpire = true;
            server.infoCount++;
        }
        if ((server.daysToExpire) && (server.daysToExpire <= 30) && (server.daysToExpire > 0) && (server.fqdn)) {
            willExpireList.push(server.hostId);
        }

        server.featureList = [0, 0, 0, 0, 0];
        if (server.isCcu && server.ccuFeatureStatistics) {
            server.ccuFeatureStatistics = filterFeatureId(server.ccuFeatureStatistics);
            for (let feature of server.ccuFeatureStatistics) {
                featureIndex = matchFeatureId(feature.featureId);
                server.featureList[featureIndex] = feature.usageCount;
                if (feature.usageCount > 0) {
                    server.infoCount++;
                }
            }
        }

        server.index = index;
    }

    // if (this.$state.includes('status')) {
    //     if (willExpireList.length === 1) {
    //         this.events.post(this.events.APP_WARNING, this.i18n.get('WillExpireBanner', { value: willExpireList[0]} ));
    //         this.events.post(this.events.NAVBAR_HIDE);
    //     } else if (willExpireList.length > 1) {
    //         this.events.post(this.events.APP_WARNING, this.i18n.get('WillExpireBannerMultiple'));
    //         this.events.post(this.events.NAVBAR_HIDE);
    //     }
    //     if (hasExpiredList.length === 1) {
    //         this.events.post(this.events.APP_ERROR, this.i18n.get('HasExpiredBanner', { value: hasExpiredList[0]} ));
    //         this.events.post(this.events.NAVBAR_HIDE);
    //     } else if (hasExpiredList.length > 1) {
    //         this.events.post(this.events.APP_ERROR, this.i18n.get('HasExpiredBannerMultiple'));
    //         this.events.post(this.events.NAVBAR_HIDE);
    //     }
    // }

    return {
        isEmpty: !licenseServers.length,
        servers: licenseServers
    };
}

/**
        TODO: Try to remove this function.
    **/
function matchFeatureId(featureName) {
    let featureIndex = 0;
    switch (featureName) {
        case 'MPS_ADV_CCU':
            featureIndex = 0;
            break;
        case 'MPS_PLT_CCU':
            featureIndex = 1;
            break;
        case 'XDS_PLT_CCS':
            featureIndex = 2;
            break;
        case 'XDS_STD_CCS':
            featureIndex = 3;
            break;
        default:
            featureIndex = 4;
    }
    return featureIndex;
}

function filterFeatureId(ccuFeatureStatistics) {
    var supportedFeatureIdList = ['MPS_ENT_CCU', 'MPS_ADV_CCU', 'MPS_PLT_CCU', 'XDS_PLT_CCS', 'XDS_STD_CCS'];
    var filteredList = ccuFeatureStatistics.filter((item) => supportedFeatureIdList.indexOf(item.featureId) !== -1);
    return filteredList;
}