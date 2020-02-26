import { combineReducers } from 'redux';

import authReducer from './authReducer';

let rootReducer = combineReducers({ auth: authReducer });

export default rootReducer;