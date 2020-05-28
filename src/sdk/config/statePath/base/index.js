import { ids } from 'sdk/config';

export default class base {
  constructor() {
    this._rootPath = [ids.rootNodeOfStore];
  }

  get rootPath() {
    return this._rootPath;
  }
}