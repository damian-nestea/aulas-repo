import styled from "styled-components";

export const Botao = styled.button`
  background-color:orange;  
  padding:0.5rem 1rem;
  border:none;
  border-radius:0.5rem;
  :hover{
    background-color:green;
  }
`

export const GaragemContainer = styled.main`
  background-color:lightcoral;
  padding:2rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 2vh 2vw;
`

export const Estacionamento = styled.section`
  display:grid;
  grid-template-columns: repeat(2,1fr);
  gap:5vw;
`