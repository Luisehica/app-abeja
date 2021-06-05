import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CardM = ({ className, img, title, subtitle, description, attendance, excused_absenteeism, unexcused_absenteeism, icon, icon2, votes_qty }) => (
    <Card className={className}>
        <Card.Content>
            <Image src={img} wrapped floated="right"
                size="mini"
                circular />
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span className='date'>{subtitle}</span>
            </Card.Meta>
            <Card.Description>
                {description}
            </Card.Description>

        </Card.Content>
        <Card.Content extra textAlign="left">
            <a>
                <Icon name={icon2} color='green' />
        Votos <strong>{votes_qty}</strong>
            </a> , <a>
                <Icon name={icon2} color='green' />
        Asistencia <strong>{attendance}</strong>
            </a> ,  <a>
                <Icon name={icon2} color='orange' />
        Ausencia Justificada <strong>{excused_absenteeism}</strong>
            </a> , <a>
                <Icon name={icon2} color='red' />
        Ausencia Injustificada <strong>{unexcused_absenteeism}</strong>
            </a>

        </Card.Content>
    </Card>
)

export default CardM;