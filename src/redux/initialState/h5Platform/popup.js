/**
 * @author: liuyang9
 * @description: 弹窗的state
 */


export default class popup {
  static get initState() {
    return {
      // 是否显示弹窗
      show: false,
      title: '',
      subTitle: '',
      content: ''
    }
  }
}