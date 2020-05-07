/**
 * @description: 对外提供store单例
 */


import configStore from './configStore';

class store {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = configStore();
    }

    return this._instance;
  }
}

export default store;