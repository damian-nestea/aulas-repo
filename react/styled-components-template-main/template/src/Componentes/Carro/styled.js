import styled from "styled-components";

export const CarroContainer = styled.main`
  background-color:lightgreen;
  padding:2rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 2vh;
  border-radius:0.5rem;
`

export const CarroCaracteristicas = styled.ul`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 0.5vh;
  list-style:none;
`

export const CarroTitulo = styled.h2`
  text-transform:uppercase;
  list-style:none;
`

export const CarroBotaoComprar = styled.a`
  background-color:lightyellow;
  text-decoration:none;
  padding:0.5rem 1.5rem;
  border-radius:0.2rem;
  margin-top:1rem;
`

export const CarroImagem = styled.img`
  width:80%;
  border-radius:0.2rem;
`