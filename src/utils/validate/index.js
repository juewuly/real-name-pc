import rules from './rules';

class ValidateMate {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new ValidateMate();
    }

    return this._instance;
  }

  /**
   * 检查姓名，2至30个汉字
   * @param {*} name 姓名
   */
  checkName(name) {
    return rules.checkName(name)
  };

  /**
   * 验证是否满18岁
   * @param {*} numOfCard 身份证号
   */
  checkCardAdult(numOfCard) {
    return rules.checkCardAdult(numOfCard);
  };

  /**
   * 检查身份证
   * @param {*} numOfCard 身份证号
   */
  checkCard(numOfCard) {
    const errorMap = {
      'null': '请输入身份证',
      length: '身份证号码长度错误，请核对！',
      province: '身份证号码证件地区未知，请核对！',
      birthday: '身份证号码出生日期非法，请核对！',
      parity: '身份证号码不符合国定标准，请核对！',
      adult: '未满18周岁无法进行充值'
    };

    let checkResult = {
      isRight: true,
      errorInfo: ''
    };

    const checkRules = [{
      name: 'null',
      rule: rules.checkCardNull
    }, { 
      name: 'length',
      rule: rules.checkCardLength
    }, { 
      name: 'province',
      rule: rules.checkCardProvince
    }, { 
      name: 'birthday',
      rule: rules.checkCardBirthday
    }, { 
      name: 'parity',
      rule: rules.checkCardParity
    }];

    checkRules.some(function(ruleItem) {
      if (!ruleItem.rule(numOfCard)) {
        var ruleName = ruleItem.name;
        checkResult.isRight = false;
        checkResult.errorInfo = errorMap[ruleName];
        return true;
      }
    })
  
    return checkResult;
  };

}

export default ValidateMate.Instance;

