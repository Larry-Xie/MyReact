// Copyright © Citrix Systems, Inc.  All rights reserved.

import moment from 'moment';

import timeConverterService from './time-converter';

const cpsmStatusData = {
    'customerId': 'chengeu81208',
    'orgId': 'int90f9e95b',
    'cpsmDeployments': [{
        'reportDate': '2018-03-27T02:52:24.5138500+00:00',
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'isReporting': true
    }, {
        'reportDate': '2018-03-26T02:52:24.5138500+00:00',
        'fqdn': 'cpsm-staging.labtest.com',
        'cspId': '02ae21c4-e2c2-4269-a089-1062da9ce155',
        'isReporting': true
    }]
};

const cpsmServicesData = {
    'customerId': 'chengeu81208',
    'orgId': 'int90f9e95b',
    'cpsmServicesUsage': [{
        'serviceName': 'ADSync',
        'serviceLabel': 'AD Sync',
        'unitOfConsumption': 'Instance',
        'totalUnitNumber': 2,
        'freeUnitNumber': 0,
        'paidUnitNumber': 2,
        'totalCustomerNumber': 2,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:52:21.6073993+00:00'
    }, {
        'serviceName': 'ADSync',
        'serviceLabel': 'AD Sync',
        'unitOfConsumption': 'User',
        'totalUnitNumber': 141,
        'freeUnitNumber': 0,
        'paidUnitNumber': 141,
        'totalCustomerNumber': 2,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:52:21.6073993+00:00'
    }, {
        'serviceName': 'HostedAppsandDesktops',
        'serviceLabel': 'Hosted Apps and Desktops',
        'unitOfConsumption': 'User',
        'totalUnitNumber': 153,
        'freeUnitNumber': 15,
        'paidUnitNumber': 138,
        'totalCustomerNumber': 4,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:52:21.6073993+00:00'
    }, {
        'serviceName': 'HE',
        'serviceLabel': 'Hosted Exchange',
        'unitOfConsumption': 'User',
        'totalUnitNumber': 301,
        'freeUnitNumber': 5,
        'paidUnitNumber': 296,
        'totalCustomerNumber': 5,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:52:21.6073993+00:00'
    }, {
        'serviceName': 'Office365',
        'serviceLabel': 'Office 365',
        'unitOfConsumption': 'User',
        'totalUnitNumber': 92,
        'freeUnitNumber': 5,
        'paidUnitNumber': 87,
        'totalCustomerNumber': 3,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:52:21.6073993+00:00'
    }, {
        'serviceName': 'ShareFile',
        'serviceLabel': 'ShareFile',
        'unitOfConsumption': 'User',
        'totalUnitNumber': 97,
        'freeUnitNumber': 10,
        'paidUnitNumber': 87,
        'totalCustomerNumber': 3,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:52:21.6073993+00:00'
    }, {
        'serviceName': 'LyncEnterprise2013',
        'serviceLabel': 'Skype For Business',
        'unitOfConsumption': 'User',
        'totalUnitNumber': 92,
        'freeUnitNumber': 5,
        'paidUnitNumber': 87,
        'totalCustomerNumber': 3,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:52:21.6073993+00:00'
    }]
};

const cpsmServiceDetailData = [{
        'customerName': 'Buckeye Optical',
        'customerObjectId': 53904,
        'totalUnitNumber': 78,
        'freeUnitNumber': 0,
        'paidUnitNumber': 78
    }, {
        'customerName': 'Demo customer',
        'customerObjectId': 53907,
        'totalUnitNumber': 5,
        'freeUnitNumber': 5,
        'paidUnitNumber': 0
    }, {
        'customerName': 'Famous Frames',
        'customerObjectId': 53903,
        'totalUnitNumber': 29,
        'freeUnitNumber': 0,
        'paidUnitNumber': 29
    }, {
        'customerName': 'Palm Accounting',
        'customerObjectId': 53901,
        'totalUnitNumber': 63,
        'freeUnitNumber': 0,
        'paidUnitNumber': 63
    }, {
        'customerName': 'Pyramid Vision Care',
        'customerObjectId': 53905,
        'totalUnitNumber': 126,
        'freeUnitNumber': 0,
        'paidUnitNumber': 126
    }
];

