import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      {/* <h1>Garagem do {props.nomePrimeiraGaragem}</h1>
      <button onClick={()=>props.apresentaGaragem(props.nomePrimeiraGaragem)}>Botão entrada</button>
      <Carro motos={props.motos}/> */}

      <h1>Garagem do {props.nomeGaragem}</h1>
      <button onClick={()=>props.apresentaGaragem(props.nomeGaragem)}>Botão entrada</button>
      <Carro veiculos={props.veiculos}/>
    </div>
  );
}

export default Garagem;
