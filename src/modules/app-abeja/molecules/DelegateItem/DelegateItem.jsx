import React from 'react';
import { Item } from 'semantic-ui-react';

const DelegateItem = ({ className, img, name, politicalParty, attendance, excused_absenteeism, unexcused_absenteeism }) => (
    <Item className={className}>
        <Item.Image circular size='tiny' src={img}/>

        <Item.Content verticalAlign='middle'>
            <Item.Header>{name}</Item.Header>
            <Item.Meta>
                <span>{politicalParty}</span>
            </Item.Meta>
        </Item.Content>
    </Item>
)

export default DelegateItem;
