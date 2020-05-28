/**
 * @author: liuyang9
 * @description: 参数工厂，获取处理参数的助手
 */


import classManager from './classManager';

export default class paramsFactory {
  // 通过feature获取助手
  static getHelperByFeature(feature = 'baseParams') {
    const key = `_${feature}`;
    if (!this[key]) {
      const helperClass = classManager.Instance.getClassByFeature(feature)
      this[key] = new helperClass(feature);
    }
    return this[key];
  }
}