import { CarroContainer , CarroCaracteristicas , CarroTitulo ,CarroBotaoComprar, CarroImagem} from "./styled"

export function Carro(props) {
  console.log(props.imagemCarro);
    return (
      <CarroContainer>
        <CarroImagem  src={props.imagemCarro}/>
        <CarroTitulo>Meu Carro</CarroTitulo>
        <CarroCaracteristicas>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
          <CarroBotaoComprar>Comprar</CarroBotaoComprar>
        </CarroCaracteristicas>
      </CarroContainer>
    );
  }
  
