/**
 * @author: liuyang9
 * @description: 创建sdk相关容器的dom操作
 */


import { ids } from 'sdk/config';

export default class domHelper {
  // 获取容器元素
  static getContainerElement(containerId) {
    let result;
    if (containerId) {
      result = document.getElementById(containerId);
    }

    return result ? result : document.getElementsByTagName('body')[0];
  }

  // 创建一个元素
  static createElement(id) {
    const result = document.createElement('div');
    result.setAttribute('id', id);
    return result;
  }

  // 创建sdk元素
  static createSdkElement() {
    return this.createElement(ids.sdkId);
  }

  // 创建sdk-modal元素
  static createSdkModalElement() {
    return this.createElement(ids.sdkModalId);
  }

  /**
   * 初始化sdk元素
   * @param {*} containerId 容器id
   */
  static initSdkElement(containerId) {
    const sdkEle = this.createSdkElement();
    const containerEle = this.getContainerElement(containerId);
    containerEle.appendChild(sdkEle);
  }

  /**
   * 初始化sdk-modal元素
   * @param {*} containerId 容器id
   */
  static initSdkModalElement(containerId) {
    const sdkModalEle = this.createSdkModalElement();
    const containerEle = this.getContainerElement(containerId);
    containerEle.appendChild(sdkModalEle);
  }

  constructor() { }
}