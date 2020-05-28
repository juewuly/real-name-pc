/**
 * @author: liuyang9
 * @description: 操作store的基类
 */


import { UPDATE_GLOBAL_DATA } from 'src/redux/constants';

export default class base {
  constructor(store) {
    // redux里的store
    this._store = store;
  }

  // 获取redux里的store
  get store() {
    return this._store;
  }

  // 获取redux里的state
  get state() {
    return this.store.getState();
  }

  // 更新全局数据
  updateGlobalData(data) {
    this.store.dispatch({
      type: UPDATE_GLOBAL_DATA,
      data
    });
  }
}