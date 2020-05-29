import { reducer as updatePopupData } from './action-reducer/h5Platform/updatePopupData';
import { reducer as setPopupData } from './action-reducer/h5Platform/setPopupData';
import { reducer as updateRealNameData } from './action-reducer/h5Platform/updateRealNameData';
import { reducer as fetchRealName } from './action-reducer/h5Platform/fetchRealName';
import { reducer as addRealName } from './action-reducer/h5Platform/addRealName';

export default [
  updatePopupData,
  setPopupData,
  updateRealNameData,
  fetchRealName,
  addRealName
];