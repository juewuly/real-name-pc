/**
 * @author: liuyang9
 * @description: 日志助手
 */


import classManager from './classManager';

export default class logHelper {
  // 通过feature获取助手
  static getHelperByFeature(feature = 'base') {
    const key = `_${feature}`;
    if (!this[key]) {
      const helperClass = classManager.Instance.getClassByFeature(feature)
      this[key] = new helperClass(`${feature} >> `);
    }
    return this[key];
  }
}