/**
 * @author: liuyang9
 * @description: 允许充值的处理器
 */


import { logFactory } from 'utils';
import { features } from 'sdk/config';

const logHelper = logFactory.getHelperByFeature(features.lobbyMini);

export default class allowChargeHandler {
  constructor() { }

  exec() {
    logHelper.log('允许充值');
  }
}