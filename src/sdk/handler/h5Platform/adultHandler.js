/**
 * @author: liuyang9
 * @description: 实名状态为已成年时的处理器
 */

import { logFactory } from 'utils';

const logHelper = logFactory.getHelperByFeature();

export default class adultHandler {
  static exec() {
    logHelper.log('已实名，已成年');
  }

  constructor() { }
}