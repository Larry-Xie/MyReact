// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';

import { licensing } from '../../services/licensing';
import { timeZoneConverterService } from '../../services/time-converter';
import './XaxdStatus.less';

const Row = ({ hostId, isPhoningHome, fqdn, modifiedDate, isLicenseServerFree }) => (
    <div className="table-row">
        <div>{hostId}</div>
        <div>{isPhoningHome}</div>
        <div>{fqdn}</div>
        <div>{modifiedDate}</div>
        <div>{isLicenseServerFree}</div>
    </div>
);

class XaxdStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmpty: false,
            servers: [],
        };
        this.compareBy.bind(this);
        this.sortBy.bind(this);
        this.processStatusData.bind(this);
    }

    componentWillMount() {
        const data = licensing.getLicenseServer();
        this.processStatusData(data);
    }

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    sortBy(key) {
        let arrayCopy = [...this.state.servers];
        arrayCopy.sort(this.compareBy(key));
        this.setState({ servers: arrayCopy });
    }

    processStatusData(data) {
        let licenseServers = data.licenseServersStatus;

        let willExpireList = [],
            hasExpiredList = [],
            featureIndex;

        for (let [index, server] of licenseServers.entries()) {
            /** TODO: There is an error with convertTimeZone function.
            server.modifiedDate = server.lastPhoningHomeTime ?
                timeZoneConverterService.convertTimeZone(server.lastPhoningHomeTime) : null;
            **/
            server.modifiedDate = server.lastPhoningHomeTime;

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
                server.ccuFeatureStatistics = this.filterFeatureId(server.ccuFeatureStatistics);
                for (let feature of server.ccuFeatureStatistics) {
                    featureIndex = this.matchFeatureId(feature.featureId);
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

        this.setState({
            isEmpty: !licenseServers.length,
            servers: licenseServers
        })
    }

    chooseFreeServer(row) {
        var self = this;
        if (!row.isLicenseServerFree) {
            return this.licensing.postFreeServer(row.fqdn).then(function () {
                for (var typeIndex = 0; typeIndex < self.servers.length; typeIndex++) {
                    if ((self.servers[typeIndex].fqdn === row.fqdn) && (self.servers[typeIndex].index !== row.index)) {
                        self.servers[typeIndex].isLicenseServerFree = true;
                    }
                }
            });
        } else {
            return this.licensing.deleteFreeServer(row.fqdn).then(function () {
                for (var typeIndex = 0; typeIndex < self.servers.length; typeIndex++) {
                    if ((self.servers[typeIndex].fqdn === row.fqdn) && (self.servers[typeIndex].index !== row.index)) {
                        self.servers[typeIndex].isLicenseServerFree = false;
                    }
                }
            });
        }
    }

    /**
        TODO: Try to remove this function.
    **/
    matchFeatureId(featureName) {
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

    filterFeatureId(ccuFeatureStatistics) {
        var supportedFeatureIdList = ['MPS_ENT_CCU', 'MPS_ADV_CCU', 'MPS_PLT_CCU', 'XDS_PLT_CCS', 'XDS_STD_CCS'];
        var filteredList = ccuFeatureStatistics.filter((item) => supportedFeatureIdList.indexOf(item.featureId) !== -1);
        return filteredList;
    }

    render() {
        const rows = this.state.servers.map((server) => <Row {...server} />);
        return (
            <div className="status-container">
                <div className="table-header">
                    <div onClick={() => this.sortBy('hostId')}>Host ID</div>
                    <div onClick={() => this.sortBy('isPhoningHome')}>Status</div>
                    <div onClick={() => this.sortBy('fqdn')}>FQDN</div>
                    <div onClick={() => this.sortBy('modifiedDate')}>Last Reported Date</div>
                    <div onClick={() => this.sortBy('isLicenseServerFree')}>Type</div>
                </div>
                {rows}
            </div>
        );
    }
}

export default XaxdStatus;