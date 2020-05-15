/**
 * @description: 大厅的提示视图
 */

import { popupConfig, popupType } from '../config';
import { storeHelper } from 'utils';

const storeHelperInstance = storeHelper.Instance;

const setLobbyData = data => storeHelperInstance.setLobbyData(data);

class lobbyView {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new lobbyView();
    }

    return this._instance;
  }

  // 未成年人在禁止充值时间段内，且未开启年龄段限制
  showNonage() {
    const { className, content } = popupConfig[popupType.nonageForbidCharge];
    setLobbyData({
      show: true,
      className,
      content
    });
  }

  // 年龄小于8周岁的提示
  showEight({ canClose } = { canClose: true }) {
    const { className, title, subTitle, content } = popupConfig[popupType.ageLessThanEight];
    setLobbyData({
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
    const { className, title, subTitle, content } = popupConfig[popupType.ageLessThanSixteen];
    setLobbyData({
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
    const { className, title, subTitle, content } = popupConfig[popupType.ageLessThanSixteenCharge];
    setLobbyData({
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
    const { className, title, subTitle, content } = popupConfig[popupType.ageLessThanEighteen];
    setLobbyData({
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
    const { title, subTitle, content } = popupConfig[popupType.ageLessThanEighteenCharge];
    setLobbyData({
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
    const { title, content } = popupConfig[popupType.gameTimeLimitWhenLogin];
    setLobbyData({
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
    const { title, subTitle, content } = popupConfig[popupType.gameTimeLimitWhenPlaying];
    setLobbyData({
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

export default lobbyView;