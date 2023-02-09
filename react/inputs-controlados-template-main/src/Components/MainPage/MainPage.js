import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome , setNome] = useState("");
  const [idade , setIdade] = useState("");
  const [email , setEmail] = useState("");
  const [senha , setSenha] = useState("");

  const onChangeNome = (event) => {
    setNome(event.target.value);
  }

  const onChangeIdade = (event) => {
    setIdade(event.target.value);
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  }

  const btnEnviar = () =>{
    alert(`Nome: ${nome}. Idade: ${idade}. E-mail: ${email}. Senha: ${senha}`);
    setNome("");
    setIdade("");
    setEmail("");
    setSenha("");
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input required value = {nome}  onChange = {onChangeNome}/>
        </label>
        <label>
          Idade:
          <Input value = {idade} onChange = {onChangeIdade}/>
        </label>
        <label>
          E-mail:
          <Input required type = {'email'} placeholder={'Digite o seu email'} value = {email} onChange = {onChangeEmail}/>
        </label>
        <label>
          Senha
          <Input required type = {'password'} value = {senha} onChange = {onChangeSenha}/>
        </label>  
        <button type='submit' onClick={btnEnviar}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
