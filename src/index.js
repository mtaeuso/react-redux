import React from 'react';
import ReactDOM from 'react-dom';
import Carrinho from './Carrinho';
import store from './redux/store';
import { Provider } from 'react-redux';
import Produtos from './Produtos';

ReactDOM.render(
  <Provider store={store}>
    <div style={{ display: 'flex' }}>
      <Produtos />
      <Carrinho />
    </div>
  </Provider>,
  document.getElementById('root')
);