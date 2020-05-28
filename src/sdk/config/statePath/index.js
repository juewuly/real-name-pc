import base from './base';

export default class statePath extends base {
  static get Instance() {
    if (!this._instance) {
      this._instance = new statePath();
    }
    return this._instance;
  }

  static getPathByFeature(feature) {
    return this.Instance.getPathByFeature(feature);
  }

  constructor() {
    super();
  }

  getPathByFeature(feature) {
    return [...this.rootPath, feature];
  }
}