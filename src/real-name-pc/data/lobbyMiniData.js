/**
 * @description: 大厅mini付需要的相关数据
 */

import { fetchMgFcm } from 'request';
import { paramsHelper } from 'utils';

const paramsInstance = paramsHelper.Instance;

class lobbyMiniData {
  constructor() {

  }

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
      const pass = paramsInstance.validateKeys({ gkey, exts });
      if (!pass) {
        reject('访问mg_fcm api时，参数异常');
        return;
      }

      fetchMgFcm({ gkey, exts })
      .then(res => resolve(res))
      .catch(err => reject(err));
    });
  }
}

export default lobbyMiniData;