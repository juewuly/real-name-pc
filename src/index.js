/**
 * author: liuyang9
 * description: 实名认证PC端sdk
 */

import RealNamePc from './real-name-pc';
import { features } from './real-name-pc/config';

export default class RealNamePcSdk {
  constructor({ feature, containerId } = { feature: features.h5Platform, containerId: null }) {
    if (!RealNamePcSdk._instance) {
      RealNamePcSdk._instance = RealNamePc.Instance({ feature, containerId});
    }

    return RealNamePcSdk._instance;
  }

  /**
   * 获取单例
   */
  static Instance({ feature, containerId } = { feature: features.h5Platform, containerId: null }) {
    if (!this._instance) {
      this._instance = RealNamePc.Instance({ feature, containerId});
    }

    return this._instance;
  }

  static get Features() {
    return {
      [features.h5Platform]: features.h5Platform,
      [features.lobby]: features.lobby,
      [features.lobbyMini]: features.lobbyMini
    };
  }
}