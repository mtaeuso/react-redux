import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Carrinho() {
  const dispatch = useDispatch();

  const carrinho = useSelector((state) =>
    state.carrinho.filter((item) => item.qty > 0)
  );

  const totalQty = useSelector((state) =>
    state.carrinho.reduce((acc, cur) => acc + cur.qty, 0)
  );

  const totalPrice = useSelector((state) =>
    state.carrinho.reduce((acc, cur) => acc + cur.price * cur.qty, 0)
  );

  return (
    <div style={panelStyle}>
      <h2>
        Carrinho ({totalQty})
        <button onClick={() => dispatch({ type: 'LIMPAR_CARRINHO' })}>
          LIMPAR CARRINHO
        </button>
      </h2>

      <table>
        <tbody>
          {carrinho.map((item) => (
            <tr key={item.id}>
              <td style={{ width: '170px' }}>{item.name}</td>
              <td style={{ width: '90px' }}>
                $ {(item.price * item.qty).toFixed(2)}
              </td>
              <td style={{ width: '80px', textAlign: 'center' }}>
                <button
                  onClick={() =>
                    dispatch({ type: 'REMOVE_DO_CARRINHO', id: item.id })
                  }
                >
                  -
                </button>

                {item.qty}

                <button
                  onClick={() => dispatch({ type: 'ADICIONAR_AO_CARRINHO', id: item.id })}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Total: $ {totalPrice.toFixed(2)}</h4>
    </div>
  );
}

const panelStyle = {
  height: '100vh',
  width: '50vw',
  background: '#EEAD2D',
  padding: '10px',
};