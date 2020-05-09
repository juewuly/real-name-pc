/**
 * author: liuyang9
 * description: PC端实名认证
 */


import viewHelper from './viewHelper';
import { realNameView, popupView } from './view';
import { realNameData } from './data';

const viewHelperInstance = viewHelper.Instance;
const realNameViewInstance = realNameView.Instance;
const popupViewInstance = popupView.Instance;

export default class RealNamePc {
  constructor() {
    this.init();
  }

  static get Instance() {
    if(!this._instance) {
      this._instance = new RealNamePc();
    }

    return this._instance;
  }

  init() {
    // 显示容器
    this.root = document.createElement('div');
    this.root.setAttribute('id', 'real-name-pc');

    // 背景蒙层
    this.modalRoot = document.createElement('div');
    this.modalRoot.setAttribute('id', 'real-name-pc-modal');

    document.getElementsByTagName('body')[0].append(this.root);
    document.getElementsByTagName('body')[0].append(this.modalRoot);

    viewHelperInstance.renderApp();
  }

  // 临时测试
  test() {
    this.showNonage();
  }

  // 未成年人在禁止充值时间段内，且未开启年龄段限制
  showNonage() {
    popupViewInstance.showNonage();
  }

  // 年龄小于8周岁的提示
  showEight() {
    popupViewInstance.showEight();
  }

  // 8~16周岁不可充值，充值已达到上限的提示
  showSixteen() {
    popupViewInstance.showSixteen();
  }

  // 8~16周岁可充值，但充值金额达到上限的提示
  showSixteenCharge() {
    popupViewInstance.showSixteenCharge();
  }

  // 16~18周岁不可充值，充值已达到上限的提示
  showEighteen() {
    popupViewInstance.showEighteen();
  }

  // 16~18周岁可充值，但充值金额已达到上限的提示
  showEighteenCharge() {
    popupViewInstance.showEighteenCharge();
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
   * @param {*} options 提交实名认证时需要的相关参数
   * @param {*} canClose 是否可关闭
   */
  showRealName({ options, canClose, onClose, onSubmitSuccess, onSubmitError }) {
    realNameViewInstance.showRealName({ options, canClose, onClose, onSubmitSuccess, onSubmitError });
  }


  // 关闭实名
  closeRealName() {
    realNameViewInstance.closeRealName();
  }

  /**
   * 获取实名信息
   * @param {*} param0 
   */
  fetchRealName({ appkey, qids, platform, idcard_check_type }) {
    return realNameData.fetch({ appkey, qids, platform, idcard_check_type });
  }

  /**
   * 验证金额是否允许充值
   * @param {*} param0 
   */
  checkAmount({ amount, gkey }) {
    return viewHelperInstance.checkAmount({ amount, gkey });
  }
}

