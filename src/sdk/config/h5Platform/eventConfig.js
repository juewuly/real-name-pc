/**
 * @author: liuyang9
 * @description: 实名认证相关的事件配置
 */

export default class eventConfig {
  static set onCloseRealName(callback) {
    this._onCloseRealName = callback;
  }

  static get onCloseRealName() {
    return this._onCloseRealName;
  }

  static set onSubmitSuccess(callback) {
    this._onSubmitSuccess = callback;
  }

  static get onSubmitSuccess() {
    return this._onSubmitSuccess;
  }

  static set onSubmitError(callback) {
    this._onSubmitError = callback;
  }

  static get onSubmitError() {
    return this._onSubmitError;
  }

  constructor() { }
}