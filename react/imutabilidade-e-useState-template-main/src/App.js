import { useState } from 'react'
import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'

export default function App() {

/*   let nome = 'Labenu' */

  function btnMudaNome() {
    setNome('Damián')
  } 

  const [nome,setNome] = useState('Labenu');
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} btnMudaNome = {btnMudaNome} />
    </div>
  )
}
