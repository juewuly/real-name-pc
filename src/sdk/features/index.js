/**
 * @author: liuyang9
 * @description: 获取feature对应的类
 */


import h5Platform from './h5Platform';
import lobby from './lobby';
import lobbyMini from './lobbyMini';
import { features as featuresEnum } from 'sdk/config';

export default class features {
  // 根据feature名称获取相应的class
  static getFeatureClass(feature) {
    const featuresMap = {
      [featuresEnum.h5Platform]: h5Platform,
      [featuresEnum.lobby]: lobby,
      [featuresEnum.lobbyMini]: lobbyMini
    };

    return featuresMap[feature] ? featuresMap[feature] : h5Platform;
  }

  constructor() {}
}