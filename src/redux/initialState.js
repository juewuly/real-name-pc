import I from 'immutable';

const initialState = I.fromJS({
  global: {},

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
    // 实名认证信息
    data: {}
  }
});

export default initialState;