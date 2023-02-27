import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin.js";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro.js";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js"
import React from 'react'

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [page, setPage] = React.useState("login");

  const changePage = (novaTela) => {
    setPage(novaTela);
  }

  const renderPage = () =>{
    switch(page){
      case "login":
        return <TelaLogin changePage={changePage} />
      case "cadastro":
        return <TelaCadastro changePage={changePage} />
      case "usuarioCadastrado":
        return <TelaUsuarioCadastrado changePage={changePage} />
      default:
        return <TelaLogin changePage={changePage} />
    }
  }


  return (
      <MainContainer >
        <GlobalStyled />
        {renderPage()} 
      </MainContainer>
    );

  
}

export default App;