import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nomePrimeiraGaragem = "Jair Damián";
  const nomeSegundaGaragem = 'Ozemela';
  
  const apresentaGaragem = (nomeDaGaragem) => {
    alert(`Boas vindas à garagem de ${nomeDaGaragem}!!!`);
  }

  const carros = [{
    nome:'Gol',
    cor:'Preto',
    ano:2010,
    flex:true
  },
  {
    nome:'Chevrolet',
    cor:'Branco',
    ano:2018,
    flex:false
  },
  {
    nome:'Ecosport',
    cor:'Azul',
    ano:2007,
    flex:true
  },
  {
    nome:'Ferrari',
    cor:'Vermelho',
    ano:2020,
    flex:false
  }];

  const motos = [{
    nome:'Factor 125',
    cor:'Preto',
    ano:2011,
    flex:false
  },
  {
    nome:'Fazer 250',
    cor:'Branco',
    ano:2019,
    flex:true
  },
  {
    nome:'Harley Davidson',
    cor:'Verde',
    ano:2017,
    flex:false
  },
  {
    nome:'BMW',
    cor:'Laranja',
    ano:2023,
    flex:false
  }];

  return (
    <div>
      <Garagem 
        nomeGaragem = {nomePrimeiraGaragem} 
        apresentaGaragem = {apresentaGaragem}
        veiculos = {motos} />

      <Garagem 
        nomeGaragem = {nomeSegundaGaragem} 
        apresentaGaragem = {apresentaGaragem}
        veiculos = {carros} />
    </div>
  );
}
