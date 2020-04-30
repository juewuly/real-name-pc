/**
 * @description: 日志输出助手
 */

const Log = console.log;
const Error = console.error;

class logHelper {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new logHelper();
    }

    return this._instance;
  }

  /**
   * 订阅“关闭实名认证”
   */
  subscribeCloseRealName() {
    Log('订阅”关闭实名认证“');
  }

  /**
   * 取消订阅”关闭实名认证“
   */
  unsubscribeCloseRealName() {
    Log('取消订阅”关闭实名认证“');
  }

  /**
   * 关闭实名认证
   */
  closeRealName() {
    Log('关闭实名认证');
  }

  /**
   * 订阅”提交实名认证“
   */
  subscribeSubmitRealName() {
    Log('订阅”提交实名认证“');
  }

  /**
   * 取消订阅“提交实名认证”
   */
  unsubscribeSubmitRealName() {
    Log('取消订阅“提交实名认证”');
  }

  /**
   * 实名认证成功
   */
  submitRealNameSuccess() {
    Log('实名认证成功');
  }

  /**
   * 实名认证异常
   */
  submitRealNameError(err) {
    Error('实名认证异常', err);
  }

}

export default logHelper;

