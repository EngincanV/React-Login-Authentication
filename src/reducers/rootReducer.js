import { combineReducers } from 'redux';

import authReducer from './authReducer';

let rootReducer = combineReducers({ authReducer });

export default rootReducer;