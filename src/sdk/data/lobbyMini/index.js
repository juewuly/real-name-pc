/**
 * @author: liuyang9
 * @description: 大厅mini付防沉迷的数据层
 */

import { fetchMgFcm } from 'request';
import { paramsFactory } from 'utils';
import { features } from 'sdk/config';

const paramsHelper = paramsFactory.getHelperByFeature(features.lobbyMini);

export default class lobbyMiniData {
  /**
   * 验证是否允许充值
   * @param {*} param0 
   */
  static checkCharge({
    gkey,
    exts
  }) {
    return new Promise((resolve, reject) => {
      // 验证参数是否合法
      const pass = paramsHelper.keysNotNull({ gkey, exts });
      if (!pass) {
        reject('访问mg_fcm api时，参数异常');
        return;
      }

      fetchMgFcm({ gkey, exts })
      .then(res => resolve(res))
      .catch(err => reject(err));
    });
  }

  constructor() { }
}