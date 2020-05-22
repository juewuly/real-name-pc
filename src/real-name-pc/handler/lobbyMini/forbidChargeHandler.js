/**
 * @description: 禁止充值的处理器
 */

import { logHelper } from 'utils';
import { lobbyMiniView } from 'src/real-name-pc/view';

const lobbyMiniViewInstance = lobbyMiniView.Instance;

const logInstance = logHelper.Instance;

class forbidChargeHandler {
  constructor({ status, age }) {
    this._status = status;
    this._age = age;
  }

  exec(callBack) {
    // logInstance.log('禁止充值');
    console.log('禁止充值');
    lobbyMiniViewInstance.showTipByStatus({
      status: this._status,
      ageLower: this._age,
      onClickOk: callBack
    });
  }
}

export default forbidChargeHandler;