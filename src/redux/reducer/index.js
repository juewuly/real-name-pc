import initialState from '../initialState';

import commonReducers from './common';
import h5PlatformReducers from './h5Platform';
import lobbyReducers from './lobby';
import lobbyMiniReducers from './lobbyMini';

const allReducers = [
  ...commonReducers,
  ...h5PlatformReducers,
  ...lobbyReducers,
  ...lobbyMiniReducers
];

export default function reducer(state=initialState.initState, action) {
  let newState;
  switch (action.type) {
  // 其他类型的处理

  default:
    newState = state;
    break;
  }
  return allReducers.reduce((s, r) => r(s, action), newState);
}