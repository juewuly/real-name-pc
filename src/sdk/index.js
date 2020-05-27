/**
 * author: liuyang9
 * description: PC端实名认证
 */


import features from './features';

export default class RealNamePc {
  static Instance({ feature, containerId }) {
    if (!this._instance) {
      const featureClass = features.getFeatureClass(feature);
      this._instance = featureClass.Instance({ containerId });
    }
    return this._instance;
  }

  constructor() { }
}
