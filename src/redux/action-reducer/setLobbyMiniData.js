import { fromJS } from 'immutable';
import { SET_LOBBY_MINI_DATA } from '../constants';

const KEY = 'lobbyMini';

export const setLobbyMiniData = data => dispatch => dispatch({
  type: SET_LOBBY_MINI_DATA,
  data
});

export const reducer = (state, action) => {
  switch (action.type) {
  case SET_LOBBY_MINI_DATA:
    return state.setIn([KEY], fromJS(action.data));
  default:
    return state;
  }
}