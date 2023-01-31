import React from 'react';

function Carro(props) {
  return (
    <div>
      <h2>{props.veiculos[0].nome}</h2>
      <ul>
        <li>Cor: {props.veiculos[0].cor}</li>
        <li>Ano: {props.veiculos[0].ano}</li>
        <li>Flex: {props.veiculos[0].flex ? 'Sim': 'Não'}</li>
      </ul>
      <h2>{props.veiculos[1].nome}</h2>
      <ul>
        <li>Cor: {props.veiculos[1].cor}</li>
        <li>Ano: {props.veiculos[1].ano}</li>
        <li>Flex: {props.veiculos[1].flex ? 'Sim': 'Não'}</li>
      </ul>
      <h2>{props.veiculos[2].nome}</h2>
      <ul>
        <li>Cor: {props.veiculos[2].cor}</li>
        <li>Ano: {props.veiculos[2].ano}</li>
        <li>Flex: {props.veiculos[2].flex ? 'Sim': 'Não'}</li>
      </ul>
      <h2>{props.veiculos[3].nome}</h2>
      <ul>
        <li>Cor: {props.veiculos[3].cor}</li>
        <li>Ano: {props.veiculos[3].ano}</li>
        <li>Flex: {props.veiculos[3].flex ? 'Sim': 'Não'}</li>
      </ul>

    </div>
  );
}

export default Carro;
