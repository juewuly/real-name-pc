import I from 'immutable';
import { features } from 'sdk/config';

const initialState = I.fromJS({
  global: {
    // 应用的场景
    feature: features.h5Platform
  },

  // h5联运平台
  [features.h5Platform]: {
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
  },

  // 大厅相关提示信息
  [features.lobby]: {
    show: false,
    title: '',
    subTitle: '',
    content: ''
  },

  // 大厅mini支付相关提示信息
  [features.lobbyMini]: {
    show: false,
    title: '',
    subTitle: '',
    content: '',
    onClickOk: () => {}
  }
});

export default initialState;