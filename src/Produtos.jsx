import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Produtos() {
  const dispatch = useDispatch();
  const produtos = useSelector((state) => state.produtos);

  return (
    <div style={panelStyle}>
      <h2>Produtos</h2>

      <div style={cardsDivStyle}>
        {produtos.map((item) => (
          <div key={item.id} style={cardStyle}>
            <p>{item.name}</p>
            <p>R$ {item.price.toFixed(2)}</p>
            <button
              onClick={() => dispatch({ type: 'ADICIONAR_AO_CARRINHO', id: item.id })}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const panelStyle = {
  height: '100vh',
  width: '50vw',
  background: '#672369',
  padding: '10px',
};

const cardStyle = {
  background: '#80cbc4',
  width: '120px',
  height: '100px',
  fontWeight: 'bold',
  borderRadius: '15px',
  margin: '5px',
  padding: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',
  textAlign: 'center',
};

const cardsDivStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};