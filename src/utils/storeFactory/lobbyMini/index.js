/**
 * @author: liuyang9
 * @description: 操作store里大厅mini付相关的数据
 */


import base from '../base';
import { SET_LOBBY_MINI_DATA } from 'src/redux/constants';

export default class lobbyMini extends base {
  constructor(store) {
    super(store);
  }

  // 设置大厅mini付的数据
  setLobbyMiniData(data) {
    this.store.dispatch({
      type: SET_LOBBY_MINI_DATA,
      data
    });
  }
}