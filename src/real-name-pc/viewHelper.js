import { checkAmount } from 'request';
import { 
  logHelper,
  paramsHelper,
  modelData
} from 'utils';

const logInstance = logHelper.Instance;
const paramsInstance = paramsHelper.Instance;
const modelDataInstance = modelData.Instance;

class viewHelper {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new viewHelper();
    }

    return this._instance;
  }

  /**
   * 根据check接口返回的状态码和年龄，来弹相应的弹窗提示
   * @param {*} status 
   * @param {*} ageLower 
   */
  showTipByStatus(status, ageLower) {
    const popupFuncMap = {
      1: null,
      2: {
        0: this.showEight,
        8: this.showSixteenCharge,
        16: this.showEighteenCharge
      },
      3: {
        0: this.showEight,
        8: this.showSixteen,
        16: this.showEighteen
      }
    }

    const popupFunc = popupFuncMap[status][ageLower];
    if (popupFunc) {
      popupFunc();
    }
  }

  // 验证金额参数是否有效
  validateAmountParams({ amount, gkey }) {
    return new Promise((resolve, reject) => {
      const pass = paramsInstance.validateKeys({ amount, gkey });

      if (pass) {
        resolve(true);
        return;
      }
    
      reject('参数异常');
    })
  }

  /**
   * 验证金额是否允许充值
   * @param {*} param0 
   */
  checkAmount({ amount, gkey }) {
    return new Promise(async (resolve, reject) => {
      // 验证金额参数是否有效
      await this.validateAmountParams({ amount, gkey });

      const res = await checkAmount({ amount, gkey}).catch(err => reject(err));
      if (!res) {
        return;
      }

      resolve(res);

      modelDataInstance.setRealNameData(res.open_check_auth);
      modelDataInstance.setFcmPayStatus(res.fcm_pay_status);
      if (!modelDataInstance.needCheckRealName()) {
        return;
      }

      const realNameStatus = modelDataInstance.getRealNameStatus();
      switch (realNameStatus) {
        // 未实名
        case '0':
          logInstance.log('未实名');
          this.showRealName({ canClose: modelDataInstance.canCloseRealName() });
          break;
        // 已实名但未成年
        case '1':
          logInstance.log('已实名，未成年');
          if (modelDataInstance.ageLimitIsOpen()) {
            const fcmPayStatus = modelDataInstance.getFcmPayStatus();
            const { status, age } = fcmPayStatus;
      
            if (status === 1) {
              // modelData.dispatchRecharge();
            } else {
              logInstance.log(`禁止充值: status:${status}, age: ${age}`);
              this.showTipByStatus(status, age);
            }
            return;
          }
      
          if (modelDataInstance.canRechargeTime()) {
            // modelData.dispatchRecharge();
          } else {
            logInstance.log('在禁止充值时间段内');
            // 在禁止充值时间段内给出提示
            this.showNonage();
          }

          break;
        // 已实名并已成年
        case '2':
          logInstance.log('已实名，已成年');
          break;
      }
    });
  }
}

export default viewHelper;

