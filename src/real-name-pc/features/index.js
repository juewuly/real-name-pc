import h5Platform from './realName';
import lobby from './lobby';
import lobbyMini from './lobbyMini';
import { features as featuresEnum } from '../config';

class features {
  constructor() {}

  // 根据feature名称获取相应的class
  static getFeatureClass(feature) {
    const featuresMap = {
      [featuresEnum.h5Platform]: h5Platform,
      [featuresEnum.lobby]: lobby,
      [featuresEnum.lobbyMini]: lobbyMini
    };

    return featuresMap[feature] ? featuresMap[feature] : h5Platform;
  }
}

export default features;