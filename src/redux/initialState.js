import I from 'immutable';

const initialState = I.fromJS({
  global: {
    show: false,
  },
  popup: {
    // 是否显示弹窗
    show: false,
    title: '',
    subTitle: '',
    content: ''
  }
});

export default initialState;