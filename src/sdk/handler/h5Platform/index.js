/**
 * @author: liuyang9
 * @description: 根据用户的实名状态，返回相应的处理器
 */


import unRealNameHandler from './unRealNameHandler';
import nonageHandler from './nonageHandler';
import adultHandler from './adultHandler';

import { logHelper } from 'utils';
import realNameModelData from 'sdk/data/h5Platform/realNameModelData';

const realNameModelDataInstance = realNameModelData.Instance;
const logInstance = logHelper.Instance;

export default class h5PlatformHandler {
  /**
   * 根据用户的实名状态，获取相应的处理器
   */
  static getHandler() {
    const status = realNameModelDataInstance.getRealNameStatus();

    if (['0', '1', '2'].indexOf(status) === -1) {
      logInstance.error('用户的实名状态参数异常');
      return null;
    }

    if (!realNameModelDataInstance.needCheckRealName()) {
      return null;
    }

    const statusMap = {
      '0': unRealNameHandler,
      '1': nonageHandler,
      '2': adultHandler
    }

    return statusMap[status];
  }

  constructor() { }
}