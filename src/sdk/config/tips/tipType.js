/**
 * @author: liuyang9
 * @description: 防沉迷提示信息所属的类型
 */

export default class tipType {
  // 未成年人在禁止充值的时间段内
  static get nonageForbidCharge() {
    return 'nonageForbidCharge';
  }

  // 年龄小于8周岁的提示
  static get ageLessThanEight() {
    return 'ageLessThanEight';
  }

  // 8-16周岁充值金额达到上限的提示
  static get ageLessThanSixteen() {
    return 'ageLessThanSixteen';
  }

  // 8-16周岁可充值，但充值金额达到上限的提示
  static get ageLessThanSixteenCharge() {
    return 'ageLessThanSixteenCharge';
  }

  // 16-18周岁充值金额达到上限的提示
  static get ageLessThanEighteen() {
    return 'ageLessThanEighteen';
  }

  // 16-18周岁可充值，但充值金额达到上限的提示
  static get ageLessThanEighteenCharge() {
    return 'ageLessThanEighteenCharge';
  }

  // 登录后时长已达到上限的提示
  static get gameTimeLimitWhenLogin() {
    return 'gameTimeLimitWhenLogin';
  }

  // 游戏中时长已达到上限的提示
  static get gameTimeLimitWhenPlaying() {
    return 'gameTimeLimitWhenPlaying';
  }

  constructor() { }
}