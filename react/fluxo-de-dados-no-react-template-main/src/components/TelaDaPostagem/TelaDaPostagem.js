import React from 'react'
import {ContainerPostagem, Image, Description,Titulo} from './styles'

const TelaDaPostagem = ({inputImage , inputDescription,inputTitulo}) => {
  return (
    <ContainerPostagem>
            <Image src={inputImage} alt='drone view'/>
            <Titulo>{inputTitulo}</Titulo>
            <Description>{inputDescription}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem