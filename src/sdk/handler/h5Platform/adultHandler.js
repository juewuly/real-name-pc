/**
 * @author: liuyang9
 * @description: 实名状态为已成年时的处理器
 */

import { logFactory } from 'utils';
import { features } from 'sdk/config';

const logHelper = logFactory.getHelperByFeature(features.h5Platform);

export default class adultHandler {
  static exec() {
    logHelper.log('已实名，已成年');
  }

  constructor() { }
}