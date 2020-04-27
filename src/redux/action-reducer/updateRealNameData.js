import { fromJS } from 'immutable';
import { UPDATE_REAL_NAME_DATA } from '../constants';

const KEY = 'realName';

export const updateRealNameData = data => dispatch => dispatch({
  type: UPDATE_REAL_NAME_DATA,
  data
});

export const reducer = (state, action) => {
  switch (action.type) {
  case UPDATE_REAL_NAME_DATA:
    return state.mergeIn([KEY], fromJS(action.data));
  default:
    return state;
  }
}