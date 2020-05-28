/**
 * @author: liuyang9
 * @description: store工厂,对store进行相关操作
 */

import store from 'src/common/store';
import classManager from './classManager';

const storeInstance = store.Instance;

export default class storeFactory {
  // 通过feature获取助手
  static getHelperByFeature(feature = 'base') {
    const key = `_${feature}`;
    if (!this[key]) {
      const helperClass = classManager.Instance.getClassByFeature(feature)
      this[key] = new helperClass(storeInstance);
    }
    return this[key];
  }
}