import { features } from 'sdk/config';
import baseParams from './baseParams';
import h5PlatFormParams from './h5PlatformParams';

export default class paramsFactory {
  static get Instance() {
    if (!this._instance) {
      this._instance = new paramsFactory();
    }
    return this._instance;
  }

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