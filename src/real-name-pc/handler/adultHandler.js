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