import React from 'react'
import {Menu, Container} from 'semantic-ui-react';

export const NavBar = () => {
    return (
        <Menu inverted>
            <Container>
            <Menu.Item name="StarWars API" />
            <Menu.Item name= "Personajes" /> 
            <Menu.Item name="Planetas" />
            </Container>
        </Menu>
    )
}
