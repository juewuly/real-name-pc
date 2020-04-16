import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import allReducer from '../redux/reducer';

const reducerMap = {
  router: routerReducer,
  data: allReducer
};

export default combineReducers(reducerMap);
