class eventConfig {
  constructor() {

  }

  static set onCloseRealName(callback) {
    this._onCloseRealName = callback;
  }

  static get onCloseRealName() {
    return this._onCloseRealName;
  }

  static set onSubmitSuccess(callback) {
    this._onSubmitSuccess = callback;
  }

  static get onSubmitSuccess() {
    return this._onSubmitSuccess;
  }

  static set onSubmitError(callback) {
    this._onSubmitError = callback;
  }

  static get onSubmitError() {
    return this._onSubmitError;
  }
}

export default eventConfig;