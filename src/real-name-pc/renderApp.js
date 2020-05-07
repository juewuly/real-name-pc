import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from 'src/common/store';

const storeInstance = store.Instance;

const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={storeInstance}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('real-name-pc')
  );

  if (module.hot) {
    module.hot.accept('./app', () => {
      const App = require('./app').default;
      renderApp(App);
    });
  }
}

export default renderApp;