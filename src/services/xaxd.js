// Copyright © Citrix Systems, Inc.  All rights reserved.

import moment from 'moment';

import timeZoneConverterService from './time-converter';

const xaxdStatusData = {
    'customerId': 'chengeu81208',
    'orgId': 'int90f9e95b',
    'licenseServersStatus': [{
        'hostId': 'CTXSDEMO',
        'fqdn': 'ctxsdemo.demo.com',
        'lastPhoningHomeTime': '2018-03-27T11:12:04.00+00:00',
        'isPhoningHome': true,
        'isFoundInBackOffice': true,
        'isEverReported': true,
        'isCompliant': true,
        'isLicenseServerFree': false,
        'isNonCspLicenseInstalled': false,
        'isCcu': false,
        'isExpired': false,
        'licenseExpirationDate': '2018-07-27T00:00:00.00+00:00',
        'daysToExpire': 120,
        'ccuFeatureStatistics': null,
        'linkedCustomerList': [{
            customerId: 'customer1',
            customerOrgId: 'customer1',
            customerNickName: 'customer1',
            customerDisplayName: 'customer1',
            customerType: 'managed'
        }, {
            customerId: 'customer2',
            customerOrgId: 'customer2',
            customerNickName: 'customer2',
            customerDisplayName: 'customer2',
            customerType: 'hosted'
        }, {
            customerId: 'customer3',
            customerOrgId: 'customer3',
            customerNickName: 'customer3',
            customerDisplayName: 'customer3',
            customerType: 'lite'
        }, {
            customerId: 'customer4',
            customerOrgId: 'customer4',
            customerNickName: 'customer4',
            customerDisplayName: 'customer4',
            customerType: 'lite'
        }, {
            customerId: 'customer5',
            customerOrgId: 'customer5',
            customerNickName: 'customer5',
            customerDisplayName: 'customer5',
            customerType: 'managed'
        }]
    }, {
        'hostId': 'CTXSLAB1',
        'fqdn': 'ctxslab1.labtest.com',
        'lastPhoningHomeTime': '2018-03-28T04:39:50.00+00:00',
        'isPhoningHome': true,
        'isFoundInBackOffice': true,
        'isEverReported': true,
        'isCompliant': true,
        'isLicenseServerFree': false,
        'isNonCspLicenseInstalled': false,
        'isCcu': false,
        'isExpired': false,
        'licenseExpirationDate': '2018-07-27T00:00:00.00+00:00',
        'daysToExpire': 120,
        'ccuFeatureStatistics': null,
        'linkedCustomerList': []
    }, {
        'hostId': 'CTXSLAB2',
        'fqdn': 'ctxslab2.labtest.com',
        'lastPhoningHomeTime': '2018-03-09T04:39:50.00+00:00',
        'isPhoningHome': false,
        'isFoundInBackOffice': false,
        'isEverReported': true,
        'isCompliant': false,
        'isLicenseServerFree': false,
        'isNonCspLicenseInstalled': false,
        'isCcu': false,
        'isExpired': false,
        'licenseExpirationDate': '2018-04-18T00:00:00.00+00:00',
        'daysToExpire': 20,
        'ccuFeatureStatistics': null,
        'linkedCustomerList': []
    }, {
        'hostId': 'CTXSLIC1',
        'fqdn': 'ctxslic1.csp.com',
        'lastPhoningHomeTime': '2018-03-28T01:09:17.00+00:00',
        'isPhoningHome': true,
        'isFoundInBackOffice': true,
        'isEverReported': true,
        'isCompliant': true,
        'isLicenseServerFree': false,
        'isNonCspLicenseInstalled': false,
        'isCcu': true,
        'isExpired': false,
        'licenseExpirationDate': '2018-04-18T00:00:00.00+00:00',
        'daysToExpire': 20,
        'ccuFeatureStatistics': [{
            'featureId': 'MPS_ADV_CCU',
            'usageCount': 10
        }, {
            'featureId': 'MPS_ENT_CCU',
            'usageCount': 20
        }, {
            'featureId': 'MPS_PLT_CCU',
            'usageCount': 0
        }, {
            'featureId': 'XDS_PLT_CCS',
            'usageCount': 0
        }],
        'linkedCustomerList': [{
            customerId: 'customer2',
            customerOrgId: 'customer2',
            customerNickName: 'customer2',
            customerDisplayName: 'customer2',
            customerType: 'hosted'
        }, {
            customerId: 'customer4',
            customerOrgId: 'customer4',
            customerNickName: 'customer4',
            customerDisplayName: 'customer4',
            customerType: 'lite'
        }]
    }, {
        'hostId': 'CTXSLIC2',
        'fqdn': 'ctxslic2.tenant2.com',
        'lastPhoningHomeTime': '2018-03-28T10:26:51.00+00:00',
        'isPhoningHome': true,
        'isFoundInBackOffice': true,
        'isEverReported': true,
        'isCompliant': true,
        'isLicenseServerFree': false,
        'isNonCspLicenseInstalled': false,
        'isCcu': false,
        'isExpired': false,
        'licenseExpirationDate': '2018-06-17T00:00:00.00+00:00',
        'daysToExpire': 80,
        'ccuFeatureStatistics': null,
        'linkedCustomerList': []
    }, {
        'hostId': 'CTXSLIC3',
        'fqdn': null,
        'lastPhoningHomeTime': null,
        'isPhoningHome': false,
        'isFoundInBackOffice': true,
        'isEverReported': false,
        'isCompliant': false,
        'isLicenseServerFree': false,
        'isNonCspLicenseInstalled': false,
        'isCcu': false,
        'isExpired': false,
        'licenseExpirationDate': null,
        'daysToExpire': null,
        'ccuFeatureStatistics': null,
        'linkedCustomerList': null
    }, {
        'hostId': 'CTXSLIC4',
        'fqdn': 'ctxslic4.tenant4.com',
        'lastPhoningHomeTime': '2018-03-28T08:17:34.00+00:00',
        'isPhoningHome': true,
        'isFoundInBackOffice': true,
        'isEverReported': true,
        'isCompliant': true,
        'isLicenseServerFree': false,
        'isNonCspLicenseInstalled': false,
        'isCcu': false,
        'isExpired': false,
        'licenseExpirationDate': '2018-07-27T00:00:00.00+00:00',
        'daysToExpire': 120,
        'ccuFeatureStatistics': null,
        'linkedCustomerList': []
    }, {
        'hostId': 'CTXSLIC5',
        'fqdn': 'ctxslic5.tenant5.com',
        'lastPhoningHomeTime': '2018-03-28T05:41:18.00+00:00',
        'isPhoningHome': true,
        'isFoundInBackOffice': true,
        'isEverReported': true,
        'isCompliant': true,
        'isLicenseServerFree': false,
        'isNonCspLicenseInstalled': false,
        'isCcu': false,
        'isExpired': false,
        'licenseExpirationDate': '2018-07-27T00:00:00.00+00:00',
        'daysToExpire': 120,
        'ccuFeatureStatistics': null,
        'linkedCustomerList': [{
            customerId: 'customer4',
            customerOrgId: 'customer4',
            customerNickName: 'customer4',
            customerDisplayName: 'customer4',
            customerType: 'lite'
        }, {
            customerId: 'customer5',
            customerOrgId: 'customer5',
            customerNickName: 'customer5',
            customerDisplayName: 'customer5',
            customerType: 'managed'
        }]
    }, {
        'hostId': 'CTXVDILIC1',
        'fqdn': 'ctxvdilic1.vdi.net',
        'lastPhoningHomeTime': '2018-03-27T03:08:24.0000000+00:00',
        'isPhoningHome': true,
        'isFoundInBackOffice': true,
        'isEverReported': true,
        'isCompliant': true,
        'isLicenseServerFree': false,
        'isNonCspLicenseInstalled': false,
        'isCcu': true,
        'isExpired': false,
        'licenseExpirationDate': '2018-04-18T00:00:00.00+00:00',
        'daysToExpire': 20,
        'ccuFeatureStatistics': [{
            'featureId': 'XDS_STD_CCS',
            'usageCount': 20
        }],
        'linkedCustomerList': []
    }, {
        'hostId': 'CTXVDILIC2',
        'fqdn': 'ctxvdilic2.vdi2.com',
        'lastPhoningHomeTime': '2018-03-25T03:02:01.0000000+00:00',
        'isPhoningHome': true,
        'isFoundInBackOffice': true,
        'isEverReported': true,
        'isCompliant': true,
        'isLicenseServerFree': false,
        'isNonCspLicenseInstalled': false,
        'isCcu': false,
        'isExpired': false,
        'licenseExpirationDate': '2019-02-28T00:00:00.00+00:00',
        'daysToExpire': 336,
        'ccuFeatureStatistics': null,
        'linkedCustomerList': [{
            customerId: 'customer1',
            customerOrgId: 'customer1',
            customerNickName: 'customer1',
            customerDisplayName: 'customer1',
            customerType: 'managed'
        }, {
            customerId: 'customer3',
            customerOrgId: 'customer3',
            customerNickName: 'customer3',
            customerDisplayName: 'customer3',
            customerType: 'lite'
        }, {
            customerId: 'customer5',
            customerOrgId: 'customer5',
            customerNickName: 'customer5',
            customerDisplayName: 'customer5',
            customerType: 'managed'
        }]
    }]
};

