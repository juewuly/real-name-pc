/**
 * @description: 记录参数异常相关的日志
 */


class paramsLog {
  constructor(prefix) {
    this._prefix = prefix;
  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new paramsLog('>> ');
    }

    return this._instance;
  }

  /**
   * 输出日志信息
   * @param {*} info 
   */
  log(info) {
    console.log(`${this._prefix}${info}`);
  }

  /**
   * 输出异常信息
   * @param {*} info 
   * @param {*} err 
   */
  error(info, err) {
    console.error(`${this._prefix}${info}`, err);
  }

  /**
   * 参数类型不对
   */
  typeError() {
    this.error('options参数需要是object对象');
  }
}