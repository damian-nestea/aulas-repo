import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({ nome , btnMudaNome }) {
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={btnMudaNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo="Corsa"
          cor="branco"
          ano={2020}
          adicionadoPor="Labenu"
          flex
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
