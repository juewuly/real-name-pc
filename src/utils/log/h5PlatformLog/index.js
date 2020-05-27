/**
 * @author: liuyang9
 * @description: h5联运平台的日志
 */

import realNameLog from './realNameLog';

export default class h5PlatformLog {
  static Instance(prefix) {
    if (!this._instance) {
      this._instance = new h5PlatformLog(prefix);
    }
    return this._instance;
  }

  constructor(prefix) {
    this._realNameLog = realNameLog.Instance(prefix);
  }

  get realNameLog() {
    return this._realNameLog;
  }
}