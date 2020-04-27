import provinceMap from './province-map';

class Rules {
  constructor() {

  }

  static get Instance() {
    if(!this._instance) {
      this._instance = new Rules();
    }

    return this._instance;
  }

  /**
   * 检查姓名，2至30个汉字
   * @param {*} name 姓名
   */
  checkName(name) {
    return /^[\u4e00-\u9fa5]{2,30}$/.test(name);
  };

  /**
   * 检查身份证非空
   * @param {*} numOfCard 身份证号
   */
  checkCardNull(numOfCard) {
    return !!numOfCard;
  };

  /**
   * 检查身份证位数
   * @param {*} numOfCard 身份证号
   */
  checkCardLength(numOfCard) {
    const regExp = new RegExp(/(^\d{15}$)|(^\d{17}(\d|x|X)$)/i);
    return regExp.test(numOfCard);
  }

  /**
   * 检票身份证的省
   * @param {*} numOfCard 身份证号
   */
  checkCardProvince(numOfCard) {
    const province = parseInt(numOfCard.substring(0, 2));
    return !!provinceMap[province];
  };

  /**
   * 验证出生日期
   * @param {*} numOfCard 身份证号
   */
  checkCardBirthday(numOfCard) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const year = numOfCard.substring(6,10);
    const month  = numOfCard.substring(10,12);
    const day  = numOfCard.substring(12,14);

    const dayError = day < 0 || day > 31;
    const monthError = month < 0 || month > 12;
    const yearError = (currentYear-year) < 3 || (currentYear-year) > 120;
    
    if (dayError || monthError || yearError) {
      return false;
    }

    return true;
  };

  /**
   * 验证是否满18岁
   * @param {*} numOfCard 身份证号
   */
  checkCardAdult(numOfCard) {
    const year = Number(numOfCard.substring(6,10));
    const month  = Number(numOfCard.substring(10,12));
    const day  = Number(numOfCard.substring(12,14));

    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();

    if (currentYear - year < 18) {
      return false;
    } else if (currentYear - year === 18 && currentMonth < month) {
      return false;
    } else if (currentYear - year === 18 && currentMonth === month && currentDay < day) {
      return false;
    }
    
    return true;
  };

  /**
   * 验证身份证模式
   * @param {*} numOfCard 身份证号
   */
  checkCardParity(numOfCard) {
    if (numOfCard.length === 15) {
      return true;
    }

    const keys = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const vals = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let i = 0;
    let last = 0;

    for(i = 0; i < 17; i++){
      last += numOfCard.substr(i,1) * keys[i];
    }
    const lastchar = vals[last%11];

    if(lastchar == numOfCard.substr(numOfCard.length-1, 1)) {
      return true;
    }

    return false
  };
}

export default Rules.Instance;