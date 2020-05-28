import { fromJS } from 'immutable';
import { UPDATE_POPUP_DATA } from '../constants';
import { features } from 'sdk/config';

const statePath = [features.h5Platform, 'popup'];

export const updatePopupData = data => dispatch => dispatch({
  type: UPDATE_POPUP_DATA,
  data
});

export const reducer = (state, action) => {
  switch (action.type) {
  case UPDATE_POPUP_DATA:
    return state.mergeIn(statePath, fromJS(action.data));
  default:
    return state;
  }
}