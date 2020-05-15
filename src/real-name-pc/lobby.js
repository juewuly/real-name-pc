/**
 * author: liuyang9
 * description: 大厅的相关提示
 */


import { appView, lobbyView } from './view';
import { paramsConfig, eventConfig } from './config';

import { 
  paramsHelper,
  storeHelper
} from 'utils';

const lobbyViewInstance = lobbyView.Instance;
const storeHelperInstance = storeHelper.Instance;

export default class lobby {
  constructor({ type, containerId }) {
    this.init({ type, containerId });
  }

  static Instance({ type, containerId }) {
    if(!this._instance) {
      this._instance = new lobby({ type, containerId });
    }

    return this._instance;
  }

  init({ type, containerId }) {
    const containerEle = this.getContainerElement(containerId);
    storeHelperInstance.updateGlobalData({ type });

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
  showEight({ canClose } = { canClose: true }) {
    lobbyViewInstance.showEight({ canClose });
  }

  // 8~16周岁不可充值，充值已达到上限的提示
  showSixteen({ canClose } = { canClose: true }) {
    lobbyViewInstance.showSixteen({ canClose });
  }

  // 8~16周岁可充值，但充值金额达到上限的提示
  showSixteenCharge({ canClose } = { canClose: true }) {
    lobbyViewInstance.showSixteenCharge({ canClose });
  }

  // 16~18周岁不可充值，充值已达到上限的提示
  showEighteen({ canClose } = { canClose: true }) {
    lobbyViewInstance.showEighteen({ canClose });
  }

  // 16~18周岁可充值，但充值金额已达到上限的提示
  showEighteenCharge({ canClose } = { canClose: true }) {
    lobbyViewInstance.showEighteenCharge({ canClose });
  }
}

