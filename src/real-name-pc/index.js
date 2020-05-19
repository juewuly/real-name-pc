/**
 * author: liuyang9
 * description: PC端实名认证
 */


import realName from './realName';
import lobby from './lobby';
import lobbyMini from './lobbyMini';
import { features } from './config';

export default class RealNamePc {
  constructor() {

  }

  static Instance({ feature, containerId }) {
    if(!this._instance) {
      const featureClass = getFeatureClass(feature);
      this._instance = new featureClass({ feature, containerId });
    }

    return this._instance;
  }
}

// 根据feature名称获取相应的class
const getFeatureClass = (feature) => {
  const featuresMap = {
    [features.h5Platform]: realName,
    [features.lobby]: lobby,
    [features.lobbyMini]: lobbyMini
  };

  return featuresMap[feature] ? featuresMap[feature] : realName;
}

