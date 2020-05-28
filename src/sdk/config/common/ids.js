/**
 * @author: liuyang9
 * @description: 公用的一些id
 */

export default class ids {
  // sdk的id
  static get sdkId() {
    return 'real-name-pc';
  }

  // sdk遮罩层id
  static get sdkModalId() {
    return 'real-name-pc-modal';
  }

  // store的根节点名
  static get rootNodeOfStore() {
    return 'data';
  } 

  constructor() { }
}