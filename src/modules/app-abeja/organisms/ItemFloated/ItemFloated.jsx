import React from 'react'
import { Button, Item } from 'semantic-ui-react'

import { Link } from 'react-router-dom';

const ItemExampleFloated = () => (
    <Item.Group relaxed>
        <Item key={1}>
            <Item.Image size='small' src='svg/top10-thumbs-up.svg' />
            <Item.Content verticalAlign='middle'>
                <Item.Header>Mejores asistencias 2020</Item.Header>
                <Item.Description>Te listamos en el top los díez mejores congresistas en cuanto a índice de asistencias se refiere.</Item.Description>
                <Item.Extra>
                    <Link to="/topTen/assist/best">
                        <Button color='yellow' floated='right'>Ver Top 10 de mejores asistencias</Button>
                    </Link>
                </Item.Extra>
            </Item.Content>
        </Item>

        <Item key={2}>
            <Item.Image size='small' src='svg/top10-thumbs-down.svg' />
            <Item.Content verticalAlign='middle'>
                <Item.Header>Peores asistencias 2020</Item.Header>
                <Item.Description>Te listamos en el top los díez peores congresistas en cuanto a índice de asistencias se refiere.</Item.Description>
                <Item.Extra>
                    <Link to="/topTen/assist/worse">
                        <Button color='yellow' floated='right'>Ver Top 10 de peores asistencias</Button>
                    </Link>
                </Item.Extra>
            </Item.Content>
        </Item>
    </Item.Group>
)

export default ItemExampleFloated