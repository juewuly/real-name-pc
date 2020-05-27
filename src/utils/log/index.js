/**
 * @author: liuyang9
 * @description: 日志助手
 */


import base from './baseLog';
import h5PlatformLog from './h5PlatformLog';
import { features } from 'sdk/config';

export default class logHelper extends base {
  static get Instance() {
    if (!this._instance) {
      this._instance = new logHelper('>> ');
    }
    return this._instance;
  }

  constructor(prefix) {
    super(prefix);
    this._h5PlatformLog = h5PlatformLog.Instance(`${features.h5Platform} ${prefix}`); 
  }

  // h5联运平台相关的日志
  get h5PlatformLog() {
    return this._h5PlatformLog;
  }
}

