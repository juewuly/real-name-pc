/**
 * author: liuyang9
 * description: PC端实名认证
 */


import features from './features';

export default class RealNamePc {
  constructor() { }

  static Instance({ feature, containerId }) {
    if (!this._instance) {
      const featureClass = features.getFeatureClass(feature);
      this._instance = new featureClass({ containerId });
    }

    return this._instance;
  }
}
