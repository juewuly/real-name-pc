/**
 * author: liuyang9
 * description: h5联运平台的防沉迷
 */


import { appView, realNameView, popupView } from 'sdk/view';
import { h5PlatformData } from 'sdk/data';
import { paramsConfig, eventConfig, features } from 'sdk/config';
import { h5PlatformHandler } from 'sdk/handler';
import domHelper from '../domHelper';

import { 
  paramsFactory,
  storeFactory
} from 'utils';

const feature = features.h5Platform;
const realNameViewInstance = realNameView.Instance;
const popupViewInstance = popupView.Instance;
const storeHelper = storeFactory.getHelperByFeature(feature);
const paramsHelper = paramsFactory.getHelperByFeature(feature);

export default class h5Platform {
  static Instance({ containerId }) {
    if(!this._instance) {
      this._instance = new h5Platform({ containerId });
    }

    return this._instance;
  }

  constructor({ containerId }) {
    this.init({ containerId });
  }

  init({ containerId }) {
    storeHelper.updateGlobalData({ feature });

    domHelper.initSdkElement(containerId)
    domHelper.initSdkModalElement(containerId);
    appView.renderApp();
  }

  // 配置一些参数和事件
  config({ 
    appkey,
    qid,
    platform,
    idcard_check_type,
    onCloseRealName,
    onSubmitSuccess,
    onSubmitError 
  }) {
    // 验证参数是否合法
    const pass = paramsHelper.validateRealNameParams({ appkey, qid, platform, idcard_check_type });
    if (!pass) {
      return;
    }

    // 参数配置
    paramsConfig.appkey = appkey;
    paramsConfig.qid = qid;
    paramsConfig.platform = platform;
    paramsConfig.idcard_check_type = idcard_check_type;

    // 事件配置
    eventConfig.onCloseRealName = onCloseRealName;
    eventConfig.onSubmitSuccess = onSubmitSuccess;
    eventConfig.onSubmitError = onSubmitError;
  }

  // 未成年人在禁止充值时间段内，且未开启年龄段限制
  showNonage({ canClose } = { canClose: true }) {
    popupViewInstance.showNonage({ canClose});
  }

  // 年龄小于8周岁的提示
  showEight({ canClose } = { canClose: true }) {
    popupViewInstance.showEight({ canClose });
  }

  // 8~16周岁不可充值，充值已达到上限的提示
  showSixteen({ canClose } = { canClose: true }) {
    popupViewInstance.showSixteen({ canClose });
  }

  // 8~16周岁可充值，但充值金额达到上限的提示
  showSixteenCharge({ canClose } = { canClose: true }) {
    popupViewInstance.showSixteenCharge({ canClose });
  }

  // 16~18周岁不可充值，充值已达到上限的提示
  showEighteen({ canClose } = { canClose: true }) {
    popupViewInstance.showEighteen({ canClose });
  }

  // 16~18周岁可充值，但充值金额已达到上限的提示
  showEighteenCharge({ canClose } = { canClose: true }) {
    popupViewInstance.showEighteenCharge({ canClose });
  }

  // 登录后游戏时长已达到上限时的提示
  showTimeLimitAfterLogin() {
    popupViewInstance.showTimeLimitAfterLogin();
  }

  // 游戏中时长已达到上限时的提示
  showTimeLimitWhenPlaying() {
    popupViewInstance.showTimeLimitWhenPlaying();
  }

  // 关闭弹窗
  close() {
    popupViewInstance.closePopup();
  }

  /**
   * 显示实名认证
   * @param {*} canClose 是否可关闭
   */
  showRealName({ canClose }) {
    const appkey = paramsConfig.appkey;
    const qid = paramsConfig.qid;
    const platform = paramsConfig.platform;
    const idcard_check_type = paramsConfig.idcard_check_type;

    const onClose = eventConfig.onCloseRealName;
    const onSubmitSuccess = eventConfig.onSubmitSuccess;
    const onSubmitError = eventConfig.onSubmitError;

    realNameViewInstance.showRealName({
      appkey,
      qid,
      platform,
      idcard_check_type,
      canClose, 
      onClose, 
      onSubmitSuccess, 
      onSubmitError
    });
  }

  // 关闭实名
  closeRealName() {
    realNameViewInstance.closeRealName();
  }

  /**
   * 获取实名信息
   */
  fetchRealName() {
    const appkey = paramsConfig.appkey;
    const qids = paramsConfig.qid;
    const platform = paramsConfig.platform;
    const idcard_check_type = paramsConfig.idcard_check_type;
    return h5PlatformData.fetchRealName({ appkey, qids, platform, idcard_check_type });
  }

  /**
   * 验证金额是否允许充值
   * @param {*} param0 
   */
  checkAmount({ amount, gkey }) {
    return new Promise(async (resolve, reject) => {
      const res = await h5PlatformData.checkAmount({ amount, gkey }).catch(err => reject(err));
      if (!res) {
        return;
      }
      
      const handler = h5PlatformHandler.getHandler()
      resolve({
        checkResult: res,
        handler
      });
    });
  }
}

