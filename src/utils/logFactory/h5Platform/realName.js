/**
 * @author: liuyang9
 * @description: 实名认证相关的日志
 */


import base from '../base';

export default class realName extends base {
  static Instance(prefix) {
    if (!this._instance) {
      this._instance = new realName(prefix);
    }
    return this._instance;
  }

  constructor(prefix) {
    super(prefix);
  }

  // 订阅“关闭实名认证”
  subscribeCloseRealName() {
    this.log(`订阅”关闭实名认证“`);
  }

  // 取消订阅”关闭实名认证“
  unsubscribeCloseRealName() {
    this.log('取消订阅”关闭实名认证“');
  }

  // 关闭实名认证
  closeRealName() {
    this.log('关闭实名认证');
  }

  // 订阅”提交实名认证“
  subscribeSubmitRealName() {
    this.log('订阅”提交实名认证“');
  }

  // 取消订阅“提交实名认证”
  unsubscribeSubmitRealName() {
    this.log('取消订阅“提交实名认证”');
  }

  // 实名认证成功
  submitRealNameSuccess() {
    this.log('实名认证成功');
  }

  // 实名认证异常
  submitRealNameError(err) {
    this.error('实名认证异常', err);
  }
}