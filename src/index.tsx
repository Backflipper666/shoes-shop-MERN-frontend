import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { CartProvider } from 'react-use-cart';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//'wrap the application with the CartProvider component so that the useCart hook can access the cart state. '
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        {' '}
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);
