/**
 * @description: 大厅支付的提示视图
 */

import { tips, tipType } from 'sdk/config';
import { storeHelper } from 'utils';

const storeHelperInstance = storeHelper.Instance;
// 通知名称
const NoticeName = '《关于防止未成年人沉迷网络游戏的通知》';
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
    const { className, content } = tips[tipType.nonageForbidCharge];
    setLobbyData({
      show: true,
      className,
      content
    });
  }

  // 年龄小于8周岁的提示
  showEight() {
    const { className, title, subTitle, content } = tips[tipType.ageLessThanEight];
    const newTitle = `${title}，${subTitle}`
    setLobbyData({
      show: true,
      className,
      title: newTitle,
      content
    });
  }

  // 8~16周岁不可充值，充值已达到上限的提示
  showSixteen() {
    const { className, title, subTitle, content } = tips[tipType.ageLessThanSixteen];
    setLobbyData({
      show: true,
      className,
      title: '该月累计充值金额已达到上限，无法充值',
      subTitle: '每月累计充值不能超过200元',
      content: `根据${NoticeName}，8~16周岁用户单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元人民币。`
    });
  }

  // 8~16周岁可充值，但充值金额达到上限的提示
  showSixteenCharge() {
    const { className, title, subTitle, content } = tips[tipType.ageLessThanSixteenCharge];
    const newTitle = `${title}，${subTitle}`
    setLobbyData({
      show: true,
      className,
      title: newTitle,
      content,
    });    
  }

  // 16~18周岁不可充值，充值已达到上限的提示
  showEighteen() {
    const { className, title, subTitle, content } = tips[tipType.ageLessThanEighteen];
    setLobbyData({
      show: true,
      className,
      title: '该月累计充值金额已达到上限，无法充值',
      subTitle: '每月累计充值不能超过400元',
      content
    });
  }

  // 16~18周岁可充值，但充值金额已达到上限的提示
  showEighteenCharge() {
    const { className, title, subTitle, content } = tips[tipType.ageLessThanEighteenCharge];
    setLobbyData({
      show: true,
      className,
      title: `${title}，${subTitle}`,
      content
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