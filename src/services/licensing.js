// Copyright © Citrix Systems, Inc.  All rights reserved.

function getLicenseServer() {
    const data = {
        "customerId": "xh0113b81208",
        "orgId": "int3746731a",
        "licenseServersStatus": [
            {
                'ccuFeatureStatistics': null,
                'daysToExpire': 95,
                'fqdn': "Csp4Sev1Pro.azxd77.local",
                'hostId': "CSP4SEV1PRO",
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
                "hostId": "CTXLIC1",
                "fqdn": "CTXLIC1.Baidu.com",
                "lastPhoningHomeTime": "2016-05-06T00:03:36.00-04:00",
                "isPhoningHome": true,
                "isFoundInBackOffice": true,
                "isEverReported": true,
                "isCompliant": true,
                "isLicenseServerFree": false,
                "isNonCspLicenseInstalled": false,
                "isCcu": false,
                "isExpired": false,
                "licenseExpirationDate": '2016-05-01T00:03:36.00-04:00',
                "daysToExpire": null,
                "ccuFeatureStatistics": null,
                "linkedCustomerList": null,

            },
            {
                "hostId": "CTXLIC2",
                "fqdn": "CTXLIC2.Taobao.com",
                "lastPhoningHomeTime": "2016-09-09T00:03:36.00-04:00",
                "isPhoningHome": true,
                "isFoundInBackOffice": false,
                "isEverReported": true,
                "isCompliant": false,
                "isLicenseServerFree": false,
                "isNonCspLicenseInstalled": false,
                "isCcu": false,
                "isExpired": false,
                "licenseExpirationDate": '2016-09-01T00:03:36.00-04:00',
                "daysToExpire": null,
                "ccuFeatureStatistics": null,
                "linkedCustomerList": null
            }
        ]
    };
    return data;
}

export let licensing = {
    getLicenseServer: getLicenseServer
};