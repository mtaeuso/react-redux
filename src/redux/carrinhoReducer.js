import todosProdutos from './todosProdutos';

const initialState = todosProdutos.map((item) => ({ ...item, qty: 0 }));

export default function carrinho(state = initialState, action) {
  switch (action.type) {
    case 'ADICIONAR_AO_CARRINHO':
      return state.map((item) => {
        item.id === action.id && item.qty++;
        return item;
      });

    case 'REMOVER_DO_CARRINHO':
      return state.map((item) => {
        item.id === action.id && item.qty--;
        return item;
      });

    case 'LIMPAR_CARRINHO':
      return state.map((item) => {
        item.qty = 0;
        return item;
      });

    default:
      return state;
  }
}