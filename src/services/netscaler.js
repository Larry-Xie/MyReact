// Copyright © Citrix Systems, Inc.  All rights reserved.

import moment from 'moment';

import exportService from './export-csv';
import localization from './localization';
import timeZoneConverterService from './time-converter';

const netscalerData = {
    'customerId': 'chengeu81208',
    'orgId': 'int90f9e95b',
    'netScalerCallingHomeDetails': [{
        'hostId': '000c29f992dd',
        'fqdn': 'ns-01',
        'serverGuid': '841aadc9-9984-11e7-a2d2-00155d010b40',
        'netScalerLicenseModels': [{
            'hostType': 'Ethernet',
            'localReportingDate': '2018-03-25T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 2000 - Platinum Edition',
            'licenseExpirationDate': '2018-03-01T00:00:00.00+00:00',
            'entitlementId': 'LA-2222178464-02222',
            'fulfillmentId': 'FID__2ed927a4_15246597509__2222',
            'deploymentType': 'HA Primary',
            'vpxMode': 'Active',
            'isExpired': true,
            'daysToExpire': -27,
            'isReporting': false,
            'latestReportingDate': '2018-03-25T00:00:00.00+00:00',
            'isFoundInBackOffice': true
        }]
    }, {
        'hostId': '000c2939d7d8',
        'fqdn': 'CSVpx-02',
        'serverGuid': '841aadc9-9984-11e7-a2d2-00155d010b40',
        'netScalerLicenseModels': [{
            'hostType': 'Ethernet',
            'localReportingDate': '2018-03-25T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 200 - Standard Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-3333178464-03333',
            'fulfillmentId': 'FID__333327a4_15246597509__3333',
            'deploymentType': 'HA Primary',
            'vpxMode': 'Active',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': false,
            'latestReportingDate': '2018-03-25T00:00:00.00+00:00',
            'isFoundInBackOffice': true
        }]
    }, {
        'hostId': '000c29e92c35',
        'fqdn': 'CSNETSC-03',
        'serverGuid': '841aadc9-9984-11e7-a2d2-00155d010b40',
        'netScalerLicenseModels': [{
            'hostType': null,
            'localReportingDate': '2018-03-25T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 50 - Standard Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-a234178464-0a234',
            'fulfillmentId': 'FID__56de27a4_15246597509__ade5',
            'deploymentType': 'HA Secondary',
            'vpxMode': 'Standby',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': false,
            'latestReportingDate': '2018-03-25T00:00:00.00+00:00',
            'isFoundInBackOffice': false
        }]
    }, {
        'hostId': '000c29fdc58e',
        'fqdn': 'CSNETSC-04',
        'serverGuid': '841aadc9-9984-11e7-a2d2-00155d010b40',
        'netScalerLicenseModels': [{
            'hostType': null,
            'localReportingDate': '2018-03-28T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 1000 - Enterprise Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-acde6445fd-01245',
            'fulfillmentId': 'FID__fdec27a4_15246597509__024f',
            'deploymentType': 'Standalone Primary',
            'vpxMode': 'Active',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': true,
            'latestReportingDate': '2018-03-28T00:00:00.00+00:00',
            'isFoundInBackOffice': false
        }]
    }, {
        'hostId': '00155d010b40',
        'fqdn': 'CSNETSC-05',
        'serverGuid': '841aadc9-9984-11e7-a2d2-00155d010b40',
        'netScalerLicenseModels': [{
            'hostType': 'Ethernet',
            'localReportingDate': '2018-03-28T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 1000 - Standard Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-ffcc6445fd-01245',
            'fulfillmentId': 'FID__fdec27a4_15246597509__adf5',
            'deploymentType': 'Cluster Node',
            'vpxMode': 'Active',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': true,
            'latestReportingDate': '2018-03-28T00:00:00.00+00:00',
            'isFoundInBackOffice': true
        }]
    }, {
        'hostId': '0050569336c9',
        'fqdn': 'CSNETSC-08',
        'serverGuid': 'af23adc9-9984-11e7-a2d2-00155d01af23',
        'netScalerLicenseModels': [{
            'hostType': 'Ethernet',
            'localReportingDate': '2018-03-28T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 1000 - Standard Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-ee0564adfe-01245',
            'fulfillmentId': 'FID__fdec27a4_15246597509__ee05',
            'deploymentType': 'HA Primary',
            'vpxMode': 'Active',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': true,
            'latestReportingDate': '2018-03-28T00:00:00.00+00:00',
            'isFoundInBackOffice': true
        }]
    }, {
        'hostId': '005056937fea',
        'fqdn': 'CSNETSC-10',
        'serverGuid': '841aadc9-9984-11e7-a2d2-00155d010b40',
        'netScalerLicenseModels': [{
            'hostType': 'Ethernet',
            'localReportingDate': '2018-03-28T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 1000 - Standard Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-ee0564adfe-01245',
            'fulfillmentId': 'FID__fdec27a4_15246597509__cc01',
            'deploymentType': 'HA Secondary',
            'vpxMode': 'Standby',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': true,
            'latestReportingDate': '2018-03-28T00:00:00.00+00:00',
            'isFoundInBackOffice': true
        }]
    }, {
        'hostId': '0129dd3532fb',
        'fqdn': 'CSNETSC-12',
        'serverGuid': '841aadc9-9984-11e7-a2d2-00155d010b40',
        'netScalerLicenseModels': [{
            'hostType': null,
            'localReportingDate': '2018-03-28T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 100 - Standard Edition',
            'licenseExpirationDate': '2018-02-28T02:32:09.00+00:00',
            'entitlementId': 'LA-673264adfe-01245',
            'fulfillmentId': 'FID__478627a4_15246597509__4786',
            'deploymentType': 'HA Secondary',
            'vpxMode': 'Standby',
            'isExpired': true,
            'daysToExpire': -28,
            'isReporting': true,
            'latestReportingDate': '2018-03-28T00:00:00.00+00:00',
            'isFoundInBackOffice': false
        }, {
            'hostType': null,
            'localReportingDate': '2018-03-28T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 50 - Enterprise Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-673264adfe-01245',
            'fulfillmentId': 'FID__fdec27a4_15246597509__897f',
            'deploymentType': 'HA Secondary',
            'vpxMode': 'Standby',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': true,
            'latestReportingDate': '2018-03-28T00:00:00.00+00:00',
            'isFoundInBackOffice': false
        }, {
            'hostType': 'Ethernet',
            'localReportingDate': '2018-03-28T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 50 - Standard Edition',
            'licenseExpirationDate': '2018-02-28T02:32:09.00+00:00',
            'entitlementId': 'LA-673264adfe-01245',
            'fulfillmentId': 'FID__fdec27a4_15246597509__fd46',
            'deploymentType': 'HA Secondary',
            'vpxMode': 'Standby',
            'isExpired': true,
            'daysToExpire': -28,
            'isReporting': true,
            'latestReportingDate': '2018-03-28T00:00:00.00+00:00',
            'isFoundInBackOffice': true
        }, {
            'hostType': 'Ethernet',
            'localReportingDate': '2018-03-25T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 1000 - Platinum Edition',
            'licenseExpirationDate': '2018-02-28T02:32:09.00+00:00',
            'entitlementId': 'LA-673264adfe-01245',
            'fulfillmentId': 'FID__45fe27a4_15246597509__ead1',
            'deploymentType': 'HA Secondary',
            'vpxMode': 'Standby',
            'isExpired': true,
            'daysToExpire': -28,
            'isReporting': false,
            'latestReportingDate': '2018-03-25T00:00:00.00+00:00',
            'isFoundInBackOffice': true
        }, {
            'hostType': null,
            'localReportingDate': '2018-03-25T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 1000 - Standard Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-673264adfe-01245',
            'fulfillmentId': 'FID__45fe27a4_15246597509__123e',
            'deploymentType': 'HA Secondary',
            'vpxMode': 'Standby',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': false,
            'latestReportingDate': '2018-03-25T00:00:00.00+00:00',
            'isFoundInBackOffice': false
        }, {
            'hostType': 'Ethernet',
            'localReportingDate': null,
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 1000 - Enterprise Edition',
            'licenseExpirationDate': '2018-04-28T00:00:00.00+00:00',
            'entitlementId': 'LA-673264adfe-01245',
            'fulfillmentId': 'FID__45fe27a4_15246597509__efc8',
            'deploymentType': null,
            'vpxMode': null,
            'isExpired': false,
            'daysToExpire': 30,
            'isReporting': false,
            'latestReportingDate': null,
            'isFoundInBackOffice': true
        }]
    }, {
        'hostId': '06d1db44636c',
        'fqdn': 'CSNETSC-17',
        'serverGuid': '841aadc9-9984-11e7-a2d2-00155d010b40',
        'netScalerLicenseModels': [{
            'hostType': 'Ethernet',
            'localReportingDate': '2018-03-28T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 1000 - Standard Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-dbe264adfe-0dbe2',
            'fulfillmentId': 'FID__90fe27a4_15246597509__dbe2',
            'deploymentType': 'HA Secondary',
            'vpxMode': 'Standby',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': true,
            'latestReportingDate': '2018-03-28T00:00:00.00+00:00',
            'isFoundInBackOffice': true
        }]
    }, {
        'hostId': '06d1db44636c',
        'fqdn': 'CSNETSC-18',
        'serverGuid': '5647edc9-9984-11e7-a2d2-00155d01ad46',
        'netScalerLicenseModels': [{
            'hostType': 'Ethernet',
            'localReportingDate': '2018-03-28T02:00:00.00+02:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 1000 - Standard Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-dbe264adfe-0dbe2',
            'fulfillmentId': 'FID__90fe27a4_15246597509__dbe2',
            'deploymentType': 'HA Secondary',
            'vpxMode': 'Standby',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': true,
            'latestReportingDate': '2018-03-28T00:00:00.00+00:00',
            'isFoundInBackOffice': true
        }]
    }, {
        'hostId': 'a686f574804a',
        'fqdn': 'CSNETSC-19',
        'serverGuid': '78baadc9-9984-11e7-a2d2-00155d0156ea',
        'netScalerLicenseModels': [{
            'hostType': 'Ethernet',
            'localReportingDate': '2018-03-28T08:00:00.00+00:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 1000 - Standard Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-58ff64adfe-0dbe2',
            'fulfillmentId': 'FID__90fe27a4_15246597509__58ff',
            'deploymentType': 'HA Secondary',
            'vpxMode': 'Standby',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': true,
            'latestReportingDate': '2018-03-28T00:00:00.00+00:00',
            'isFoundInBackOffice': true
        }]
    }, {
        'hostId': 'a68c1d5f35f7',
        'fqdn': 'CSNETSC-20',
        'serverGuid': '68ffdac9-9984-11e7-a2d2-00155d0178dc',
        'netScalerLicenseModels': [{
            'hostType': null,
            'localReportingDate': '2018-03-28T08:00:00.00+00:00',
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 1000 - Standard Edition',
            'licenseExpirationDate': '2019-03-29T00:00:00.00+00:00',
            'entitlementId': 'LA-97ea64adfe-0dbe2',
            'fulfillmentId': 'FID__90fe27a4_15246597509__97ea',
            'deploymentType': 'HA Secondary',
            'vpxMode': 'Standby',
            'isExpired': false,
            'daysToExpire': 365,
            'isReporting': true,
            'latestReportingDate': '2018-03-28T00:00:00.00+00:00',
            'isFoundInBackOffice': false
        }]
    }, {
        'hostId': '005056ab0097',
        'fqdn': null,
        'serverGuid': null,
        'netScalerLicenseModels': [{
            'hostType': 'Ethernet',
            'localReportingDate': null,
            'isPermanent': false,
            'productName': 'Citrix NetScaler VPX 2000 - Platinum Edition',
            'licenseExpirationDate': '2018-04-28T00:00:00.00+00:00',
            'entitlementId': 'LA-1111178464-01111',
            'fulfillmentId': 'FID__afe427a4_15246597509__afe4',
            'deploymentType': null,
            'vpxMode': null,
            'isExpired': false,
            'daysToExpire': 30,
            'isReporting': false,
            'latestReportingDate': null,
            'isFoundInBackOffice': true
        }]
    }]
};

