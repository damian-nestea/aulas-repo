import { useState } from 'react'
import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({ nome , setNome }) {

  const [automovel,setAutomovel] = useState({
    cor: "Preto",
    ano: 2023,
    flex: true,
    adicionado: 'Ozemela',
    modelo: 'Toro'
  });

  const carro1 = {
    cor: "Branco",
    ano:2000,
    flex:false,
    adicionado:"Damián",
    modelo:"Astra"
  }

  const carro2 = {
    cor: "Verde",
    ano:1980,
    flex:false,
    adicionado:"Ramiro",
    modelo:"Chevette"
  }

  const carro3 = {
    cor: "Azul",
    ano:2015,
    flex:true,
    adicionado:"Brenda",
    modelo:"Hilux"
  }

  function btnMudaCarro() {
    setAutomovel(carro2)
  }

  function btnMudaNome() {
    const novoNome = prompt('Qual o seu nome?')
    setNome(novoNome)
  } 
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={btnMudaNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          btnMudaCarro = {btnMudaCarro}
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionado}
          flex = {automovel.flex}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
