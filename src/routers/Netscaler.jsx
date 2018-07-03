// Copyright © Citrix Systems, Inc.  All rights reserved.
import React, { Component } from 'react';

import NetscalerAllocated from '../containers/NetscalerAllocated';

class Netscaler extends Component {
    render() {
        return (
            <div className="products-content-container">
                <NetscalerAllocated />
            </div>
        );
    }
}

export default Netscaler;