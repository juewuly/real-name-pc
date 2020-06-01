/**
 * @author: liuyang9
 * @description: 大厅mini的state
 */


export default class lobbyMini {
  static get initState() {
    return {
      show: false,
      title: '',
      subTitle: '',
      content: '',
      onClickOk: () => {}
    }
  }
}