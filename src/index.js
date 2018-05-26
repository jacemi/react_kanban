import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const boundCompose = compose.bind(null, applyMiddleware(thunk));
const store = createStore(reducers);


ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
