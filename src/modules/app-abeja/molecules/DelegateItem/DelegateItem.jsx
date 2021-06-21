import React from 'react';
import { Item, Icon } from 'semantic-ui-react';

import './DelegateItem.scss';

const DelegateItem = ({ className, img, name, politicalParty, attendance, excused_absenteeism, unexcused_absenteeism }) => (
    <Item className={className}>
        <Item.Image circular size='tiny' src={img}/>

        <Item.Content verticalAlign='middle'>
            <Item.Header>
                <h2 className="item__name">{name}</h2>
            </Item.Header>
            <Item.Meta>
                <h3 className="item__political-party">{politicalParty}</h3>
            </Item.Meta>
            <Item.Extra>
                <Icon color='green' name='history'/>
                <h4 className="item__attribute">Asistencia:</h4> { attendance } <br/>
                <Icon color='yellow' name='calendar alternate outline'/>
                <h4 className="item__attribute">Ausencia Injustificada:</h4> { unexcused_absenteeism } <br/>
                <Icon color='orange' name='calendar alternate' />
                <h4 className="item__attribute">Ausencia Justificada:</h4> { excused_absenteeism}  <br/>
            </Item.Extra>
        </Item.Content>
    </Item>
)

export default DelegateItem;
