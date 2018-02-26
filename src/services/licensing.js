// Copyright © Citrix Systems, Inc.  All rights reserved.

function getLicenseServer() {
    const data = {
        "customerId": "xh0113b81208",
        "orgId": "int3746731a",
        "licenseServersStatus": [
            {
                "hostId": "CTXLIC1",
                "fqdn": "CTXLIC1.Baidu.com",
                "lastPhoningHomeTime": "12/30/2015 12:21:15",
                "isPhoningHome": true,
                "isFoundInBackOffice": true,
                "isEverReported": true,
                "isCompliant": true,
                "isLicenseServerFree": false,
                "isNonCspLicenseInstalled": false,
                "isCcu": false,
                "isExpired": false,
                "licenseExpirationDate": null,
                "daysToExpire": null,
                "ccuFeatureStatistics": null,
                "linkedCustomerList": null
            },
            {
                "hostId": "CTXLIC2",
                "fqdn": "CTXLIC2.Taobao.com",
                "lastPhoningHomeTime": "12/30/2015 10:21:15",
                "isPhoningHome": true,
                "isFoundInBackOffice": false,
                "isEverReported": true,
                "isCompliant": false,
                "isLicenseServerFree": false,
                "isNonCspLicenseInstalled": false,
                "isCcu": false,
                "isExpired": false,
                "licenseExpirationDate": null,
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