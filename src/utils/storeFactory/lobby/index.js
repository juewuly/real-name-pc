/**
 * @author: liuyang9
 * @description: 操作store里大厅支付相关的数据 
 */


import base from '../base';
import { SET_LOBBY_DATA } from 'src/redux/constants';

export default class lobby extends base {
  constructor(store) {
    super(store);
  }

  // 设置大厅数据
  setLobbyData(data) {
    this.store.dispatch({
      type: SET_LOBBY_DATA,
      data
    });
  }
}