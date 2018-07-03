// Copyright © Citrix Systems, Inc.  All rights reserved.

class CompareService {
    compareBy(key, toSortType) {
        if (toSortType === 'Ascend') {
            return function (a, b) {
                let comparison = 0;
                if (a[key] === null && b[key] === null) {
                    comparison = 0;
                } else if (a[key] === null && b[key] !== null) {
                    comparison = 1;
                } else if (a[key] !== null && b[key] === null) {
                    comparison = -1;
                } else {
                    comparison = a[key].toString().toLowerCase() > b[key].toString().toLowerCase() ? 1 : -1;
                }
                return comparison;
            };
        } else {
            return function (a, b) {
                let comparison = 0;
                if (a[key] === null && b[key] === null) {
                    comparison = 0;
                } else if (a[key] === null && b[key] !== null) {
                    comparison = 1;
                } else if (a[key] !== null && b[key] === null) {
                    comparison = -1;
                } else {
                    comparison = a[key].toString().toLowerCase() < b[key].toString().toLowerCase() ? 1 : -1;
                }
                return comparison;
            };
        }
    }
}

export default new CompareService();