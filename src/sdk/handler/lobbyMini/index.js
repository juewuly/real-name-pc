/**
 * @author: liuyang9
 * @description: 根据充值状态，返回相应的处理器
 */

import allowChargeHandler from './allowChargeHandler';
import forbidChargeHandler from './forbidChargeHandler';
import { logFactory } from 'utils';
import { features } from 'sdk/config';

const logHelper = logFactory.getHelperByFeature(features.lobbyMini);

export default class lobbyMiniHandler {
  /**
   * 根据充值状态，获取相应的处理器
   */
  static getHandler({ status, age }) {
    if ([1, 2, 3].indexOf(status) === -1) {
      logHelper.error(`充值状态参数异常，当前的充值状态为${status}。`);
      return null;
    }

    if (status === 1) {
      return new allowChargeHandler();
    }

    return new forbidChargeHandler({ status, age });
  }

  constructor() { }
}