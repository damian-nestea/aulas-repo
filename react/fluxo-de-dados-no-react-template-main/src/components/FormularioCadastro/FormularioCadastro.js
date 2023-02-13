import React from 'react'

import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = ({inputImage,inputDescription,inputTitulo,onChangeImage,onChangeDescription,onChangeTitulo}) => {
  


  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value = {inputImage} onChange = {onChangeImage}/>
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Título:
          <Input id="titulo" value= {inputTitulo} onChange = {onChangeTitulo} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value= {inputDescription} onChange = {onChangeDescription} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro