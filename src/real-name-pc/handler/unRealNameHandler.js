import { realNameView } from './view';
import { modelData } from 'util';

const realNameViewInstance = realNameView.Instance;
const modelDataInstance = modelData.Instance;

class unRealNameHandler {
  constructor() {

  }

  static exec({ options, onClose, onSubmitSuccess, onSubmitError }) {
    logInstance.log('未实名');
    realNameViewInstance.showRealName({
      canClose: modelDataInstance.canCloseRealName(),
      options,
      onClose: handleClose,
    });
  }

}

export default unRealNameHandler;