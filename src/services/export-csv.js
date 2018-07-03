// Copyright © Citrix Systems, Inc.  All rights reserved.

class ExportCSVService {
    // Export csv content
    csvExport(csvContent, fileName) {
        csvContent = '"' + csvContent + '"';

        if (this._isIEBrowser() || this._isEdge()) {
            if (parseInt(navigator.userAgent.toLowerCase().split('msie')[1], 10) < 10) {
                let IEwindow = window.open('text/html', 'replace');
                IEwindow.document.write('sep=,\r\n' + csvContent);
                IEwindow.document.close();
                IEwindow.focus();
                IEwindow.document.execCommand('SaveAs', true, fileName);
                IEwindow.close();
                return;
            }
        }

        let blob = new Blob([csvContent], {type: 'text/csv'});
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, fileName);
        } else {
            let elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.setAttribute('download', fileName);
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    }

    // Convert simple data object to csv format string
    objectToCSVRow(dataObject) {
        let dataArray = [];
        for (let key of Object.keys(dataObject)) {
            let innerValue = dataObject[key] === null ? 'null' : dataObject[key];
            let result = innerValue.toString().trim().replace(/"/g, '""');
            dataArray.push(result);
        }
        return dataArray.join('","') + '"\r\n"';
    }

    // Check whether current browser is IE
    _isIEBrowser() {
        let myNav = navigator.userAgent.toLowerCase();
        return (myNav.includes('msie') || !!navigator.userAgent.match(/Trident.*rv\:11\./));
    }

    // Check whether current browser is Edge
    _isEdge() {
        return (/Edge/.test(navigator.userAgent));
    }
}

export default new ExportCSVService();