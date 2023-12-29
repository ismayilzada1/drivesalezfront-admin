import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'
let persistor = persistStore(store);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                  <BrowserRouter>
                      <App />
                  </BrowserRouter>
              </PersistGate>
          </Provider>
      </QueryClientProvider>
  </React.StrictMode>
);
