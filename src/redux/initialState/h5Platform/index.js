/**
 * @author: liuyang9
 * @description: h5联运平台的state
 */


import realName from './realName';
import popup from './popup';

export default class h5Platform {
  static get initState() {
    return {
      realName: realName.initState,
      popup: popup.initState
    }
  }
}