const cpsmCustomersData = {
    'customerId': 'chengeu81208',
    'orgId': 'int90f9e95b',
    'cpsmCustomersUsage': [{
        'customerName': 'BlueOptic Vision',
        'customerObjectId': 53902,
        'totalUnitNumber': 44,
        'freeUnitNumber': 0,
        'paidUnitNumber': 44,
        'totalServicesNumber': 1,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:53:08.0551117+00:00'
    }, {
        'customerName': 'Buckeye Optical',
        'customerObjectId': 53904,
        'totalUnitNumber': 157,
        'freeUnitNumber': 0,
        'paidUnitNumber': 157,
        'totalServicesNumber': 3,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:53:08.0551117+00:00'
    }, {
        'customerName': 'Demo customer',
        'customerObjectId': 53907,
        'totalUnitNumber': 35,
        'freeUnitNumber': 35,
        'paidUnitNumber': 0,
        'totalServicesNumber': 5,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:53:08.0551117+00:00'
    }, {
        'customerName': 'Famous Frames',
        'customerObjectId': 53903,
        'totalUnitNumber': 29,
        'freeUnitNumber': 0,
        'paidUnitNumber': 29,
        'totalServicesNumber': 1,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:53:08.0551117+00:00'
    }, {
        'customerName': 'Palm Accounting',
        'customerObjectId': 53901,
        'totalUnitNumber': 316,
        'freeUnitNumber': 0,
        'paidUnitNumber': 316,
        'totalServicesNumber': 6,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:53:08.0551117+00:00'
    }, {
        'customerName': 'Pyramid Vision Care',
        'customerObjectId': 53905,
        'totalUnitNumber': 241,
        'freeUnitNumber': 0,
        'paidUnitNumber': 241,
        'totalServicesNumber': 5,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:53:08.0551117+00:00'
    }, {
        'customerName': 'Taxbuster Financial Services',
        'customerObjectId': 53906,
        'totalUnitNumber': 56,
        'freeUnitNumber': 5,
        'paidUnitNumber': 51,
        'totalServicesNumber': 1,
        'fqdn': 'cpsm-production.csp.com',
        'cspId': '36c0f298-0834-4470-ab54-2e0a033a855d',
        'reportDate': '2018-03-27T02:53:08.0551117+00:00'
    }]
};

const cpsmCustomersDetailData = [{
        'serviceName': 'HostedAppsandDesktops',
        'serviceLabel': 'Hosted Apps and Desktops',
        'unitOfConsumption': 'User',
        'totalCustomerUsageNumber': 10,
        'freeCustomerUsageNumber': 10,
        'paidCustomerUsageNumber': 0
    }, {
        'serviceName': 'HE',
        'serviceLabel': 'Hosted Exchange',
        'unitOfConsumption': 'User',
        'totalCustomerUsageNumber': 5,
        'freeCustomerUsageNumber': 5,
        'paidCustomerUsageNumber': 0
    }, {
        'serviceName': 'Office365',
        'serviceLabel': 'Office 365',
        'unitOfConsumption': 'User',
        'totalCustomerUsageNumber': 5,
        'freeCustomerUsageNumber': 5,
        'paidCustomerUsageNumber': 0
    }, {
        'serviceName': 'ShareFile',
        'serviceLabel': 'ShareFile',
        'unitOfConsumption': 'User',
        'totalCustomerUsageNumber': 10,
        'freeCustomerUsageNumber': 10,
        'paidCustomerUsageNumber': 0
    }, {
        'serviceName': 'LyncEnterprise2013',
        'serviceLabel': 'Skype For Business',
        'unitOfConsumption': 'User',
        'totalCustomerUsageNumber': 5,
        'freeCustomerUsageNumber': 5,
        'paidCustomerUsageNumber': 0
    }
];

class CpsmService {
    getCpsmStatus() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._processStatusData(cpsmStatusData));
            }, 2000);
        });
    }

    getCpsmService() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._processServiceData(cpsmServicesData));
            }, 2000);
        });
    }

    getCpsmServiceDetail(service) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result = { ...service };
                result.serviceCustomersUsage = cpsmServiceDetailData;
                result.totalCustomerNumber = cpsmServiceDetailData.length;
                resolve(result);
            }, 2000);
        });
    }

    getCpsmCustomer() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._processCustomerData(cpsmCustomersData));
            }, 2000);
        });
    }

    getCpsmCustomerDetail(customer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result = { ...customer };
                result.customerServicesUsage = cpsmCustomersDetailData;
                result.totalServicesNumber = cpsmCustomersDetailData.length;
                resolve(result);
            }, 2000);
        });
    }

    _processStatusData(data) {
        let result = [];
        if (data && data.cpsmDeployments) {
            result = data.cpsmDeployments;
            for (let status of result) {
                status.modifiedDate = !status.reportDate ? null :
                    moment(timeConverterService.convertTimeZone(status.reportDate))
                    .format('MMM DD, YYYY HH:mm:ss').toString();
            }
        }
        return result;
    }

    _processServiceData(data) {
        let result = [];
        if (data && data.cpsmServicesUsage) {
            result = data.cpsmServicesUsage;
            for (let service of result) {
                service.isLoading = false;
                service.serviceCustomersUsage = null;
            }
        }
        return result;
    }

    _processCustomerData(data) {
        let result = [];
        if (data && data.cpsmCustomersUsage) {
            result = data.cpsmCustomersUsage;
            for (let service of result) {
                service.isLoading = false;
                service.customerServicesUsage = null;
            }
        }
        return result;
    }
}

export default new CpsmService();