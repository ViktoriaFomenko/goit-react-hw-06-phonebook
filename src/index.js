import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { store, persistore } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider prop store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