class NetscalerService {
    _generateCsvContent(netScalerDetails) {
        // netscaler allocation details table header
        const netScalerDetailsTableHeaderContent = {
            hostId: localization.languages.HostID,
            productName: localization.languages.ProductNames,
            fqdn: localization.languages.NetScalerFqdnExportText,
            status: localization.languages.Status,
            localReported: localization.languages.LastReportedDate,
            serial: localization.languages.SerialExportText,
            expiration: localization.languages.ExpirationDate,
            vpxMode: localization.languages.VpxModeExportText,
            deploymentMode: localization.languages.DeploymentModeExportText
        };
        let csvContent = exportService.objectToCSVRow(netScalerDetailsTableHeaderContent);

        // If the netscaler allocation details table is empty
        if (!netScalerDetails.length) {
            const emptyTableBodyContent = {
                noDataFound: localization.languages.NoNetScalerDetailsFound
            };
            csvContent += exportService.objectToCSVRow(emptyTableBodyContent);
        } else {
            for (const netScalerDetail of netScalerDetails) {
                for (const netScalerLicenseModel of netScalerDetail.netScalerLicenseModels) {
                    const netScalerItem = {
                        hostId: netScalerDetail.hostId,
                        productName: netScalerLicenseModel.productName || localization.languages.NoProductName,
                        fqdn: netScalerDetail.fqdn || '',
                        status: netScalerLicenseModel.isReporting ? localization.languages.Reporting : localization.languages.NotReporting,
                        localReported: netScalerDetail.localReportingDate || '',
                        serial: netScalerLicenseModel.entitlementId || '',
                        expiration: netScalerLicenseModel.licenseExpirationDate || '',
                        vpxMode: netScalerLicenseModel.vpxMode || '',
                        deploymentMode: netScalerLicenseModel.deploymentType || ''
                    };
                    csvContent += exportService.objectToCSVRow(netScalerItem);
                }
            }
        }

        return csvContent;
    }

