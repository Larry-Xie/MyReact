// Copyright © Citrix Systems, Inc.  All rights reserved.

import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

import exportToCsvService from '../../services/export-csv';

const initialState = Immutable({
    isLoading: true,
    isExporting: false,
    isEmpty: false,
    featureLicenseServerUsage: [],
    selectedMonth: '03',
    selectedYear: '2018'
});

export default function reduce(state = initialState, action = {}) {
    switch(action.type) {
        case types.XAXD_USAGE_SORT:
            return Object.assign({}, state, sortBy(state, action.key));
        case types.XAXD_USAGE_REQUEST_DATA:
            return Object.assign({}, state, {isLoading: true});
        case types.XAXD_USAGE_REQUEST_EXPORT:
            return Object.assign({}, state, {isExporting: true});
        case types.XAXD_USAGE_RECEIVE_DATA:
            return Object.assign({}, state, processUsageData(action.data));
        case types.XAXD_USAGE_RECEIVE_EXPORT:
            return Object.assign({}, state, proccessExportData(action.data));
        default:
            return state;
    }
}

export function getLicenseUsage(state) {
    return state.xaxdUsage.featureLicenseServerUsage;
}

export function getIsExporting(state) {
    return state.xaxdUsage.isExporting;
}

export function getIsLoading(state) {
    return state.xaxdUsage.isLoading;
}

export function getIsEmpty(state) {
    return state.xaxdUsage.isEmpty;
}

function processUsageData(data) {
    let featureLicenseServerUsage = [];
    if (data && data.skus) {
        for (let sku of data.skus) {
            if (sku.features) {
                for (let feature of sku.features) {
                    // let licenseServerUsages = feature.licenseServerUsages;
                    let linkedCustomerUsages = feature.linkedCustomerUsages;

                    // feature.chartConfig = this._getChartConfig('fqdn', licenseServerUsages, chartConfigSample);
                    if (!linkedCustomerUsages || linkedCustomerUsages.length === 0) {
                        // feature.customerChart = true;
                    } else {
                        // feature.customerChartConfig = this._getChartConfig('customerNickName', linkedCustomerUsages, chartConfigSample);
                    }
                    feature.isOpen = false;
                    featureLicenseServerUsage.push(feature);
                }
            }
        }
    }

    return {
        isLoading: false,
        isEmpty: !featureLicenseServerUsage.length,
        featureLicenseServerUsage
    };
}

function proccessExportData(data) {
    let xaXdCompositeModel = data && data.licenseUsageProductCompositeModels
        && data.licenseUsageProductCompositeModels.filter((productCompositeModel) => {
            return productCompositeModel.productCategory.toLowerCase() === 'xenapp/xendesktop';
        });
    let variousSkus = xaXdCompositeModel && xaXdCompositeModel.length && xaXdCompositeModel[0].licenseUsageProductModels;
    exportToCsvService.csvExport(exportToCsv(variousSkus), 'recentMonthsData.csv');
}

function exportToCsv(arrayOfObjects) {
    let csvContent = '';
    let titleObject = {
        month: 'Month',
        totalUsers: 'TotalUsers',
        paidUsers: 'PaidUsers',
        freeUsers: 'FreeUsers',
        licenseServers: 'LicenseServersCount',
        customers: 'Customers'
    };
    let emptyMessage = {
        month: 'EmptyMessage',
        totalUsers: '',
        paidUsers: '',
        freeUsers: '',
        licenseServers: '',
        customers: ''
    };
    let productTitle = {
        month: '',
        totalUsers: '',
        paidUsers: '',
        freeUsers: '',
        licenseServers: '',
        customers: ''
    };
    let contentObject = {
        month: '',
        totalUsers: '',
        paidUsers: '',
        freeUsers: '',
        licenseServers: '',
        customers: ''
    };
    let itemDate = new Date();

    // When no sku is found
    if (!arrayOfObjects.length) {
        //headers
        csvContent += exportToCsvService.objectToCSVRow(titleObject);
        csvContent += exportToCsvService.objectToCSVRow(emptyMessage);
        csvContent = '"' + csvContent + '"';
        let csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csvContent);
        return csvData;
    }

    for (let objectItem of arrayOfObjects) {
        productTitle.month = objectItem.productName;
        csvContent += exportToCsvService.objectToCSVRow(productTitle);
        //headers
        csvContent += exportToCsvService.objectToCSVRow(titleObject);
        // When a sku has no history data
        if (!objectItem.licenseUsageMonthModels.length) {
            csvContent += exportToCsvService.objectToCSVRow(emptyMessage);
        } else {
            objectItem.licenseUsageMonthModels.forEach((item) => {
                itemDate = new Date(item.date);
                contentObject.month = itemDate.getFullYear() + '-' + ('0' + (itemDate.getMonth() + 1)).slice(-2);
                contentObject.totalUsers = item.totalUnit;
                contentObject.paidUsers = item.paidUnit;
                contentObject.freeUsers = item.freeUnit;
                contentObject.licenseServers = item.sourceCount;
                contentObject.customers = item.linkedCustomerCount || 0;
                csvContent += exportToCsvService.objectToCSVRow(contentObject);
            });
        }
    }
    return csvContent;
}

