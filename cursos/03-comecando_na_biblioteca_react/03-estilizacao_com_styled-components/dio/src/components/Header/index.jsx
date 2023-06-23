import React from 'react'
import logo from '../../assets/logo-dio.png'
import { 
    BuscarIputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
 } from "./styles";
import { Button } from '../Button';

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='logo da DIO' />
                <BuscarIputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarIputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'></MenuRight>
                <Button title={"Entrar"} />
                <Button title={"Cadastrar"} />
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
