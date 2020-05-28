/**
 * @author: liuyang9
 * @description: h5联运平台防沉迷的数据层
 */

import { fetchRealName, checkAmount } from 'request';
import { paramsFactory, logHelper } from 'utils';
import realNameModelData from './realNameModelData';

const realNameModelDataInstance = realNameModelData.Instance;
const paramsHelper = paramsFactory.getHelperByFeature();

export default class h5PlatformData {
  /**
   * 获取实名信息
   * @param {*} param0 
   */
  static fetchRealName({
    appkey, 
    qids, 
    platform, 
    idcard_check_type
  }) {
    return new Promise((resolve, reject) => {
      // 验证参数是否合法
      const pass = paramsHelper.haveAllKeys({ 
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
      const pass = paramsHelper.keysNotNull({ amount, gkey });
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
      realNameModelDataInstance.setRealNameData(res.open_check_auth);
      realNameModelDataInstance.setFcmPayStatus(res.fcm_pay_status);
    } catch (error) {
      logHelper.error('存储金额验证结果信息时出现异常', error);
    }
  }

  constructor() { }
}