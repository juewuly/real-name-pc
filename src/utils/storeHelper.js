/**
 * @description: 订阅store里的相关数据
 */

import store from 'src/common/store';
import logHelper from './logHelper';
import { 
  UPDATE_POPUP_DATA, 
  SET_POPUP_DATA,
  UPDATE_REAL_NAME_DATA,
  UPDATE_GLOBAL_DATA,
  SET_LOBBY_DATA,
  SET_LOBBY_MINI_DATA
} from 'src/redux/constants';

const logInstance = logHelper.Instance;
const storeInstance = store.Instance;

class storeHelper {
  constructor(store) {
    // redux里的store
    this._store = store;
  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new storeHelper(storeInstance);
    }

    return this._instance;
  }

  /**
   * 获取redux里的store
   */
  get store() {
    return this._store;
  }

  /**
   * 获取redux里的state
   */
  get state() {
    return this.store.getState();
  }

  /**
   * 获取实名认证窗体的状态（显示或关闭）
   */
  getRealNameWindowStatus() {
    return this.state.getIn(['data', 'realName', 'show']);
  }

  /**
   * 获取实名认证结果
   */
  getRealNameSubmitResult() {
    return this.state.getIn(['data', 'realName', 'add', 'result']);
  }

  /**
   * 订阅关闭实名认证
   */
  subscribeCloseRealName(onClose) {
    const oldWindowStatus = this.getRealNameWindowStatus();

    const handleStoreChange = () => {
      const windowStatus = this.getRealNameWindowStatus();
      if (windowStatus !== oldWindowStatus) {
        if (typeof onClose === 'function') {
          logInstance.closeRealName();
          onClose();
        }

        logInstance.unsubscribeCloseRealName();
        unsubscribeCloseRealName();
      }
    }

    logInstance.subscribeCloseRealName();
    const unsubscribeCloseRealName = this.store.subscribe(handleStoreChange);
  }

  /**
   * 订阅提交实名认证
   * @param {*} param
   */
  subscribeSubmitRealName({ onSubmitSuccess, onSubmitError }) {
    let oldSubmitResult = this.getRealNameSubmitResult();

    const handleStoreChange = () => {
      const submitResult = this.getRealNameSubmitResult();

      if (submitResult === oldSubmitResult) {
        return;
      }

      oldSubmitResult = submitResult;
      const result = submitResult.toJS();

      if (result.error_code !== '0') {
        logInstance.submitRealNameError(result);
        alert(result.error);

        if (typeof onSubmitError === 'function') {
          onSubmitError({ 
            errno: result.error_code,
            errmsg: result.error
          });
        }
        return;
      }

      const { ret } = result;
      if (ret.code !== '999') {
        logInstance.submitRealNameError(result);
        alert(ret.msg);

        if (typeof onSubmitError === 'function') {
          onSubmitError({
            errno: ret.code,
            errmsg: ret.msg
          });
        }
        return;
      }

      logInstance.submitRealNameSuccess();
      alert('实名认证成功！');

      if (typeof onSubmitSuccess === 'function') {
        onSubmitSuccess(result);
      }
      
      logInstance.unsubscribeSubmitRealName();
      unsubscribeSubmitRealName();
      return;
    }

    logInstance.subscribeSubmitRealName();
    const unsubscribeSubmitRealName = this.store.subscribe(handleStoreChange);
  }

  // 设置popup数据
  setPopupData(data) {
    this.store.dispatch({
      type: SET_POPUP_DATA,
      data
    });
  }

  // 更新实名数据
  updateRealNameData(data) {
    this.store.dispatch({
      type: UPDATE_REAL_NAME_DATA,
      data
    });
  }

  // 更新全局数据
  updateGlobalData(data) {
    this.store.dispatch({
      type: UPDATE_GLOBAL_DATA,
      data
    });
  }

  // 设置大厅数据
  setLobbyData(data) {
    this.store.dispatch({
      type: SET_LOBBY_DATA,
      data
    });
  }

  // 设置大厅mini付的数据
  setLobbyMiniData(data) {
    this.store.dispatch({
      type: SET_LOBBY_MINI_DATA,
      data
    });
  }
}

export default storeHelper;