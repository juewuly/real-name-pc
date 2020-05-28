/**
 * @author: liuyang9
 * @description: 实名状态为未实名时的处理器
 */

import { logFactory } from 'utils';
import { realNameView } from 'sdk/view';
import { features } from 'sdk/config';
import { paramsConfig, eventConfig } from 'sdk/config';

const logHelper = logFactory.getHelperByFeature(features.h5Platform);
const realNameViewInstance = realNameView.Instance;

export default class unRealNameHandler {
  static exec({ canClose } = { canClose: false }) {
    logHelper.log('未实名');
    
    const appkey = paramsConfig.appkey;
    const qid = paramsConfig.qid;
    const platform = paramsConfig.platform;
    const idcard_check_type = paramsConfig.idcard_check_type;

    const onClose = eventConfig.onCloseRealName;
    const onSubmitSuccess = eventConfig.onSubmitSuccess;
    const onSubmitError = eventConfig.onSubmitError;

    realNameViewInstance.showRealName({
      appkey,
      qid,
      platform,
      idcard_check_type,
      canClose, 
      onClose, 
      onSubmitSuccess, 
      onSubmitError
    });
  }

  constructor() { }
}