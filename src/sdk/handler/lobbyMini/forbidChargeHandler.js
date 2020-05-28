/**
 * @author: liuyang9
 * @description: 禁止充值的处理器
 */

import { logFactory } from 'utils';
import { lobbyMiniView } from 'sdk/view';
import { features } from 'sdk/config';

const logHelper = logFactory.getHelperByFeature(features.lobbyMini);
const lobbyMiniViewInstance = lobbyMiniView.Instance;

export default class forbidChargeHandler {
  constructor({ status, age }) {
    this._status = status;
    this._age = age;
  }

  exec(callBack) {
    logHelper.log('禁止充值');
    lobbyMiniViewInstance.showTipByStatus({
      status: this._status,
      ageLower: this._age,
      onClickOk: callBack
    });
  }
}