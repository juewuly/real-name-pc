/**
 * @author: liuyang9
 * @description: 设置实名相关的数据 
 */


import base from '../base';
import { features } from 'sdk/config';
import logFactory from 'utils/logFactory';
import { UPDATE_REAL_NAME_DATA } from 'src/redux/constants';

const logHelper = logFactory.getHelperByFeature(features.h5Platform);

export default class realName extends base {
  constructor(store) {
    super(store);
  }

  // 更新实名数据
  updateRealNameData(data) {
    this.store.dispatch({
      type: UPDATE_REAL_NAME_DATA,
      data
    });
  }

  // 获取实名认证窗体的状态（显示或关闭）
  getRealNameWindowStatus() {
    return this.state.getIn(['data', 'realName', 'show']);
  }

  // 获取实名认证结果
  getRealNameSubmitResult() {
    return this.state.getIn(['data', 'realName', 'add', 'result']);
  }

  // 订阅关闭实名认证
  subscribeCloseRealName(onClose) {
    const oldWindowStatus = this.getRealNameWindowStatus();

    const handleStoreChange = () => {
      const windowStatus = this.getRealNameWindowStatus();
      if (windowStatus !== oldWindowStatus) {
        if (typeof onClose === 'function') {
          logHelper.realName.closeRealName();
          onClose();
        }

        logHelper.realName.unsubscribeCloseRealName();
        unsubscribeCloseRealName();
      }
    }

    logHelper.realName.subscribeCloseRealName();
    const unsubscribeCloseRealName = this.store.subscribe(handleStoreChange);
  }

  // 订阅提交实名认证
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
        logHelper.realName.submitRealNameError(result);
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
        logHelper.realName.submitRealNameError(result);
        alert(ret.msg);

        if (typeof onSubmitError === 'function') {
          onSubmitError({
            errno: ret.code,
            errmsg: ret.msg
          });
        }
        return;
      }

      logHelper.realName.submitRealNameSuccess();
      alert('实名认证成功！');

      if (typeof onSubmitSuccess === 'function') {
        onSubmitSuccess(result);
      }
      
      logHelper.realName.unsubscribeSubmitRealName();
      unsubscribeSubmitRealName();
      return;
    }

    logHelper.realName.subscribeSubmitRealName();
    const unsubscribeSubmitRealName = this.store.subscribe(handleStoreChange);
  }
}