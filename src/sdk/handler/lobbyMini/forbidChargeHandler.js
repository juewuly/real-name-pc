/**
 * @author: liuyang9
 * @description: 禁止充值的处理器
 */

import { logHelper } from 'utils';
import { lobbyMiniView } from 'sdk/view';

const lobbyMiniViewInstance = lobbyMiniView.Instance;
const logInstance = logHelper.Instance;

export default class forbidChargeHandler {
  constructor({ status, age }) {
    this._status = status;
    this._age = age;
  }

  exec(callBack) {
    logInstance.log('禁止充值');
    lobbyMiniViewInstance.showTipByStatus({
      status: this._status,
      ageLower: this._age,
      onClickOk: callBack
    });
  }
}