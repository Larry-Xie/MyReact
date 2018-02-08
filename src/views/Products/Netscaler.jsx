// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';

import Allocated from '../Netscaler/Allocated';

class Netscaler extends Component {
    render() {
        return (
            <div className="products-content-container">
                <Allocated />
            </div>
        );
    }
}

export default Netscaler;