// Copyright © Citrix Systems, Inc.  All rights reserved.

class UsersUtilityService {
    constructor() {
        this.dates = [];
        this.usageDates = [];
        this.yearRange = [];
        this.initDate();
        this.initUsageDate();
        this.initMonthRange();
        this.initUsageYearRange();
    }

    // Get previous six months.
    initDate() {
        if (this.dates.length) {
            return this.dates;
        }

        let month,
            year,
            baseDate = new Date();
        
        baseDate.setDate(1);

        for (let i = 0; i < 6; i++) {
            month = baseDate.getMonth() + 1;
            year = baseDate.getFullYear();
            this.dates.push(year + '-' + ('0' + month).slice(-2));
            baseDate.setMonth(baseDate.getMonth() - 1);
        }
        return this.dates;
    }

    // Get twelve months array.
    initMonthRange() {
        return [
            /* TODO: Uncomment when i18n is installed.
            this.i18n.get('Jan'),
            this.i18n.get('Feb'),
            this.i18n.get('Mar'),
            this.i18n.get('Apr'),
            this.i18n.get('May'),
            this.i18n.get('Jun'),
            this.i18n.get('Jul'),
            this.i18n.get('Aug'),
            this.i18n.get('Sep'),
            this.i18n.get('Oct'),
            this.i18n.get('Nov'),
            this.i18n.get('Dec') */
        ];
    }

    // Get years range.
    initUsageYearRange() {
        if (this.yearRange.length) {
            return this.yearRange;
        }

        let curYear = (new Date()).getFullYear();

        for (let year = 2016; year <= curYear; year++) {
            this.yearRange.push(year);
        }
        return this.yearRange;
    }

    // Get usage date range.
    initUsageDate() {
        if (this.usageDates.length) {
            return this.usageDates;
        }

        let baseDate = new Date(),
            curYear = baseDate.getFullYear(),
            curMonth = baseDate.getMonth() + 1;

        // Initial the date from 02/2016.
        for (let year = 2016; year <= curYear; year++) {
            let beginMonth = year === 2016 ? 2 : 1,
                endMonth = year === curYear ? curMonth : 12;
            for (let month = beginMonth; month <= endMonth; month++) {
                this.usageDates.push(year + '-' + ('0' + month).slice(-2));
            }
        }
        this.usageDates.reverse();
        return this.usageDates;
    }
}

export default new UsersUtilityService();