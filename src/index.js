/**
 * author: liuyang9
 * description: 实名认证PC端sdk
 */

import RealNamePc from './real-name-pc';
import Config from './real-name-pc/config';

export default class RealNamePcSdk {
  constructor() {
    if (!RealNamePcSdk._instance) {
      RealNamePcSdk._instance = RealNamePc.Instance;
    }

    return RealNamePcSdk._instance;
  }

  /**
   * 获取单例
   */
  static get Instance() {
    if (!this._instance) {
      this._instance = RealNamePc.Instance;
    }

    return this._instance;
  }

  /**
   * 获取相关提示信息的配置
   */
  static get Config() {
    return Config;
  }
}