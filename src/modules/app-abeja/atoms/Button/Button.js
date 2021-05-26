import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleIcon = (props) => (
    <Button icon>
        <Icon name={ props.name}/>
    </Button>
)

export default ButtonExampleIcon