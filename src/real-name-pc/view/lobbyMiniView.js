/**
 * @description: 大厅的提示视图
 */

import { popupConfig, popupType } from '../config';
import { storeHelper } from 'utils';

const storeHelperInstance = storeHelper.Instance;

const setLobbyMiniData = data => storeHelperInstance.setLobbyMiniData(data);
// 通知名称
const NoticeName = '《关于防止未成年人沉迷网络游戏的通知》';

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
    setLobbyMiniData({
      show: true,
      className,
      content
    });
  }

  // 年龄小于8周岁的提示
  showEight({ canClose, onClickOk } = { canClose: true }) {
    const { className, title, subTitle, content } = popupConfig[popupType.ageLessThanEight];
    const newTitle = `${title}，${subTitle}`;

    setLobbyMiniData({
      show: true,
      className,
      title: newTitle,
      content,
      canClose,
      onClickOk
    });
  }

  // 8~16周岁不可充值，充值已达到上限的提示
  showSixteen({ canClose, onClickOk } = { canClose: true }) {
    const { className, title, subTitle, content } = popupConfig[popupType.ageLessThanSixteen];
    setLobbyMiniData({
      show: true,
      className,
      title: '该月累计充值金额已达到上限，无法充值',
      subTitle: '每月累计充值不能超过200元',
      content: `根据${NoticeName}，8~16周岁用户单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币。`,
      canClose,
      onClickOk
    });
  }

  // 8~16周岁可充值，但充值金额达到上限的提示
  showSixteenCharge({ canClose, onClickOk } = { canClose: true }) {
    const { className, title, subTitle, content } = popupConfig[popupType.ageLessThanSixteenCharge];
    const newTitle = `${title}，${subTitle}`
    setLobbyMiniData({
      show: true,
      className,
      title: newTitle,
      content,
      canClose,
      onClickOk
    });    
  }

  // 16~18周岁不可充值，充值已达到上限的提示
  showEighteen({ canClose, onClickOk } = { canClose: true }) {
    const { className, title, subTitle, content } = popupConfig[popupType.ageLessThanEighteen];
    setLobbyMiniData({
      show: true,
      className,
      title: '该月累计充值金额已达到上限，无法充值',
      subTitle: '每月累计充值不能超过400元',
      content,
      canClose,
      onClickOk
    });
  }

  // 16~18周岁可充值，但充值金额已达到上限的提示
  showEighteenCharge({ canClose, onClickOk } = { canClose: true }) {
    const { className, title, subTitle, content } = popupConfig[popupType.ageLessThanEighteenCharge];
    setLobbyMiniData({
      show: true,
      className,
      title: `${title}，${subTitle}`,
      content,
      canClose,
      onClickOk
    });
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