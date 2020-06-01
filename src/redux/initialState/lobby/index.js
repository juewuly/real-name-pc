/**
 * @author: liuyang9
 * @description: 大厅支付的state 
 */


export default class lobby {
  static get initState() {
    return {
      // 是否显示
      show: false,
      title: '',
      subTitle: '',
      content: ''
    }
  }
}