import { reducer as updatePopupData } from 'src/redux/action-reducer/h5Platform/updatePopupData';
import { reducer as setPopupData } from 'src/redux/action-reducer/h5Platform/setPopupData';
import { reducer as updateRealNameData } from 'src/redux/action-reducer/h5Platform/updateRealNameData';
import { reducer as fetchRealName } from 'src/redux/action-reducer/h5Platform/fetchRealName';
import { reducer as addRealName } from 'src/redux/action-reducer/h5Platform/addRealName';

export default [
  updatePopupData,
  setPopupData,
  updateRealNameData,
  fetchRealName,
  addRealName
];