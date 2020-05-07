/**
 * @description: 日志输出助手
 */


import paramsLog from './paramsLog';


class logHelper {
  constructor(prefix) {
    this._prefix = prefix;
  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new logHelper('>> ');
    }

    return this._instance;
  }

  /**
   * 参数相关的日志
   */
  get paramsLog() {
    return paramsLog.Instance;
  }

  /**
   * 输出日志信息
   * @param {*} info 
   */
  log() {
    const info = [this._prefix, ...arguments];
    console.log.apply(null, info)
  }

  /**
   * 输出异常信息
   * @param {*} info 
   * @param {*} err 
   */
  error() {
    const info = [this._prefix, ...arguments];
    console.error.apply(null, info);
  }

  /**
   * 订阅“关闭实名认证”
   */
  subscribeCloseRealName() {
    this.log(`订阅”关闭实名认证“`);
  }

  /**
   * 取消订阅”关闭实名认证“
   */
  unsubscribeCloseRealName() {
    this.log('取消订阅”关闭实名认证“');
  }

  /**
   * 关闭实名认证
   */
  closeRealName() {
    this.log('关闭实名认证');
  }

  /**
   * 订阅”提交实名认证“
   */
  subscribeSubmitRealName() {
    this.log('订阅”提交实名认证“');
  }

  /**
   * 取消订阅“提交实名认证”
   */
  unsubscribeSubmitRealName() {
    this.log('取消订阅“提交实名认证”');
  }

  /**
   * 实名认证成功
   */
  submitRealNameSuccess() {
    this.log('实名认证成功');
  }

  /**
   * 实名认证异常
   */
  submitRealNameError(err) {
    this.error('实名认证异常', err);
  }

  

}

export default logHelper;

