/**
 * @description: 根据用户的实名状态，进行相关处理
 */

import unRealNameHandler from './unRealNameHandler';
import nonageHandler from './nonageHandler';
import adultHandler from './adultHandler';


class statusHandler {
  constructor() {

  }

  /**
   * 根据用户的实名状态，获取相应的处理器
   * @param {*} status 实名状态
   */
  getHander(status) {
    if (['0', '1', '2'].indexOf(status) === -1) {
      console.error('用户的实名状态参数异常');
      return null;
    }

    const statusMap = {
      '0': unRealNameHandler,
      '1': nonageHandler,
      '2': adultHandler
    }

    return statusMap(status);
  }


}

export default statusHandler;