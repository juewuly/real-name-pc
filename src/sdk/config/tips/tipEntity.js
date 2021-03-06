/**
 * @author: liuyang9
 * @description: 防沉迷提示信息实体
 */

export default class tipEntity {
  constructor({ className, title, subTitle, content }) {
    this._className = className;
    this._title = title;
    this._subTitle = subTitle;
    this._content = content;
  }

  get className() {
    return this._className;
  }

  get title() {
    return this._title;
  }

  get subTitle() {
    return this._subTitle;
  }

  get content() {
    return this._content;
  }
}