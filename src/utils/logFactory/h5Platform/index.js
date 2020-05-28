/**
 * @author: liuyang9
 * @description: h5联运平台的日志
 */


import realName from './realName';

export default class h5Platform {
  static Instance(prefix) {
    if (!this._instance) {
      this._instance = new h5Platform(prefix);
    }
    return this._instance;
  }

  constructor(prefix) {
    this._realName = realName.Instance(prefix);
  }

  get realName() {
    return this._realName;
  }
}