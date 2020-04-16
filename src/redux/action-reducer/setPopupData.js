import { fromJS } from 'immutable';
import { SET_POPUP_DATA } from '../constants';

const KEY = 'popup';

export const setPopupData = data => dispatch => dispatch({
  type: SET_POPUP_DATA,
  data
});

export const reducer = (state, action) => {
  switch (action.type) {
  case SET_POPUP_DATA:
    return state.setIn([KEY], fromJS(action.data));
  default:
    return state;
  }
}