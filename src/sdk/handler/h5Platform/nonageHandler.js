/**
 * @author: liuyang9
 * @description: 实名状态为未成年时的处理器
 */


import { logHelper } from 'utils';
import { popupView } from 'sdk/view';
import realNameModelData from 'sdk/data/h5Platform/realNameModelData';

const logInstance = logHelper.Instance;
const realNameModelDataInstance = realNameModelData.Instance;
const popupViewInstance = popupView.Instance;

export default class nonageHandler {
  static exec() {
    logInstance.log('已实名，未成年');

    if (realNameModelDataInstance.ageLimitIsOpen()) {
      const fcmPayStatus = realNameModelDataInstance.getFcmPayStatus();
      const { status, age } = fcmPayStatus;

      if (status === 1) {
        logInstance.log('允许充值');
      } else {
        logInstance.error(`禁止充值: status:${status}, age: ${age}`);
        popupViewInstance.showTipByStatus(status, age);
      }
      return;
    }

    if (realNameModelDataInstance.canRechargeTime()) {
      logInstance.log('在允许充值时间段内');
    } else {
      logInstance.error('在禁止充值时间段内');
      // 在禁止充值时间段内给出提示
      popupViewInstance.showNonage();
    }
  }

  constructor() { }
}