const xaxdUsageData = {
    'customerId': 'chengeu81208',
    'orgId': 'int90f9e95b',
    'skus': [{
        'skuId': '000000000004013543',
        'skuDescription': 'Citrix XenDesktop VDI Edition Base for Service Providers',
        'features': [{
            'featureId': 'XDT_STD_UD',
            'featureDescription': 'VDI Edition',
            'count': 20,
            'freeUsersCount': 0,
            'units': 'users',
            'isUserList': true,
            'licenseServerCount': 1,
            'freeLicenseServerCount': 0,
            'linkedCustomerCount': 10,
            'freeLicenseServerHostIdsPia': [],
            'licenseServerUsages': [{
                'fqdn': 'ctxvdilic2.vdi2.com',
                'count': 20,
                'freeUsersCount': 0,
                'reportingDate': '0001-01-01T00:00:00',
                'isLicenseServerFree': false
            }],
            'linkedCustomerUsages': [{
                'isLinked': true,
                'customerOrgId': null,
                'customerId': 'b9e4c8c8-d416-4ca6-8bb4-d3c689fc9945',
                'customerNickName': 'Frames Optical',
                'customerType': 'Lite',
                'count': 10,
                'freeUsersCount': 10
            }, {
                'isLinked': true,
                'customerOrgId': null,
                'customerId': '0ca6ca50-eb07-4d1f-8308-af43afc2c176',
                'customerNickName': 'Cypress Vision',
                'customerType': 'Lite',
                'count': 13,
                'freeUsersCount': 13
            }, {
                'isLinked': true,
                'customerOrgId': null,
                'customerId': '2b474524-e859-458b-8d93-355362093cd1',
                'customerNickName': 'Palm Eyecare',
                'customerType': 'Lite',
                'count': 18,
                'freeUsersCount': 18
            }, {
                'isLinked': true,
                'customerOrgId': null,
                'customerId': '41006b68-6aa3-4cc0-a5de-6874f7a0a578',
                'customerNickName': 'Sun Frames',
                'customerType': 'Lite',
                'count': 38,
                'freeUsersCount': 38
            }, {
                'isLinked': true,
                'customerOrgId': '50986964',
                'customerId': 'acme',
                'customerNickName': 'Acme Worldwide',
                'customerType': 'Managed',
                'count': 3,
                'freeUsersCount': 3
            }, {
                'isLinked': true,
                'customerOrgId': null,
                'customerId': 'aff1bcfc-21af-4812-8b40-1c17c5a9a543',
                'customerNickName': 'AZ_Test',
                'customerType': 'Lite',
                'count': 1,
                'freeUsersCount': 1
            }, {
                'isLinked': true,
                'customerOrgId': null,
                'customerId': '365e71e6-b415-456e-b76e-b7d68a6c9714',
                'customerNickName': 'aaaa',
                'customerType': 'Lite',
                'count': 1,
                'freeUsersCount': 1
            }, {
                'isLinked': true,
                'customerOrgId': null,
                'customerId': 'cecaf81c-e7eb-4536-830c-dd3a55d68aa6',
                'customerNickName': 'asdad',
                'customerType': 'Lite',
                'count': 1,
                'freeUsersCount': 1
            }, {
                'isLinked': true,
                'customerOrgId': null,
                'customerId': '715ad48e-fad6-4fc4-8513-141982a06b2b',
                'customerNickName': 'aaa',
                'customerType': 'Lite',
                'count': 1,
                'freeUsersCount': 1
            }, {
                'isLinked': true,
                'customerOrgId': '51486223',
                'customerId': 'summitdemo20',
                'customerNickName': 'Summit Demo 2018',
                'customerType': 'Managed',
                'count': 1,
                'freeUsersCount': 1
            }, {
                'isLinked': false,
                'customerOrgId': null,
                'customerId': null,
                'customerNickName': null,
                'customerType': null,
                'count': 7,
                'freeUsersCount': 7
            }]
        }]
    }, {
        'skuId': 'ROYSPLACXDPREM',
        'skuDescription': 'Citrix XenApp/XenDesktop Premium for Service Providers',
        'features': [{
            'featureId': 'XDT_PLT_UD',
            'featureDescription': 'Premium',
            'count': 226,
            'freeUsersCount': 0,
            'units': 'users',
            'isUserList': true,
            'licenseServerCount': 5,
            'freeLicenseServerCount': 0,
            'linkedCustomerCount': 2,
            'freeLicenseServerHostIdsPia': [],
            'licenseServerUsages': [{
                'fqdn': 'ctxsdemo.demo.com',
                'count': 14,
                'freeUsersCount': 0,
                'reportingDate': '0001-01-01T00:00:00',
                'isLicenseServerFree': false
            }, {
                'fqdn': 'ctxslab1.labtest.com',
                'count': 20,
                'freeUsersCount': 0,
                'reportingDate': '0001-01-01T00:00:00',
                'isLicenseServerFree': false
            }, {
                'fqdn': 'ctxslic1.csp.com',
                'count': 89,
                'freeUsersCount': 0,
                'reportingDate': '0001-01-01T00:00:00',
                'isLicenseServerFree': false
            }, {
                'fqdn': 'ctxslic2.tenant2.com',
                'count': 82,
                'freeUsersCount': 0,
                'reportingDate': '0001-01-01T00:00:00',
                'isLicenseServerFree': false
            }, {
                'fqdn': 'ctxslic4.tenant4.com',
                'count': 21,
                'freeUsersCount': 0,
                'reportingDate': '0001-01-01T00:00:00',
                'isLicenseServerFree': false
            }],
            'linkedCustomerUsages': [{
                    'isLinked': true,
                    'customerOrgId': 'sample string 2',
                    'customerId': 'sample string 3',
                    'customerNickName': 'sample string 4',
                    'customerType': 'sample string 5',
                    'count': 6,
                    'freeUsersCount': 7
                },
                {
                    'isLinked': true,
                    'customerOrgId': 'sample string 2',
                    'customerId': 'sample string 3',
                    'customerNickName': 'sample string 4',
                    'customerType': 'sample string 5',
                    'count': 6,
                    'freeUsersCount': 7
                }
            ]
        }]
    }, {
        'skuId': 'ROYSPLACXABASE',
        'skuDescription': 'Citrix XenApp Base for Service Providers',
        'features': [{
            'featureId': 'XDT_ADV_UD',
            'featureDescription': 'Base',
            'count': 40,
            'freeUsersCount': 0,
            'units': 'users',
            'isUserList': true,
            'licenseServerCount': 2,
            'freeLicenseServerCount': 0,
            'linkedCustomerCount': 0,
            'freeLicenseServerHostIdsPia': [],
            'licenseServerUsages': [{
                'fqdn': 'ctxslab1.labtest.com',
                'count': 27,
                'freeUsersCount': 0,
                'reportingDate': '0001-01-01T00:00:00',
                'isLicenseServerFree': false
            }, {
                'fqdn': 'ctxslic5.tenant5.com',
                'count': 13,
                'freeUsersCount': 0,
                'reportingDate': '0001-01-01T00:00:00',
                'isLicenseServerFree': false
            }],
            'linkedCustomerUsages': [{
                'isLinked': false,
                'customerOrgId': null,
                'customerId': null,
                'customerNickName': null,
                'customerType': null,
                'count': 40,
                'freeUsersCount': 0
            }]
        }]
    }]
};

