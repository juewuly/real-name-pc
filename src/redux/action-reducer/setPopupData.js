import { fromJS } from 'immutable';
import { SET_POPUP_DATA } from '../constants';
import { features } from 'sdk/config';

const statePath = [features.h5Platform, 'popup'];

export const setPopupData = data => dispatch => dispatch({
  type: SET_POPUP_DATA,
  data
});

export const reducer = (state, action) => {
  switch (action.type) {
  case SET_POPUP_DATA:
    return state.setIn(statePath, fromJS(action.data));
  default:
    return state;
  }
}