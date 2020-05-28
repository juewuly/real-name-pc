/**
 * @author: liuyang9
 * @description: 允许充值的处理器
 */


import { logFactory } from 'utils';

const logHelper = logFactory.getHelperByFeature();

export default class allowChargeHandler {
  constructor() { }

  exec() {
    logHelper.log('允许充值');
  }
}