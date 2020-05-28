/**
 * @author: liuyang9
 * @description: 操作store里h5联运平台相关的数据
 */


import base from '../base';
import realName from './realName';
import popup from './popup';

export default class h5Platform extends base {
  constructor(store) {
    super(store);
    this._realName = new realName(store);
    this._popup = new popup(store);
  }

  get realName() {
    return this._realName;
  }

  get popup() {
    return this._popup;
  }
}