/**
 * @author: liuyang9
 * @description: 对外提供store单例
 */


import configStore from './configStore';

export default class store {
  static get Instance() {
    if (!this._instance) {
      this._instance = configStore();
    }
    return this._instance;
  }

  constructor() { }
}