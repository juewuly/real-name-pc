/**
 * @description: 验证相关的参数
 */

import logHelper from './logHelper';

const logInstance = logHelper.Instance;

class paramsHelper {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new paramsHelper();
    }

    return this._instance;
  }

  /**
   * 验证显示实名认证时的options参数
   * @param {*} options 
   */
  validateRealNameParams(options) {
    // 参数不能为空
    if (!options) {
      logInstance.error('显示实名认证所传的参数中，缺少参数“options”');
      return false;
    }

    // 参数需要为object
    if (Object.prototype.toString.call(options) !== '[object Object]') {
      logInstance.error('显示实名认证所传的参数中，“options”的类型需要为object');
      return false;
    }

    // options里的必传参数
    const keys = ['appkey', 'qid', 'platform', 'idcard_check_type']
    const paramError = keys.some(param => {
      // 验证参数是否已传
      if (typeof options[param] === 'undefined') {
        logInstance.error(`显示实名认证所传的参数中，options里缺少参数${param}`);
        return true;
      }

      // 验证参数是否为空
      if (param !== 'appkey' && !options[param]) {
        logInstance.error(`显示实名认证所传的参数中，options里的参数${param}不能为空`);
        return true;
      }
    });

    return paramError ? false : true;
  }
   
}

 export default paramsHelper;