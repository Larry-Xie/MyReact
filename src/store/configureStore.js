// Copyright © Citrix Systems, Inc.  All rights reserved.

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers';

export default function configureStore() {
    return createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));
}
