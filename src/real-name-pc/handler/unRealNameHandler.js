import { realNameView } from '../view';
import { logHelper } from 'utils';
import { paramsConfig, eventConfig } from '../config/index';

const realNameViewInstance = realNameView.Instance;
const logInstance = logHelper.Instance;

class unRealNameHandler {
  constructor() {

  }

  static exec({ canClose } = { canClose: false }) {
    logInstance.log('未实名');
    
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

}

export default unRealNameHandler;