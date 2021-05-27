import React from 'react'
import { Divider, Header, Image, Segment } from 'semantic-ui-react'
import Logo from '../../atoms/logo/LogoFluid'

const DividerContentFloated = () => (
    <Segment>
        <Header as='h2' floated='left'>
            Quienes somos
            <Logo />
        </Header>
    Somos un equipo de voluntarios que tiene como objetivo empoderar a la ciudadanía con herramientas e información sobre nuestros funcionarios públicos.
    </Segment>
)

export default DividerContentFloated