/**
 * author: liuyang9
 * description: PC端实名认证
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configStore from 'src/common/configStore';
import App from './app';
import { 
  UPDATE_POPUP_DATA, 
  SET_POPUP_DATA,
  UPDATE_REAL_NAME_DATA
} from 'src/redux/constants';
import Config from './config';

import { fetchRealName } from 'request';

const store = configStore();

export default class RealNamePc {
  constructor() {
    this.init();
  }

  static get Instance() {
    if(!this._instance) {
      this._instance = new RealNamePc();
    }

    return this._instance;
  }

  init() {
    this.root = document.createElement('div');
    this.root.setAttribute('id', 'real-name-pc');

    this.modalRoot = document.createElement('div');
    this.modalRoot.setAttribute('id', 'real-name-pc-modal');

    document.getElementsByTagName('body')[0].append(this.root);
    document.getElementsByTagName('body')[0].append(this.modalRoot);

    renderApp(App);
  }

  /**
   * 年龄小于8周岁的提示
   */
  showEight() {
    const { title, subTitle, content } = Config.pay.ageLessThanEight;
    setPopupData({
      show: true,
      title,
      subTitle,
      content
    });
  }

  /**
   * 8~16周岁不可充值，充值已达到上限的提示
   */
  showSixteen() {
    const { title, subTitle, content } = Config.pay.ageLessThanSixteen;
    setPopupData({
      show: true,
      title,
      subTitle,
      content
    });
  }

  /**
   * 8~16周岁可充值，但充值金额达到上限的提示
   */
  showSixteenCharge() {
    const { title, subTitle, content } = Config.pay.ageLessThanSixteenCharge;
    setPopupData({
      show: true,
      title,
      subTitle,
      content
    });    
  }

  /**
   * 16~18周岁不可充值，充值已达到上限的提示
   */
  showEighteen() {
    const { title, subTitle, content } = Config.pay.ageLessThanEighteen;
    setPopupData({
      show: true,
      title,
      subTitle,
      content
    });
  }

  /**
   * 16~18周岁可充值，但充值金额已达到上限的提示
   */
  showEighteenCharge() {
    const { title, subTitle, content } = Config.pay.ageLessThanEighteenCharge;
    setPopupData({
      show: true,
      title,
      subTitle,
      content
    });
  }

  /**
   * 登录后游戏时长已达到上限时的提示
   */
  showTimeLimitAfterLogin() {
    const { title, content } = Config.login.gameTimeLimit;
    setPopupData({
      show: true,
      title,
      content,
      canClose: false,
      noMask: true
    });
  }

  /**
   * 游戏中时长已达到上限时的提示
   */
  showTimeLimitWhenPlaying() {
    const { title, subTitle, content } = Config.playing.gameTimeLimit;
    setPopupData({
      show: true,
      title,
      subTitle,
      content,
      canClose: false,
      noMask: true
    })
  }

  /**
   * 关闭弹窗
   */
  close() {
    store.dispatch({
      type: UPDATE_POPUP_DATA,
      data: {
        show: false
      }
    });
  }

  /**
   * 显示实名认证
   * @param {*} canClose 是否可关闭
   */
  showRealName({ canClose, onClose, onSubmitSuccess, onSubmitError }) {
    updateRealNameData({ 
      show: true,
      canClose
    });

    // 获取是否显示实名认证窗口
    const getStatus = state => state.getIn(['data', 'realName', 'show']);
    // 获取实名认证结果
    const getSubmitResult = state => state.getIn(['data', 'realName', 'add', 'result'])
    const initSubmitResult = getSubmitResult(store.getState());

    const handleStoreChange = () => {
      const show = getStatus(store.getState());
      const submitResult = getSubmitResult(store.getState());

      if (!show) {
        onClose && onClose();
        unsubscribe();
        return;
      }

      if (submitResult !== initSubmitResult) {
        const result = submitResult.toJS();

        if (result.error_code !== '0') {
          alert(result.error);
          onSubmitError && onSubmitError({ 
            errno: result.error_code,
            errmsg: result.error
          });
          return;
        }

        const { ret } = result;
        if (ret.code !== '999') {
          alert(ret.msg);
          onSubmitError && onSubmitError({
            errno: ret.code,
            errmsg: ret.msg
          });
          return;
        }

        alert('实名认证成功！');
        onSubmitSuccess && onSubmitSuccess(result);
        this.closeRealName();
        unsubscribe();
        return;
      }
    }

    const unsubscribe = store.subscribe(handleStoreChange);
  }

  /**
   * 关闭实名
   */
  closeRealName() {
    updateRealNameData({ show: false });
  }

  /**
   * 获取实名信息
   * @param {*} param0 
   */
  fetchRealName({
    appkey, 
    qids, 
    platform, 
    idcard_check_type
  }) {
    return new Promise((resolve, reject) => {
      fetchRealName({ appkey, qids, platform, idcard_check_type })
      .then(res => resolve(res))
      .catch(err => reject(err));
    });
  }
}

const updatePopupData = data => {
  store.dispatch({
    type: UPDATE_POPUP_DATA,
    data
  });
}

const setPopupData = data => {
  store.dispatch({
    type: SET_POPUP_DATA,
    data
  });
}

/**
 * 更新实名数据
 * @param {*} data 
 */
const updateRealNameData = data => {
  store.dispatch({
    type: UPDATE_REAL_NAME_DATA,
    data
  });
}


const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('real-name-pc')
  );
}

if (module.hot) {
  module.hot.accept('./app', () => {
    const App = require('./app').default;
    renderApp(App);
  });
}