import React from "react";
import { Container } from "./styles";

const Header = ({onChangeId , buscaId , onChangeNome , buscaNome , onChangeOrdenar , onChangeTipo}) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input value={buscaId} onChange={onChangeId} type="number"  placeholder="Buscar por id"/>
      <input value={buscaNome} onChange={onChangeNome} type="text" placeholder="Buscar por nome" />
      <select onChange={onChangeOrdenar}>
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
        <option value="crescenteAlfabeto">Crescente A-Z</option>
        <option value="decrescenteAlfabeto">Decrescente Z-A</option>
      </select>
      <select onChange={onChangeTipo} name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
