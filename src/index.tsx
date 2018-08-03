import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

// import initializeTheme from './styles/app-theme';
import store from './store/store';

import './index.scss';
import { PersonsRoot } from './routes/routes';

function start(): void {

  const reduxStore = store;

  const Root = () => (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact={true} component={PersonsRoot} />
        </Switch>        
      </BrowserRouter>
    </Provider>
  );

  ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
  registerServiceWorker();
}

// Start the application
start();
