import initialState from './initialState';

import { reducer as updateGlobalData } from './action-reducer/updateGlobalData';
import { reducer as updatePopupData } from './action-reducer/updatePopupData';
import { reducer as setPopupData } from './action-reducer/setPopupData';

const allReducers = [
  updateGlobalData,
  updatePopupData,
  setPopupData
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