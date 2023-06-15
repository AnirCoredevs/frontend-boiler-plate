import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import App from './App';
import './index.css';
import store from './store/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { GlobalProvider } from './context/GlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </Provider>
      GlobalProvider
    </SnackbarProvider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