const xaxdUsageExportationData = {
    'customerId': 'xingqit48867',
    'orgId': '51093142',
    'licenseUsageProductCompositeModels': [{
        'productCategory': 'XenApp/XenDesktop',
        'licenseUsageProductModels': [{
            'productName': 'Premium',
            'licenseUsageMonthModels': [{
                'totalUnit': 94,
                'paidUnit': 0,
                'freeUnit': 94,
                'sourceCount': 1,
                'sourceUnit': 'License Servers',
                'date': '2018-03-01T00:00:00',
                'linkedCustomerCount': 10,
                'trend': 'Growth'
            }, {
                'totalUnit': 91,
                'paidUnit': 0,
                'freeUnit': 91,
                'sourceCount': 1,
                'sourceUnit': 'License Servers',
                'date': '2018-02-01T00:00:00',
                'linkedCustomerCount': 10,
                'trend': 'Growth'
            }]
        }, {
            'productName': 'Base',
            'licenseUsageMonthModels': [{
                'totalUnit': 0,
                'paidUnit': 0,
                'freeUnit': 0,
                'sourceCount': 0,
                'sourceUnit': 'License Servers',
                'date': '2018-03-01T00:00:00',
                'linkedCustomerCount': 0,
                'trend': 'Flat'
            }, {
                'totalUnit': 0,
                'paidUnit': 0,
                'freeUnit': 0,
                'sourceCount': 0,
                'sourceUnit': 'License Servers',
                'date': '2018-02-01T00:00:00',
                'linkedCustomerCount': 0,
                'trend': 'Flat'
            }]
        }]
    }]
};

