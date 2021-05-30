import React from 'react'
import { Button, Image, Item } from 'semantic-ui-react'

const ItemSimple = ({ imagen, titulo, descripcion }) => (
    <Item.Group relaxed>
        <Item>
            <Item.Image size='small'
                src={imagen || 'https://react.semantic-ui.com/images/wireframe/image.png'} />

            <Item.Content verticalAlign='middle'>
                <Item.Header>{titulo || ""}</Item.Header>
                <Item.Description>{descripcion || ""}</Item.Description>
            </Item.Content>
        </Item>

    </Item.Group>
)

export default ItemSimple
