/**
 * author: liuyang9
 * description: 实名认证PC端sdk
 */

import RealNamePc from './real-name-pc';

export default class RealNamePcSdk {
  constructor() {
    if (!RealNamePcSdk._instance) {
      RealNamePcSdk._instance = RealNamePc.Instance();
    }

    return RealNamePcSdk._instance;
  }

  /**
   * 获取单例
   */
  static Instance({ type, containerId } = { type: 'default', containerId: null }) {
    if (!this._instance) {
      this._instance = RealNamePc.Instance({ type, containerId});
    }

    return this._instance;
  }
}