const xaxdDetailData = {
    'serverName': 'ctxsdemo.demo.com',
    'serverStatus': {
        'hostId': 'CTXSDEMO',
        'fqdn': 'ctxsdemo.demo.com',
        'lastPhoningHomeTime': '2018-04-03T11:12:04.00+00:00',
        'isPhoningHome': true,
        'isFoundInBackOffice': false,
        'isEverReported': false,
        'isCompliant': false,
        'isLicenseServerFree': false,
        'isNonCspLicenseInstalled': false,
        'isCcu': false,
        'isExpired': false,
        'licenseExpirationDate': null,
        'daysToExpire': 120,
        'ccuFeatureStatistics': null,
        'linkedCustomerList': null
    },
    'serverLicenseCount': 2,
    'serverLicenses': [{
        'licenseName': 'LA-0002035197-43044',
        'products': ['XenApp Enterprise', 'SmartAuditor', 'Application Streaming for Desktops', 'Provisioning Services', 'Provisioning Server for Desktops', 'XenDesktop Enterprise', 'XenDesktop Platinum'],
        'serialNumbers': ['LA-0002035197-43044:FID__590bf1a9_15149fa839b__4cad'],
        'features': ['XenApp Enterprise|Concurrent', 'XenDesktop Platinum|User/Device'],
        'createDate': '2015-12-03 00:00:00',
        'expiredDate': '2018-03-03 00:00:00',
        'isExpire': true,
        'daysToExpire': -32
    }, {
        'licenseName': 'LA-0002094401-46365',
        'products': ['XenApp Enterprise', 'SmartAuditor', 'Application Streaming for Desktops', 'Provisioning Services', 'Provisioning Server for Desktops', 'XenDesktop Enterprise', 'XenDesktop Platinum'],
        'serialNumbers': ['LA-0002094401-46365:FID__26d05285_1539d9a29e5_fbc', 'LA-0002094401-46365:FID__26d05285_1539d9a29e5_mrp'],
        'features': ['XenDesktop Platinum|User/Device', 'XenDesktop VDI|Concurrent System', 'XenDesktop VDI|User/Device'],
        'createDate': '2016-04-05 00:00:00',
        'expiredDate': '2018-07-05 00:00:00',
        'isExpire': false,
        'daysToExpire': 91
    }]
};

