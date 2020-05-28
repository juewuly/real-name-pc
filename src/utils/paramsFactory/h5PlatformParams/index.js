import logHelper from 'utils/log';
import baseParams from '../baseParams';

export default class h5PlatformParams extends baseParams {
  static get Instance() {
    if (!this._instance) {
      this._instance = new h5PlatformParams();
    }
    return this._instance;
  }

  constructor() {
    super();
  }

  /**
   * 验证显示实名认证时的options参数
   * @param {*} options 
   */
  validateRealNameParams(options) {
    if (!this.isObjectAndNotNull(options)) {
      logHelper.error('实名认证的参数类型异常');
      return false;
    }

    if (!this.haveAllKeys(options, ['appkey', 'qid', 'platform', 'idcard_check_type'])) {
      logHelper.error('实名认证缺少参数');
      return false
    }

    return true;
  }
}