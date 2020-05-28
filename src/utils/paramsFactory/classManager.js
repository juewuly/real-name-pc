/**
 * @author: liuyang9
 * @description: 类管理器
 */


import base from './base';
import { features } from 'sdk/config';
import h5PlatFormParams from './h5Platform';

export default class classManager {
  static get Instance() {
    if (!this._instance) {
      this._instance = new classManager();
    }
    return this._instance;
  }

  /**
   * 通过feature获取助手类
   * @param {*} feature feature名称
   */
  getClassByFeature(feature) {
    const featureMap = {
      [features.h5Platform]: h5PlatFormParams
    }
    const result = featureMap[feature];
    return result ? result : base;
  }
}