import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [buscaId , setBuscaId] = React.useState('');
  const [buscaNome , setBuscaNome] = React.useState('');
  const [ordenar , setOrdenar] = React.useState('');
  const [tipo , setTipo] =  React.useState('');

  const onChangeId = (event) =>{
    setBuscaId(event.target.value)
  }

  const onChangeNome = (event) =>{
    setBuscaNome(event.target.value)
  }

  const onChangeOrdenar = (event) =>{
    console.log(event.target.value)
    setOrdenar(event.target.value)
  }

  const onChangeTipo = (event) =>{
    console.log(event.target.value)
    setTipo(event.target.value)
  }

  return (
    <>
      <GlobalStyle />
      <Header
        buscaId = {buscaId}
        onChangeId = {onChangeId}
        buscaNome = {buscaNome}
        onChangeNome = {onChangeNome}
        onChangeOrdenar = {onChangeOrdenar}
        onChangeTipo = {onChangeTipo}
      />
      <CardsContainer>
        {pokemons
          .filter((pokemon)=>{
            return buscaId ? pokemon.id === buscaId : pokemon;
          })
          .filter((pokemon)=>{
            return buscaNome ? pokemon.name.english.toLowerCase().includes(buscaNome.toLowerCase())  : pokemon;
          })
          .filter((pokemon)=>{
            return tipo ? pokemon.type.includes(tipo)  : pokemon;
          })
          .sort((a,b)=>{
            if(ordenar === "crescente"){
              return a.id - b.id
            } else if(ordenar === "decrescente"){
              return b.id - a.id        
            } else if(ordenar === "crescenteAlfabeto"){
              if (a.name.english < b.name.english) {
                return -1;
              }
              if (a.name.english > b.name.english) {
                return 1;
              }
              return 0;
            } else if(ordenar === "decrescenteAlfabeto"){
              if (a.name.english > b.name.english) {
                return -1;
              }
              if (a.name.english < b.name.english) {
                return 1;
              }
              return 0;    
            }
          })
          .map((pokemon) => {
            return <PokemonCard
            cardColor={getColors(pokemon.type[0])}
            key={pokemon.id}
            pokemon={pokemon}
          />
          })
        }
      </CardsContainer>
    </>
  );
}

export default App;
