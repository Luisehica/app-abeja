import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardL = ({ img, title, subtitle, description, attendance, excused_absenteeism, unexcused_absenteeism, icon, icon2, votes_qty }) => (
  <Card>
    <Image src={img || 'https://picsum.photos/250/250'} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{subtitle}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra textAlign='left'>
      <a>
        <Icon name={icon2} color='green' />
        Votos <strong>{votes_qty}</strong>
      </a>
    </Card.Content>
    <Card.Content extra textAlign='left'>
      <a>
        <Icon name={icon2} color='green' />
        Asistencia <strong>{attendance}</strong>
      </a>
    </Card.Content>
    <Card.Content extra textAlign='left' >
      <a>
        <Icon name={icon2} color='orange' />
        Ausencia Justificada <strong>{excused_absenteeism}</strong>
      </a>
    </Card.Content>
    <Card.Content extra textAlign='left' >
      <a>
        <Icon name={icon2} color='red' />
        Ausencia Injustificada <strong>{unexcused_absenteeism}</strong>
      </a>
    </Card.Content>
  </Card>
)

export default CardL;