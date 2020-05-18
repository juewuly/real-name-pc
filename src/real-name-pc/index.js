/**
 * author: liuyang9
 * description: PC端实名认证
 */


import realName from './realName';
import lobby from './lobby';

export default class RealNamePc {
  constructor({ type, containerId }) {
    this.init({ type, containerId });
  }

  static Instance({ type, containerId }) {
    if(!this._instance) {
      if (type === 'lobby') {
        this._instance = new lobby({ type, containerId });
      } else {
        this._instance = new realName({ type, containerId });
      }
    }

    return this._instance;
  }
}

