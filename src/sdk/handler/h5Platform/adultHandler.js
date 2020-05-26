/**
 * @author: liuyang9
 * @description: 实名状态为已成年时的处理器
 */

import { logHelper } from 'utils';

const logInstance = logHelper.Instance;

export default class adultHandler {
  static exec() {
    logInstance.log('已实名，已成年');
  }

  constructor() { }
}