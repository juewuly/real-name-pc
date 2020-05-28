/**
 * @author: liuyang9
 * @description: 日志基类
 */


export default class base {
  constructor(prefix) {
    this._prefix = prefix;
  }

  // 输出日志信息
  log(...rest) {
    console.log(this._prefix, ...rest);
  }

  // 输出异常信息
  error(...rest) {
    console.error(this._prefix, ...rest);
  }
}