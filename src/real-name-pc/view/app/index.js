import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from 'src/common/store';
import { ids } from 'sdk/config';
import App from './Home';

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
      module.hot.accept('./Home', () => {
        const App = require('./Home').default;
        renderApp(App);
      });
    }
  }
}

export default appView;