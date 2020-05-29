import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import allReducer from 'src/redux/reducer';
import { ids } from 'sdk/config';

const reducerMap = {
  router: routerReducer,
  [ids.rootNodeOfStore]: allReducer
};

export default combineReducers(reducerMap);
