// Copyright © Citrix Systems, Inc.  All rights reserved.

class EventsService {
    constructor() {
        this.APP_CLEAR = 'APP_CLEAR';
        this.APP_ERROR = 'APP_ERROR';
        this.APP_INFORMATION = 'APP_INFORMATION';
        this.APP_WARNING = 'APP_WARNING';
        this.NAVBAR_HIDE = 'NAVBAR_HIDE';
        this.NAVBAR_SHOW = 'NAVBAR_SHOW';
        this.RELOAD_PAGE = 'RELOAD_PAGE';
    }

    post(name, payload) {
        /* TODO: Use action to implement this function.
        this.$rootScope.$broadcast(name, payload); */
    }
}

export default new EventsService();