/**
 * @author: liuyang9
 * @description: 实名状态为未成年时的处理器
 */


import { logFactory } from 'utils';
import { popupView } from 'sdk/view';
import { features } from 'sdk/config';
import realNameModelData from 'sdk/data/h5Platform/realNameModelData';

const logHelper = logFactory.getHelperByFeature(features.h5Platform);
const realNameModelDataInstance = realNameModelData.Instance;
const popupViewInstance = popupView.Instance;

export default class nonageHandler {
  static exec() {
    logHelper.log('已实名，未成年');

    if (realNameModelDataInstance.ageLimitIsOpen()) {
      const fcmPayStatus = realNameModelDataInstance.getFcmPayStatus();
      const { status, age } = fcmPayStatus;

      if (status === 1) {
        logHelper.log('允许充值');
      } else {
        logHelper.error(`禁止充值: status:${status}, age: ${age}`);
        popupViewInstance.showTipByStatus(status, age);
      }
      return;
    }

    if (realNameModelDataInstance.canRechargeTime()) {
      logHelper.log('在允许充值时间段内');
    } else {
      logHelper.error('在禁止充值时间段内');
      // 在禁止充值时间段内给出提示
      popupViewInstance.showNonage();
    }
  }

  constructor() { }
}