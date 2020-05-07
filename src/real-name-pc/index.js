/**
 * author: liuyang9
 * description: PC端实名认证
 */

import { fetchRealName, checkAmount } from 'request';
import viewHelper from './viewHelper';
import { 
  storeHelper, 
  logHelper, 
  paramsHelper,
  modelData
} from 'utils';

const storeHelperInstance = storeHelper.Instance;
const logInstance = logHelper.Instance;
const paramsInstance = paramsHelper.Instance;
const modelDataInstance = modelData.Instance;
const viewHelperInstance = viewHelper.Instance;

const updateRealNameData = data => storeHelperInstance.updateRealNameData(data);

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
    // 显示容器
    this.root = document.createElement('div');
    this.root.setAttribute('id', 'real-name-pc');

    // 背景蒙层
    this.modalRoot = document.createElement('div');
    this.modalRoot.setAttribute('id', 'real-name-pc-modal');

    document.getElementsByTagName('body')[0].append(this.root);
    document.getElementsByTagName('body')[0].append(this.modalRoot);

    viewHelperInstance.renderApp();
  }

  // 临时测试
  test() {
    this.showNonage();
  }

  // 未成年人在禁止充值时间段内，且未开启年龄段限制
  showNonage() {
    viewHelperInstance.showNonage();
  }

  // 年龄小于8周岁的提示
  showEight() {
    viewHelperInstance.showEight();
  }

  // 8~16周岁不可充值，充值已达到上限的提示
  showSixteen() {
    viewHelperInstance.showSixteen();
  }

  // 8~16周岁可充值，但充值金额达到上限的提示
  showSixteenCharge() {
    viewHelperInstance.showSixteenCharge();
  }

  // 16~18周岁不可充值，充值已达到上限的提示
  showEighteen() {
    viewHelperInstance.showEighteen();
  }

  // 16~18周岁可充值，但充值金额已达到上限的提示
  showEighteenCharge() {
    viewHelperInstance.showEighteenCharge();
  }

  // 登录后游戏时长已达到上限时的提示
  showTimeLimitAfterLogin() {
    viewHelperInstance.showTimeLimitAfterLogin();
  }

  /**
   * 游戏中时长已达到上限时的提示
   */
  showTimeLimitWhenPlaying() {
    viewHelperInstance.showTimeLimitWhenPlaying();
  }

  /**
   * 关闭弹窗
   */
  close() {
    viewHelperInstance.closePopup();
  }

  /**
   * 显示实名认证
   * @param {*} canClose 是否可关闭
   */
  showRealName({ options, canClose, onClose, onSubmitSuccess, onSubmitError }) {
    // 验证参数是否合法
    const pass = paramsInstance.validateRealNameParams(options);
    if (!pass) {
      return;
    }

    const { appkey, qid, platform, idcard_check_type } = options;
    
    // 更新redux状态
    updateRealNameData({ 
      show: true,
      canClose,
      options: {
        appkey,
        qid,
        platform,
        idcard_check_type
      }
    });

    // 处理实名认证成功
    const handleSubmitSuccess = result => {
      this.closeRealName();
      onSubmitSuccess(result);
    }

    storeHelperInstance.subscribeCloseRealName(onClose);
    storeHelperInstance.subscribeSubmitRealName({
      onSubmitError,
      onSubmitSuccess: handleSubmitSuccess
    });
  }

  /**
   * 根据check接口返回的状态码和年龄，来弹相应的弹窗提示
   * @param {*} status 
   * @param {*} ageLower 
   */
  showTipByStatus(status, ageLower) {
    const popupFuncMap = {
      1: null,
      2: {
        0: this.showEight,
        8: this.showSixteenCharge,
        16: this.showEighteenCharge
      },
      3: {
        0: this.showEight,
        8: this.showSixteen,
        16: this.showEighteen
      }
    }

    const popupFunc = popupFuncMap[status][ageLower];
    if (popupFunc) {
      popupFunc();
    }
  }

  /**
   * 关闭实名
   */
  closeRealName() {
    logInstance.closeRealName();
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
      // 验证参数是否合法
      const pass = paramsInstance.validateKeys({
        appkey, 
        qids, 
        platform, 
        idcard_check_type
      }, ['appkey', 'qids', 'platform', 'idcard_check_type']);
      
      if (!pass) {
        reject('参数异常');
        return;
      }

      fetchRealName({ appkey, qids, platform, idcard_check_type })
      .then(res => resolve(res))
      .catch(err => reject(err));
    });
  }

  /**
   * 验证金额是否允许充值
   * @param {*} param0 
   */
  checkAmount({ amount, gkey }) {
    return new Promise((resolve, reject) => {
      // 验证参数是否合法
      const pass = paramsInstance.validateKeys({
        amount,
        gkey
      }, ['amount', 'gkey']);

      if (!pass) {
        reject('参数异常');
        return;
      }

      checkAmount({ amount, gkey })
      .then(res => {
        resolve(res);

        modelDataInstance.setRealNameData(res.open_check_auth);
        modelDataInstance.setFcmPayStatus(res.fcm_pay_status);

        if (modelDataInstance.needCheckRealName()) {
          switch (modelDataInstance.getRealNameStatus()) {
            // 未实名
            case '0':
              logInstance.log('未实名');

              this.showRealName({
                canClose: modelDataInstance.canCloseRealName(),
                options,
                onClose: handleClose,
              });
              
              break;
            // 已实名但未成年
            case '1':
              logInstance.log('已实名，未成年');

              if (modelDataInstance.ageLimitIsOpen()) {
                const fcmPayStatus = modelDataInstance.getFcmPayStatus();
                const { status, age } = fcmPayStatus;
          
                if (status === 1) {
                  // modelData.dispatchRecharge();
                } else {
                  logInstance.log(`禁止充值: status:${status}, age: ${age}`);
                  this.showTipByStatus(status, age);
                }
          
                return;
              }
          
              if (modelDataInstance.canRechargeTime()) {
                // modelData.dispatchRecharge();
              } else {
                logInstance.log('在禁止充值时间段内');
                // 在禁止充值时间段内给出提示
                this.showNonage();
              }

              break;
            // 已实名并已成年
            case '2':
              logInstance.log('已实名，已成年');
              break;
          }
        }

      })
      .catch(err => reject(err));
    });
  }
}

