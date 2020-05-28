/**
 * @author: liuyang9
 * @description: 实名认证视图 
 */


import { 
  storeHelper, 
  logHelper,
  paramsHelper
} from 'utils';

const storeHelperInstance = storeHelper.Instance;
const h5PlatFormParamsInstance = paramsHelper.Instance.h5PlatFormParams;

const updateRealNameData = data => storeHelperInstance.updateRealNameData(data);

export default class realNameView {
  static get Instance() {
    if (!this._instance) {
      this._instance = new realNameView();
    }
    return this._instance;
  }

  constructor() { }

  // 关闭实名
  closeRealName() {
    logHelper.h5PlatformLog.realNameLog.closeRealName();
    updateRealNameData({ show: false });
  }

  /**
   * 显示实名认证
   * @param {*} canClose 是否可关闭
   */
  showRealName({ appkey, qid, platform, idcard_check_type, canClose, onClose, onSubmitSuccess, onSubmitError }) {
    // 验证参数是否合法
    const pass = h5PlatFormParamsInstance.validateRealNameParams({ appkey, qid, platform, idcard_check_type });
    if (!pass) {
      return;
    }

    // 更新redux状态
    updateRealNameData({ 
      show: true,
      canClose,
      options: {
        appkey,
        qid,
        platform,
        idcard_check_type
      }
    });

    // 处理实名认证成功
    const handleSubmitSuccess = result => {
      this.closeRealName();
      onSubmitSuccess(result);
    }

    storeHelperInstance.subscribeCloseRealName(onClose);
    storeHelperInstance.subscribeSubmitRealName({
      onSubmitError,
      onSubmitSuccess: handleSubmitSuccess
    });
  }
}