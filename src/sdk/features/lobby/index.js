/**
 * author: liuyang9
 * description: 大厅支付的防沉迷
 */


import { appView, lobbyView } from 'sdk/view';
import { features } from 'sdk/config';
import { storeFactory } from 'utils';
import domHelper from '../domHelper';

const feature = features.lobby;
const lobbyViewInstance = lobbyView.Instance;
const storeHelper = storeFactory.getHelperByFeature(feature);

export default class lobby {
  static Instance({ containerId }) {
    if(!this._instance) {
      this._instance = new lobby({ containerId });
    }

    return this._instance;
  }

  constructor({ containerId }) {
    this.init({ containerId });
  }

  init({ containerId }) {
    storeHelper.updateGlobalData({ feature });
    domHelper.initSdkElement(containerId)
    appView.renderApp();
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

