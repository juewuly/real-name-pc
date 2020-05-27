/**
 * @author: liuyang9
 * @description: 处理实名相关的模型数据
 */

export default class realNameModelData {
  static get Instance() {
    if (!this._instance) {
      this._instance = new realNameModelData();
    }
    return this._instance;
  }

  constructor() {
     // 用户qid
    this._qid = null;

    // 游戏的key
    this._gkey = null;

    // 充值函数
    this._rechargeFun = null;

    // 实名数据
    this._realNameData = null;

    // 支付参数
    this._fcmParams = null;

    // 后端返回的fcm_pay_status信息
    this._fcmPayStatus = null;
  }

  /**
   * 设置qid
   * @param {*} qid 
   */
  setQid(qid) {
    this._qid = qid;
  }

  /**
   * 读取qid
   */
  getQid() {
    return this._qid;
  }

  /**
   * 设置gkey
   * @param {*} gkey 游戏的key
   */
  setGkey(gkey) {
    this._gkey = gkey;
  }

  /**
   * 读取gkey
   */
  getGkey() {
    return this._gkey;
  }

  /**
   * 设置实名数据
   * @param {*} realNameData 从服务端获取到的实名信息
   */
  setRealNameData(realNameData) {
    this._realNameData = realNameData;
  }

  /**
   * 是否在未成年人可充值的时间段内
   */
  canRechargeTime() {
    return this._realNameData.is_forbid_time === '0';
  }

  /**
   * 判断是否需要进行实名认证
   */
  needCheckRealName() {
    return this._realNameData.auth_type !== '0';
  }

  /**
   * 获取实名状态
   */
  getRealNameStatus() {
    return this._realNameData.status;
  }

  /**
   * 是否可以关闭实名认证
   */
  canCloseRealName() {
    return this._realNameData.auth_type === '2';
  }

  /**
   * 设置充值函数
   * @param {*} rechargeFun 充值函数
   */
  setRecharge(rechargeFun) {
    this._rechargeFun = rechargeFun;
  }

  /**
   * 调用充值
   */
  dispatchRecharge() {
    this._rechargeFun();
  }

  /**
   * 获取充值函数
   */
  getRechargeFun() {
    return this._rechargeFun;
  }

  /**
   * 设置支付防沉迷检验需要的参数
   * @param {*} params 
   */
  setFcmParams(params) {
    this._fcmParams = params;
  }

  /**
   * 获取支付防沉迷检验需要的参数
   */
  getFcmParams() {
    return this._fcmParams;
  }

  /**
   * 设置后端返回的防沉迷支付信息
   * @param {*} value 
   */
  setFcmPayStatus(value) {
    this._fcmPayStatus = value
  }

  /**
   * 获取防沉迷支付的信息
   */
  getFcmPayStatus() {
    return this._fcmPayStatus;
  }

  /**
   * 未成年年龄限制是否开启
   */
  ageLimitIsOpen() {
    return this._realNameData.auth_type === '3' && this._realNameData.pay_age_ctl === '1';
  }

  /**
   * 是否已成年
   */
  isAdult() {
    return this._realNameData.status === '2';
  }
}