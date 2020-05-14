/**
 * @description: 弹窗提示视图
 */


import Config from 'src/real-name-pc/config';
import { storeHelper } from 'utils';

const storeHelperInstance = storeHelper.Instance;

const setPopupData = data => storeHelperInstance.setPopupData(data);

class popupView {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new popupView();
    }

    return this._instance;
  }

  // 关闭弹窗
  closePopup() {
    setPopupData({ show: false });
  }

  // 未成年人在禁止充值时间段内，且未开启年龄段限制
  showNonage({ canClose } = { canClose: true }) {
    setPopupData({
      show: true,
      content: '根据相关部门对于未成年用户的监管要求，该时段暂停相关游戏和充值服务。',
      canClose
    });
  }

  // 年龄小于8周岁的提示
  showEight({ canClose } = { canClose: true }) {
    const { title, subTitle, content } = Config.pay.ageLessThanEight;
    setPopupData({
      show: true,
      title,
      subTitle,
      content,
      canClose
    });
  }

  // 8~16周岁不可充值，充值已达到上限的提示
  showSixteen({ canClose } = { canClose: true }) {
    const { title, subTitle, content } = Config.pay.ageLessThanSixteen;
    setPopupData({
      show: true,
      title,
      subTitle,
      content,
      canClose
    });
  }

  // 8~16周岁可充值，但充值金额达到上限的提示
  showSixteenCharge({ canClose } = { canClose: true }) {
    const { title, subTitle, content } = Config.pay.ageLessThanSixteenCharge;
    setPopupData({
      show: true,
      title,
      subTitle,
      content,
      canClose
    });    
  }

  // 16~18周岁不可充值，充值已达到上限的提示
  showEighteen({ canClose } = { canClose: true }) {
    const { title, subTitle, content } = Config.pay.ageLessThanEighteen;
    setPopupData({
      show: true,
      title,
      subTitle,
      content,
      canClose
    });
  }

  // 16~18周岁可充值，但充值金额已达到上限的提示
  showEighteenCharge({ canClose } = { canClose: true }) {
    const { title, subTitle, content } = Config.pay.ageLessThanEighteenCharge;
    setPopupData({
      show: true,
      title,
      subTitle,
      content,
      canClose
    });
  }

  // 登录后游戏时长已达到上限时的提示
  showTimeLimitAfterLogin() {
    const { title, content } = Config.login.gameTimeLimit;
    setPopupData({
      show: true,
      title,
      content,
      canClose: false,
      noMask: true
    });
  }

  // 游戏中时长已达到上限时的提示
  showTimeLimitWhenPlaying() {
    const { title, subTitle, content } = Config.playing.gameTimeLimit;
    setPopupData({
      show: true,
      title,
      subTitle,
      content,
      canClose: false,
      noMask: true
    })
  }

  /**
   * 根据check接口返回的状态码和年龄，来弹相应的弹窗提示
   * @param {*} status 
   * @param {*} ageLower 
   */
  showTipByStatus(status, ageLower) {
    const popupFuncMap = {
      1: null,
      2: {
        0: this.showEight,
        8: this.showSixteenCharge,
        16: this.showEighteenCharge
      },
      3: {
        0: this.showEight,
        8: this.showSixteen,
        16: this.showEighteen
      }
    }

    const popupFunc = popupFuncMap[status][ageLower];
    if (popupFunc) {
      popupFunc();
    }
  }
}

export default popupView;