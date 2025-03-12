import {combineReducers, legacy_createStore} from 'redux';
import tenderReducer from './reducers/tenderReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  tender: tenderReducer,
  auth: authReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
