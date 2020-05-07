import renderApp from './renderApp';
import App from './app';

class viewHelper {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new viewHelper();
    }

    return this._instance;
  }

  // 渲染App
  renderApp() {
    renderApp(App);
  }


}

export default viewHelper;

