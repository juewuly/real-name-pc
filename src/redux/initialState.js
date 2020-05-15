import I from 'immutable';

const initialState = I.fromJS({
  global: {

    // 应用的场景
    type: 'default'
  },

  // 大厅相关提示信息
  lobby: {
    show: false,
    title: '',
    subTitle: '',
    content: ''
  },

  // 弹窗相关数据
  popup: {
    // 是否显示弹窗
    show: false,
    title: '',
    subTitle: '',
    content: ''
  },

  // 实名认证相关数据
  realName: {
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
});

export default initialState;