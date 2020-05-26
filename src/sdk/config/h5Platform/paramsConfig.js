/**
 * @author: liuyang9
 * @description: 实名认证相关的参数配置
 */

export default class paramsConfig {
  constructor() { }

  static set appkey(value) {
    this._appkey = value;
  }

  static get appkey() {
    return this._appkey;
  }

  static set qid(value) {
    this._qid = value;
  }

  static get qid() {
    return this._qid;
  }

  static set platform(value) {
    this._platform = value;
  }

  static get platform() {
    return this._platform;
  }

  static set idcard_check_type(value) {
    this._idcard_check_type = value;
  }

  static get idcard_check_type() {
    return this._idcard_check_type;
  }
}