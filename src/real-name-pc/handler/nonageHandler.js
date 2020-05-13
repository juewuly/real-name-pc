import { modelData, logHelper } from 'utils';
import { popupView } from '../view';

const logInstance = logHelper.Instance;
const modelDataInstance = modelData.Instance;
const popupViewInstance = popupView.Instance;

class nonageHandler {
  constructor() {

  }

  static exec() {
    logInstance.log('已实名，未成年');

    if (modelDataInstance.ageLimitIsOpen()) {
      const fcmPayStatus = modelDataInstance.getFcmPayStatus();
      const { status, age } = fcmPayStatus;

      if (status === 1) {
        logInstance.log('允许充值');
      } else {
        logInstance.error(`禁止充值: status:${status}, age: ${age}`);
        popupViewInstance.showTipByStatus(status, age);
      }
      return;
    }

    if (modelDataInstance.canRechargeTime()) {
      logInstance.log('在允许充值时间段内');
    } else {
      logInstance.error('在禁止充值时间段内');
      // 在禁止充值时间段内给出提示
      popupViewInstance.showNonage();
    }
  }
}

export default nonageHandler;