// Copyright © Citrix Systems, Inc.  All rights reserved.

//convert the timezone of browser to the timezone of server
function convertTimeZone(serverTime) {
    if (!!serverTime) {
        var reportedTime = new Date(serverTime);
        var timezoneOffsetLocal = -reportedTime.getTimezoneOffset() * 3600 * 1000 / 60;
        var timezoneOffsetServer = Number(serverTime.slice(-6, -5) + (3600 * 1000 * Number(serverTime.slice(-5, -3))
            + 1000 * 60 * Number(serverTime.slice(-2))));
        return new Date(reportedTime.setTime(reportedTime.getTime() - timezoneOffsetLocal + timezoneOffsetServer));
    }
}

export let timeZoneConverterService = {
    convertTimeZone: convertTimeZone
}