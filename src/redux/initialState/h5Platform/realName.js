/**
 * @author: liuyang9
 * @description: 实名认证的state 
 */


export default class realName {
  static get initState() {
    return {
      // 是否显示实名认证
      show: false,
      // 是否可关闭
      canClose: false,
      // 进行实名认证时需要传递的参数
      options: {},
      // 实名认证信息
      fetch: {
        fetching: false,
        data: {}
      },
      // 实名认证结果
      add: {
        posting: false,
        result: {}
      }
    }
  }
}