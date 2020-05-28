import baseParams from './baseParams';
import h5PlatFormParams from './h5PlatformParams';

export default class paramsHelper {
  static get Instance() {
    if (!this._instance) {
      this._instance = new paramsHelper();
    }
    return this._instance;
  }

  constructor() {
    this._baseParams = new baseParams();
    this._h5PlatformParams = new h5PlatFormParams();
  }

  get baseParams() {
    return this._baseParams;
  }

  get h5PlatFormParams() {
    return this._h5PlatformParams;
  }
}