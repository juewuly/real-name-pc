/**
 * @author: liuyang9
 * @description: 设置弹窗数据 
 */


import base from '../base';
import { SET_POPUP_DATA } from 'src/redux/constants';

export default class popup extends base {
  constructor(store) {
    super(store);
  }

  // 设置popup数据
  setPopupData(data) {
    this.store.dispatch({
      type: SET_POPUP_DATA,
      data
    });
  }
}