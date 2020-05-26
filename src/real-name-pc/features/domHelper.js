class domHelper {
  constructor() {}

  // 获取容器元素
  static getContainerElement(containerId) {
    let result;
    if (containerId) {
      result = document.getElementById(containerId);
    }

    return result ? result : document.getElementsByTagName('body')[0];
  }
}

export default domHelper;