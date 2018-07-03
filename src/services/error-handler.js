// Copyright © Citrix Systems, Inc.  All rights reserved.

class ErrorHandlerService {
    showErrorMessage(message, incidentId) {
        window.postMessage({
            name: '$cwcNavbarShowError',
            message: {
                // text: this.i18n.get(message),
                incidentId: incidentId,
                date: new Date(),
                type: 'error',
                enableSupport: true
            }
        }, window.location.origin);
    }
}

export default new ErrorHandlerService();