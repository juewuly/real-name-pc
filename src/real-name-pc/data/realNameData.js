import { fetchRealName } from 'request';
import { 
  paramsHelper
} from 'utils';

const paramsInstance = paramsHelper.Instance;

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
        reject('参数异常');
        return;
      }

      fetchRealName({ appkey, qids, platform, idcard_check_type })
      .then(res => resolve(res))
      .catch(err => reject(err));
    });
  }
}

export default realNameData;