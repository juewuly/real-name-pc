/**
 * @author: liuyang9
 * @description: 参数工厂，获取处理参数的助手
 */


import { features } from 'sdk/config';
import baseParams from './base';
import h5PlatFormParams from './h5Platform';

export default class paramsFactory {
  /**
   * 通过feature获取助手类
   * @param {*} feature feature名称
   */
  static getHelperClassByFeature(feature) {
    const featureMap = {
      [features.h5Platform]: h5PlatFormParams
    }
    const result = featureMap[feature];
    return result ? result : baseParams;
  }

  // 通过feature获取助手
  static getHelperByFeature(feature = 'baseParams') {
    const key = `_${feature}`;
    if (!this[key]) {
      const helperClass = this.getHelperClassByFeature(feature)
      this[key] = new helperClass(feature);
    }
    return this[key];
  }
}