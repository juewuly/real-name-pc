/**
 * @author: liuyang9
 * @description: 弹窗提示视图
 */

import { tips, tipType } from 'sdk/config';
import { storeFactory } from 'utils';
import { features } from 'sdk/config';

const storeHelper = storeFactory.getHelperByFeature(features.h5Platform);
const setPopupData = data => storeHelper.popup.setPopupData(data);

export default class popupView {
  static get Instance() {
    if (!this._instance) {
      this._instance = new popupView();
    }
    return this._instance;
  }

  constructor() { }

  // 关闭弹窗
  closePopup() {
    setPopupData({ show: false });
  }

  // 未成年人在禁止充值时间段内，且未开启年龄段限制
  showNonage({ canClose } = { canClose: true }) {
    const { className, content } = tips[tipType.nonageForbidCharge];
    setPopupData({
      show: true,
      className,
      content,
      canClose
    });
  }

  // 年龄小于8周岁的提示
  showEight({ canClose } = { canClose: true }) {
    const { className, title, subTitle, content } = tips[tipType.ageLessThanEight];
    setPopupData({
      show: true,
      className,
      title,
      subTitle,
      content,
      canClose
    });
  }

  // 8~16周岁不可充值，充值已达到上限的提示
  showSixteen({ canClose } = { canClose: true }) {
    const { className, title, subTitle, content } = tips[tipType.ageLessThanSixteen];
    setPopupData({
      show: true,
      className,
      title,
      subTitle,
      content,
      canClose
    });
  }

  // 8~16周岁可充值，但充值金额达到上限的提示
  showSixteenCharge({ canClose } = { canClose: true }) {
    const { className, title, subTitle, content } = tips[tipType.ageLessThanSixteenCharge];
    setPopupData({
      show: true,
      className,
      title,
      subTitle,
      content,
      canClose
    });    
  }

  // 16~18周岁不可充值，充值已达到上限的提示
  showEighteen({ canClose } = { canClose: true }) {
    const { className, title, subTitle, content } = tips[tipType.ageLessThanEighteen];
    setPopupData({
      show: true,
      className,
      title,
      subTitle,
      content,
      canClose
    });
  }

  // 16~18周岁可充值，但充值金额已达到上限的提示
  showEighteenCharge({ canClose } = { canClose: true }) {
    const { className, title, subTitle, content } = tips[tipType.ageLessThanEighteenCharge];
    setPopupData({
      show: true,
      className,
      title,
      subTitle,
      content,
      canClose
    });
  }

  // 登录后游戏时长已达到上限时的提示
  showTimeLimitAfterLogin() {
    const { className, title, content } = tips[tipType.gameTimeLimitWhenLogin];
    setPopupData({
      show: true,
      className,
      title,
      content,
      canClose: false,
      noMask: true
    });
  }

  // 游戏中时长已达到上限时的提示
  showTimeLimitWhenPlaying() {
    const { className, title, subTitle, content } = tips[tipType.gameTimeLimitWhenPlaying];
    setPopupData({
      show: true,
      className,
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