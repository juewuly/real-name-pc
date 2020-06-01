/**
 * @author: liuyang9
 * @description: redux中state的初始化
 */


import { fromJS } from 'immutable';
import { features } from 'sdk/config';
import h5Platform from './h5Platform';
import lobby from './lobby';
import lobbyMini from './lobbyMini';

export default class initialState {
  static get initState() {
    return fromJS({
      // 公用数据
      global: {
        // 应用的场景
        feature: features.h5Platform
      },

      // h5联运平台
      [features.h5Platform]: h5Platform.initState,
      // 大厅相关提示信息
      [features.lobby]: lobby.initState,
      // 大厅mini支付相关提示信息
      [features.lobbyMini]: lobbyMini.initState
    });
  }
}