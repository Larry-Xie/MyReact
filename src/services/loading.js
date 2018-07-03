// Copyright © Citrix Systems, Inc.  All rights reserved.

class LoadingService {
    hideSpinner() {
        document.getElementById('cwc-loading').className = 'cwc-loading-done';
        document.getElementById('body-container').className = '';
    }

    showSpinner() {
        document.getElementById('cwc-loading').className = '';
        document.getElementById('body-container').className = 'cwc-loading-open';
    }
}

export default new LoadingService();