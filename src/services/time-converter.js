// Copyright © Citrix Systems, Inc.  All rights reserved.

class TimeConverterService {
    //convert the timezone of browser to the timezone of server
    convertTimeZone(serverTime) {
        if (!!serverTime) {
            let reportedTime = new Date(serverTime);
            let timezoneOffsetLocal = -reportedTime.getTimezoneOffset() * 3600 * 1000 / 60;
            let timezoneOffsetServer = Number(serverTime.slice(-6, -5) + (3600 * 1000 * Number(serverTime.slice(-5, -3))
                + 1000 * 60 * Number(serverTime.slice(-2))));
            return new Date(reportedTime.setTime(reportedTime.getTime() - timezoneOffsetLocal + timezoneOffsetServer));
        }
    }
}

export default new TimeConverterService();