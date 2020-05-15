import { fromJS } from 'immutable';
import { SET_LOBBY_DATA } from '../constants';

const KEY = 'lobby';

export const setLobbyData = data => dispatch => dispatch({
  type: SET_LOBBY_DATA,
  data
});

export const reducer = (state, action) => {
  switch (action.type) {
  case SET_LOBBY_DATA:
    return state.setIn([KEY], fromJS(action.data));
  default:
    return state;
  }
}