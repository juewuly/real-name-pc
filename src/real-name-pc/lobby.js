/**
 * author: liuyang9
 * description: 大厅的相关提示
 */


import { appView, lobbyView } from './view';
import { storeHelper } from 'utils';

const lobbyViewInstance = lobbyView.Instance;
const storeHelperInstance = storeHelper.Instance;

export default class lobby {
  constructor({ feature, containerId }) {
    this.init({ feature, containerId });
  }

  static Instance({ feature, containerId }) {
    if(!this._instance) {
      this._instance = new lobby({ feature, containerId });
    }

    return this._instance;
  }

  init({ feature, containerId }) {
    const containerEle = this.getContainerElement(containerId);
    storeHelperInstance.updateGlobalData({ feature });

    // 显示容器
    this.root = document.createElement('div');
    this.root.setAttribute('id', 'real-name-pc');
    containerEle.appendChild(this.root);
    appView.renderApp();
  }

  getContainerElement(containerId) {
    if (containerId) {
      return document.getElementById(containerId)
    }

    return document.getElementsByTagName('body')[0];
  }

  // 年龄小于8周岁的提示
  showEight() {
    lobbyViewInstance.showEight();
  }

  // 8~16周岁不可充值，充值已达到上限的提示
  showSixteen() {
    lobbyViewInstance.showSixteen();
  }

  // 8~16周岁可充值，但充值金额达到上限的提示
  showSixteenCharge() {
    lobbyViewInstance.showSixteenCharge();
  }

  // 16~18周岁不可充值，充值已达到上限的提示
  showEighteen() {
    lobbyViewInstance.showEighteen();
  }

  // 16~18周岁可充值，但充值金额已达到上限的提示
  showEighteenCharge() {
    lobbyViewInstance.showEighteenCharge();
  }
}

