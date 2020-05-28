import logHelper from 'utils/log';

export default class baseParams {
  constructor() { }

  /**
   * 验证参数是否为非空对象类型
   * @param {*} options 
   */
  isObjectAndNotNull(options) {
    // 参数不能为空
    if (!options) {
      return false;
    }

    // 参数需要为object
    if (Object.prototype.toString.call(options) !== '[object Object]') {
      return false;
    }

    return true;
  }

  /**
   * 验证参数有所有的key
   * @param {*} params 
   * @param {*} keys 
   */
  haveAllKeys(options, keys) {
    if (!this.isObjectAndNotNull(options)) {
      logHelper.error('参数类型错误，需要为非空对象');
      return false;
    }

    if (!keys) {
      keys = Object.keys(options);
    }

    const paramError = keys.some(param => {
      if (typeof options[param] === 'undefined') {
        logHelper.error(`缺少参数${param}`);
        return true;
      }
    });

    return paramError ? false : true;
  }

  /**
   * 验证参数所有的key非空
   * @param {*} params 
   * @param {*} keys 
   */
  keysNotNull(options, keys) {
    if (!this.isObjectAndNotNull(options)) {
      logHelper.error('参数类型错误，需要为非空对象');
      return false;
    }

    if (!keys) {
      keys = Object.keys(options);
    }

    const paramError = keys.some(param => {
      if (!options[param]) {
        logHelper.error(`缺少参数${param}`);
        return true;
      }
    });

    return paramError ? false : true;
  }
}