    _handleNetScalerDetails(netScalerDetails) {
        for (let netScalerDetail of netScalerDetails) {
            Object.assign(netScalerDetail, netScalerDetail.netScalerLicenseModels[0]);
            // Take both of 'isReporting', 'isFoundInBackOffice' to form reporting status
            netScalerDetail.reportingStatus = netScalerDetail.isReporting ? 'Reporting' : 'Not Reporting';
            // Showing server local time
            netScalerDetail.localReportingDate = moment(timeZoneConverterService.convertTimeZone(netScalerDetail.localReportingDate))
                .format('MMM DD, YYYY HH:mm:ss').toString();

            // Showing different warning messages
            netScalerDetail.warningCount = {
                notFoundInBackOfficeCount: 0,
                isExpiredCount: 0
            };
            for (let netScalerLicenseDetail of netScalerDetail.netScalerLicenseModels) {
                if (!netScalerLicenseDetail.isFoundInBackOffice) {
                    netScalerDetail.warningCount.notFoundInBackOfficeCount++;
                    if (netScalerDetail.isReporting) {
                        netScalerDetail.reportingStatus = 'Reporting but Warning';
                    }
                }
                if (netScalerLicenseDetail.isExpired) {
                    netScalerDetail.warningCount.isExpiredCount++;
                    if (netScalerDetail.isReporting) {
                        netScalerDetail.reportingStatus = 'Reporting but Warning';
                    }
                }
                // Showing server local time
                netScalerLicenseDetail.licenseExpirationDate = moment(timeZoneConverterService.convertTimeZone(netScalerLicenseDetail.licenseExpirationDate))
                    .format('MMM DD, YYYY').toString();
            }
        }
        return netScalerDetails;
    }

    // Fetch the netscaler data from api.
    getNetscalerStatus() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._handleNetScalerDetails(netscalerData.netScalerCallingHomeDetails));
            }, 2000);
        });
    }

    // Export all netscaler detail data.
    exportNetscalerData(netScalerDetails) {
        const netScalerDetailsCsvContent = this._generateCsvContent(netScalerDetails);
        exportService.csvExport(netScalerDetailsCsvContent, 'netScalerDetails.csv');
    }

    // Return true when the netscaler includes the filter string.
    checkFilterNetscaler(netscaler, filter) {
        if (filter && netscaler) {
            // Find matched netScaler details by hostId
            if (netscaler.hostId && netscaler.hostId.toLowerCase().includes(filter.toLowerCase())) {
                return true;
            }
            // Find matched netscaler details by productName
            for (const netScalerLicenseModel of netscaler.netScalerLicenseModels) {
                if (netScalerLicenseModel.productName &&
                    netScalerLicenseModel.productName.toLowerCase().includes(filter.toLowerCase())) {
                    return true;
                }
            }
        }
        return false;
    }
}

export default new NetscalerService();