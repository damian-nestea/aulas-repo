import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [inputImage, setInputImage] = React.useState("");
  const [inputDescription, setInputDescription] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");

  const onChangeImage = (e) => {
    setInputImage(e.target.value);
  }

  const onChangeDescription = (e) => {
    setInputDescription(e.target.value);
  }

  const onChangeTitulo = (e) => {
    setInputTitulo(e.target.value);
  }
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro
            inputImage = {inputImage}
            inputDescription = {inputDescription}
            inputTitulo = {inputTitulo}
            onChangeImage =  {onChangeImage}
            onChangeDescription = {onChangeDescription}
            onChangeTitulo = {onChangeTitulo}
          />
        </aside>
        <TelaDaPostagem 
          inputImage = {inputImage} 
          inputDescription = {inputDescription}  
          inputTitulo = {inputTitulo}  
        />
      </Container>
    </>
  );
}

export default App;