class XaxdService {
    getXaxdStatus() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._processStatusData(xaxdStatusData));
            }, 2000);
        });
    }

    getXaxdUsage() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(xaxdUsageData);
            }, 2000);
        });
    }

    getXaxdUsageExportation() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(xaxdUsageExportationData);
            }, 2000);
        });
    }

    getXaxdDetail() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._processDetailData(xaxdDetailData));
            }, 2000);
        });
    }

    changeLicenseServerType(servers, hostId) {
        for (let server of servers) {
            if (server.hostId === hostId) {
                server.isLicenseServerFree = !server.isLicenseServerFree;
            }
        }
        return {
            servers: servers
        };
        // if (!row.isLicenseServerFree) {
        //     return licen.postFreeServer(row.fqdn).then(function () {
        //         for (let typeIndex = 0; typeIndex < self.servers.length; typeIndex++) {
        //             if ((self.servers[typeIndex].fqdn === row.fqdn) && (self.servers[typeIndex].index !== row.index)) {
        //                 self.servers[typeIndex].isLicenseServerFree = true;
        //             }
        //         }
        //     });
        // } else {
        //     return this.licensing.deleteFreeServer(row.fqdn).then(function () {
        //         for (let typeIndex = 0; typeIndex < self.servers.length; typeIndex++) {
        //             if ((self.servers[typeIndex].fqdn === row.fqdn) && (self.servers[typeIndex].index !== row.index)) {
        //                 self.servers[typeIndex].isLicenseServerFree = false;
        //             }
        //         }
        //     });
        // }
    }

    _processStatusData(data) {
        let licenseServers = data.licenseServersStatus;
        const featureLists = ['MPS_ADV_CCU', 'MPS_PLT_CCU', 'XDS_PLT_CCS', 'XDS_STD_CCS'];
        const supportedFeatureIdList = ['MPS_ENT_CCU', 'MPS_ADV_CCU', 'MPS_PLT_CCU', 'XDS_PLT_CCS', 'XDS_STD_CCS'];

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
                server.ccuFeatureStatistics = server.ccuFeatureStatistics.filter((item) => supportedFeatureIdList.includes(item.featureId));
                for (let feature of server.ccuFeatureStatistics) {
                    featureIndex = featureLists.indexOf(feature.featureId) !== -1 ? featureLists.indexOf(feature.featureId) : 4
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

        return licenseServers;
    }

    _processDetailData(data) {
        let serverDetail = data;
        serverDetail.serverStatus.lastPhoningHomeTime = serverDetail.serverStatus.lastPhoningHomeTime &&
            moment(timeZoneConverterService.convertTimeZone(serverDetail.serverStatus.lastPhoningHomeTime))
            .format('MMM DD, YYYY').toString();
        for (let license of serverDetail.serverLicenses) {
            license.productNumber = license.products.length;
            license.featureNumber = license.features.length;
            license.serialNumbersCount = license.serialNumbers.length;
            license.createDate = moment(license.createDate).format('MMM DD, YYYY').toString();
            license.expiredDate = moment(license.expiredDate).format('MMM DD, YYYY').toString();
        }
        return serverDetail;
    }
}


export default new XaxdService();