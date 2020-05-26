/**
 * @description: 实名状态为已成年时的处理器
 */

import { logHelper } from 'utils';

const logInstance = logHelper.Instance;

class adultHandler {
  constructor() {

  }

  static exec() {
    logInstance.log('已实名，已成年');
  }
}

export default adultHandler;