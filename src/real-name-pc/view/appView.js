import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from 'src/common/store';
import App from '../app';
import { ids } from '../config';

const storeInstance = store.Instance;

class appView {
  constructor() {

  }

  static renderApp() {
    render(
      <AppContainer>
        <Provider store={storeInstance}>
          <App />
        </Provider>
      </AppContainer>,
      document.getElementById(ids.sdkId)
    );
  
    if (module.hot) {
      module.hot.accept('../app', () => {
        const App = require('../app').default;
        renderApp(App);
      });
    }
  }
}

export default appView;