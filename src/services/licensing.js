// Copyright © Citrix Systems, Inc.  All rights reserved.

const licenseServersData = {
    'customerId': 'xh0113b81208',
    'orgId': 'int3746731a',
    'licenseServersStatus': [{
            'ccuFeatureStatistics': null,
            'daysToExpire': 95,
            'fqdn': 'Csp4Sev1Pro.azxd77.local',
            'hostId': 'CSP4SEV1PRO',
            'isCcu': false,
            'isCompliant': false,
            'isEverReported': true,
            'isExpired': false,
            'isFoundInBackOffice': true,
            'isLicenseServerFree': false,
            'isNonCspLicenseInstalled': false,
            'isPhoningHome': false,
            'lastPhoningHomeTime': '2016-07-08T00:03:36.00-04:00',
            'licenseExpirationDate': '2018-06-03T00:00:00.00+00:00',
            'linkedCustomerList': null
        },
        {
            'hostId': 'CTXLIC1',
            'fqdn': 'CTXLIC1.Baidu.com',
            'lastPhoningHomeTime': '2016-05-06T00:03:36.00-04:00',
            'isPhoningHome': true,
            'isFoundInBackOffice': true,
            'isEverReported': true,
            'isCompliant': true,
            'isLicenseServerFree': false,
            'isNonCspLicenseInstalled': false,
            'isCcu': false,
            'isExpired': false,
            'licenseExpirationDate': '2016-05-01T00:03:36.00-04:00',
            'daysToExpire': null,
            'ccuFeatureStatistics': null,
            'linkedCustomerList': null,

        },
        {
            'hostId': 'CTXLIC2',
            'fqdn': 'CTXLIC2.Taobao.com',
            'lastPhoningHomeTime': '2016-09-09T00:03:36.00-04:00',
            'isPhoningHome': true,
            'isFoundInBackOffice': false,
            'isEverReported': true,
            'isCompliant': false,
            'isLicenseServerFree': false,
            'isNonCspLicenseInstalled': false,
            'isCcu': false,
            'isExpired': false,
            'licenseExpirationDate': '2016-09-01T00:03:36.00-04:00',
            'daysToExpire': null,
            'ccuFeatureStatistics': null,
            'linkedCustomerList': null
        }
    ]
};

const licenseUsageData = {
    'customerId': 'sample string 1',
    'orgId': 'sample string 2',
    'skus': [{
            'skuId': 'sample string 1',
            'skuDescription': 'sample string 2',
            'features': [{
                    'featureId': 'sample string 1',
                    'featureDescription': 'sample string 2',
                    'count': 3,
                    'freeUsersCount': 4,
                    'units': 'sample string 5',
                    'isUserList': true,
                    'licenseServerCount': 7,
                    'freeLicenseServerCount': 8,
                    'linkedCustomerCount': 9,
                    'freeLicenseServerHostIdsPia': [
                        'sample string 1',
                        'sample string 2'
                    ],
                    'licenseServerUsages': [{
                            'fqdn': 'sample string 1',
                            'count': 2,
                            'freeUsersCount': 3,
                            'reportingDate': '2018-02-28T02:45:18.5493869+00:00',
                            'isLicenseServerFree': true
                        },
                        {
                            'fqdn': 'sample string 1',
                            'count': 2,
                            'freeUsersCount': 3,
                            'reportingDate': '2018-02-28T02:45:18.5493869+00:00',
                            'isLicenseServerFree': true
                        }
                    ],
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
                },
                {
                    'featureId': 'sample string 1',
                    'featureDescription': 'sample string 2',
                    'count': 3,
                    'freeUsersCount': 4,
                    'units': 'sample string 5',
                    'isUserList': true,
                    'licenseServerCount': 7,
                    'freeLicenseServerCount': 8,
                    'linkedCustomerCount': 9,
                    'freeLicenseServerHostIdsPia': [
                        'sample string 1',
                        'sample string 2'
                    ],
                    'licenseServerUsages': [{
                            'fqdn': 'sample string 1',
                            'count': 2,
                            'freeUsersCount': 3,
                            'reportingDate': '2018-02-28T02:45:18.5493869+00:00',
                            'isLicenseServerFree': true
                        },
                        {
                            'fqdn': 'sample string 1',
                            'count': 2,
                            'freeUsersCount': 3,
                            'reportingDate': '2018-02-28T02:45:18.5493869+00:00',
                            'isLicenseServerFree': true
                        }
                    ],
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
                }
            ]
        },
        {
            'skuId': 'sample string 1',
            'skuDescription': 'sample string 2',
            'features': [{
                    'featureId': 'sample string 1',
                    'featureDescription': 'sample string 2',
                    'count': 3,
                    'freeUsersCount': 4,
                    'units': 'sample string 5',
                    'isUserList': true,
                    'licenseServerCount': 7,
                    'freeLicenseServerCount': 8,
                    'linkedCustomerCount': 9,
                    'freeLicenseServerHostIdsPia': [
                        'sample string 1',
                        'sample string 2'
                    ],
                    'licenseServerUsages': [{
                            'fqdn': 'sample string 1',
                            'count': 2,
                            'freeUsersCount': 3,
                            'reportingDate': '2018-02-28T02:45:18.5493869+00:00',
                            'isLicenseServerFree': true
                        },
                        {
                            'fqdn': 'sample string 1',
                            'count': 2,
                            'freeUsersCount': 3,
                            'reportingDate': '2018-02-28T02:45:18.5493869+00:00',
                            'isLicenseServerFree': true
                        }
                    ],
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
                },
                {
                    'featureId': 'sample string 1',
                    'featureDescription': 'sample string 2',
                    'count': 3,
                    'freeUsersCount': 4,
                    'units': 'sample string 5',
                    'isUserList': true,
                    'licenseServerCount': 7,
                    'freeLicenseServerCount': 8,
                    'linkedCustomerCount': 9,
                    'freeLicenseServerHostIdsPia': [
                        'sample string 1',
                        'sample string 2'
                    ],
                    'licenseServerUsages': [{
                            'fqdn': 'sample string 1',
                            'count': 2,
                            'freeUsersCount': 3,
                            'reportingDate': '2018-02-28T02:45:18.5493869+00:00',
                            'isLicenseServerFree': true
                        },
                        {
                            'fqdn': 'sample string 1',
                            'count': 2,
                            'freeUsersCount': 3,
                            'reportingDate': '2018-02-28T02:45:18.5493869+00:00',
                            'isLicenseServerFree': true
                        }
                    ],
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
                }
            ]
        }
    ]
}

class LicensingService {

    getLicenseServer() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(licenseServersData);
            }, 3000);
        })
    }
    
    getLicenseUsage() {
        return licenseUsageData;
    }

}


export default new LicensingService();