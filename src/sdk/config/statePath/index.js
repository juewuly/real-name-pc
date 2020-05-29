import statePath from './statePath';

export default class proxy {
  static get Instance() {
    if (!this._instance) {
      this._instance = new statePath();
    }
    return this._instance;
  }

  static getPathByFeature(feature) {
    return this.Instance.getPathByFeature(feature);
  }

  static getRootPath() {
    return this.Instance.getRootPath();
  }
}