/**
 * author: liuyang9
 * description: 大厅mini付的相关提示
 */


import { appView, lobbyMiniView } from '../view';
import { lobbyMiniData } from '../data';
import { lobbyMiniHandler } from '../handler';
import { ids, features } from '../config';
import domHelper from './domHelper';

import { storeHelper } from 'utils';

const lobbyMiniViewInstance = lobbyMiniView.Instance;
const storeHelperInstance = storeHelper.Instance;

export default class lobbyMini {
  static Instance({ containerId }) {
    if(!this._instance) {
      this._instance = new lobbyMini({ containerId });
    }

    return this._instance;
  }

  constructor({ containerId }) {
    this.init({ containerId });
  }

  init({ containerId }) {
    storeHelperInstance.updateGlobalData({ feature: features.lobbyMini });
    domHelper.initSdkElement(containerId);
    appView.renderApp();
  }

  // 年龄小于8周岁的提示
  showEight(callback) {
    lobbyMiniViewInstance.showEight(callback);
  }

  // 8~16周岁不可充值，充值已达到上限的提示
  showSixteen(callback) {
    lobbyMiniViewInstance.showSixteen(callback);
  }

  // 8~16周岁可充值，但充值金额达到上限的提示
  showSixteenCharge(callback) {
    lobbyMiniViewInstance.showSixteenCharge(callback);
  }

  // 16~18周岁不可充值，充值已达到上限的提示
  showEighteen(callback) {
    lobbyMiniViewInstance.showEighteen(callback);
  }

  // 16~18周岁可充值，但充值金额已达到上限的提示
  showEighteenCharge(callback) {
    lobbyMiniViewInstance.showEighteenCharge(callback);
  }

  // 验证是否允许充值
  checkCharge({ gkey, exts }) {
    return new Promise(async (resolve, reject) => {
      const res = await lobbyMiniData.checkCharge({ gkey, exts }).catch(err => reject(err));
      if (!res) {
        return;
      }

      const handler = lobbyMiniHandler.getHandler({ status: res.charge_status, age: res.age });
      resolve({
        checkResult: res,
        handler
      });
    });
  }
}

