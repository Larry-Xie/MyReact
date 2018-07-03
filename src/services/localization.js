// Copyright © Citrix Systems, Inc.  All rights reserved.

import LocalizedStrings from 'react-localization';
import * as enLanguage from '../languages/en.json';

class LocalizationService {
    constructor() {
        this.languages = null;
        this.supportedLanguages = ['en'];
        this.initLanguage();
    }

    initLanguage() {
        const localLanguages = {
            en: enLanguage
        }
        this.languages = new LocalizedStrings(localLanguages);
    }

    // Force manually a particular language
    setLanguage(language) {
        if (this.supportedLanguages.includes(language)) {
            this.languages.setLanguage(language);
        }
    }

    // Get the current displayed language
    getLanguage() {
        return this.languages.getLanguage();
    }

    // Get string with paramaters, value is a object
    getString(string, value) {
        return this.languages.formatString(this.languages[string], value).join('');
    }
}

export default new LocalizationService();