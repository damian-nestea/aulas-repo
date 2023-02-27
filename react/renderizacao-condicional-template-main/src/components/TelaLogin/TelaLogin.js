import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin({changePage}) {

  const enviarLogin = () => {
    alert("E-mail não encontrado, será necessário fazer o cadastro!")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>
      <Form>
        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>
        <StyledLabel>Senha:
          <Input type={"password"} />
        </StyledLabel>
        <SendButton onClick={enviarLogin}>Entrar</SendButton>
        <RegisterButton onClick={()=> changePage("cadastro")}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
