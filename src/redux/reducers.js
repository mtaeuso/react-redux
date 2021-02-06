
import { combineReducers } from 'redux';
import carrinho from './carrinhoReducer';
import produtos from './produtosReducers';

export default combineReducers({
  carrinho,
  produtos,
});