function compareBy(key) {
    return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    };
}

function sortBy(state, key) {
    let newUsage = [...state.featureLicenseServerUsage];
    newUsage.sort(compareBy(key));
    return { featureLicenseServerUsage: newUsage };
}

    // let baseDate = new Date();
    // this.monthRange = this.usersUtility.initMonthRange();
    // this.yearRange = this.usersUtility.initUsageYearRange();
    // this.selectedYear = baseDate.getFullYear();
    // this.selectedMonth = this.monthRange[baseDate.getMonth()];

        // this._clearState();
        // this._init();

    // toggleMonthDropdown() {
    //     this.clickedYear = false;
    //     this.clickedMonth = true;
    //     //If selectedYear is current year,just show the months from Jan to current month to be selected;else,show the whole 12 months
    //     if (this.selectedYear === new Date().getFullYear()) {
    //         this.monthRange = this.monthRange.splice(0, new Date().getMonth() + 1);
    //     } else {
    //         this.monthRange = this.usersUtility.initMonthRange();
    //     }
    // }

    // toggleYearDropdown() {
    //     this.clickedMonth = false;
    //     this.clickedYear = true;
    // }

    // selectMonth(index: number, event: any) {
    //     event.stopPropagation();
    //     this.selectedMonth = this.monthRange[index];
    //     this._selectDate();
    // }

    // selectYear(index: number, event: any) {
    //     event.stopPropagation();
    //     this.selectedYear = this.yearRange[index];
    //     //If selectedYear is current year,the selectedMonth is larger than current month,just show initial usage page data
    //     if (this.selectedYear === new Date().getFullYear() && this.monthRange.indexOf(this.selectedMonth) > new Date().getMonth()) {
    //         if (new Date().getDate() <= 10) {
    //             this.selectedYear = parseInt(this.dates[1].slice(0, 4), 10);
    //             this.selectedMonth = this.monthRange[this.dates[1].slice(5) - 1];
    //         } else {
    //             this.selectedMonth = this.monthRange[new Date().getMonth()];
    //         }
    //     }
    //     this._selectDate();
    // }

    // private _clearState() {
    //     this.isDataEmpty = false;
    //     this.isErrorSelectedDate = false;
    //     this.clickedMonth = false;
    //     this.clickedYear = false;
    // }

    // private _selectDate() {
    //     this.selectedDate = this.selectedYear + '-' + ('0' + (this.monthRange.indexOf(this.selectedMonth) + 1)).slice(-2);
    //     this.events.post(this.events.APP_CLEAR); //Clear The Notification.
    //     this.$state.go('report', { date: this.selectedDate });
    // }

    // private _init() {
    //     this.dates = this.usersUtility.initUsageDate();

    //     if (!!this.$stateParams.date) {
    //         this.selectedDate = this.$stateParams.date;
    //         this.selectedYear = parseInt(this.selectedDate.slice(0, 4), 10);
    //         this.selectedMonth = this.monthRange[parseInt(this.selectedDate.slice(5), 10) - 1];

    //         if (this.dates.indexOf(this.$stateParams.date) === -1) {
    //             //error: the selected date is not included on the whole date scope
    //             this.isDataEmpty = true;
    //             this.isErrorSelectedDate = true;
    //             return;
    //         }
    //     } else if (new Date().getDate() <= 10) {  // Before 10th day, report last month's data
    //         this.selectedDate = this.dates[1];
    //         this.selectedYear = parseInt(this.dates[1].slice(0, 4), 10);
    //         this.selectedMonth = this.monthRange[parseInt(this.dates[1].slice(5), 10) - 1];
    //     } else {
    //         this.selectedDate = this.dates[0];
    //     }
    //     this._getUsage();
    // }

    // private _getChartConfig(chartType, chartUsages, chartConfigSample) {
    //     let chartSeries = [],
    //         chartTitleCategories = [],
    //         free = { name: 'Free', data: [] },
    //         paid = { name: 'Paid', data: [] };

    //     for (let i = 0; i < chartUsages.length; i++) {
    //         chartTitleCategories.push(chartUsages[i][chartType]);
    //         free.data.push(chartUsages[i].freeUsersCount);
    //         paid.data.push(chartUsages[i].count - chartUsages[i].freeUsersCount);
    //     }
    //     chartSeries.push(free);
    //     chartSeries.push(paid);

    //     // deep copy
    //     let chartConfig = angular.copy(chartConfigSample);
    //     chartConfig.series = chartSeries;
    //     chartConfig.categories = chartTitleCategories;
    //     return chartConfig;
    // }
