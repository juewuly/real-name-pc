import initialState from './initialState';

import { reducer as updateGlobalData } from './action-reducer/common/updateGlobalData';
import { reducer as updatePopupData } from './action-reducer/h5Platform/updatePopupData';
import { reducer as setPopupData } from './action-reducer/h5Platform/setPopupData';
import { reducer as setLobbyData } from './action-reducer/lobby/setLobbyData';
import { reducer as setLobbyMiniData } from './action-reducer/lobbyMini/setLobbyMiniData';
import { reducer as updateRealNameData } from './action-reducer/h5Platform/updateRealNameData';
import { reducer as fetchRealName } from './action-reducer/h5Platform/fetchRealName';
import { reducer as addRealName } from './action-reducer/h5Platform/addRealName';

const allReducers = [
  updateGlobalData,
  updatePopupData,
  setPopupData,
  setLobbyData,
  setLobbyMiniData,
  updateRealNameData,
  fetchRealName,
  addRealName
];

export default function reducer(state=initialState, action) {
  let newState;
  switch (action.type) {
  // 其他类型的处理

  default:
    newState = state;
    break;
  }
  return allReducers.reduce((s, r) => r(s, action), newState);
}