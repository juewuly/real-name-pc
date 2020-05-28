import { fromJS } from 'immutable';
import { UPDATE_REAL_NAME_DATA } from '../constants';
import { features } from 'sdk/config';

const statePath = [features.h5Platform, 'realName'];

export const updateRealNameData = data => dispatch => dispatch({
  type: UPDATE_REAL_NAME_DATA,
  data
});

export const reducer = (state, action) => {
  switch (action.type) {
  case UPDATE_REAL_NAME_DATA:
    return state.mergeIn(statePath, fromJS(action.data));
  default:
    return state;
  }
}