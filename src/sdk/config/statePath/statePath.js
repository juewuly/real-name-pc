import base from './base';

export default class statePath extends base {
  constructor() {
    super();
  }

  getPathByFeature(feature) {
    return [...this.rootPath, feature];
  }

  getRootPath() {
    return this.rootPath;
  }
}