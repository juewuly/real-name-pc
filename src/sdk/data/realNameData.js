import { fetchRealName, checkAmount } from 'request';
import { paramsHelper, modelData, logHelper } from 'utils';

const paramsInstance = paramsHelper.Instance;
const modelDataInstance = modelData.Instance;
const logInstance = logHelper.Instance;

class realNameData {
  constructor() {

  }

  /**
   * 获取实名信息
   * @param {*} param0 
   */
  static fetch({
    appkey, 
    qids, 
    platform, 
    idcard_check_type
  }) {
    return new Promise((resolve, reject) => {
      // 验证参数是否合法
      const pass = paramsInstance.validateKeys({ 
        appkey, 
        qids, 
        platform, 
        idcard_check_type
      });
      if (!pass) {
        reject('访问获取实名信息api时，参数异常');
        return;
      }

      fetchRealName({ appkey, qids, platform, idcard_check_type })
      .then(res => resolve(res))
      .catch(err => reject(err));
    });
  }

  static checkAmount({ amount, gkey }) {
    return new Promise((resolve, reject) => {
      const pass = paramsInstance.validateKeys({ amount, gkey });
      if (!pass) {
        reject('访问金额检查api时，参数异常');
        return;
      }

      checkAmount({ amount, gkey })
      .then(res => {
        this.storeCheckAmountResult(res);
        resolve(res);
      })
      .catch(err => reject(err));
    });
  }

  // 存储金额验证结果信息
  static storeCheckAmountResult(res) {
    try {
      modelDataInstance.setRealNameData(res.open_check_auth);
      modelDataInstance.setFcmPayStatus(res.fcm_pay_status);
    } catch (error) {
      logInstance.error('存储金额验证结果信息时出现异常', error);
    }
  }
}

export default realNameData;