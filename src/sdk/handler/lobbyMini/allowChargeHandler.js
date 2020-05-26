/**
 * @author: liuyang9
 * @description: 允许充值的处理器
 */


import { logHelper } from 'utils';

const logInstance = logHelper.Instance;

export default class allowChargeHandler {
  constructor() { }

  exec() {
    logInstance.log('允许充值');
  }
}