/**
 * @description: 允许充值的处理器
 */

import { logHelper } from 'utils';

const logInstance = logHelper.Instance;

class allowChargeHandler {
  constructor() {

  }

  exec() {
    logInstance.log('允许充值');
  }
}

export default allowChargeHandler;