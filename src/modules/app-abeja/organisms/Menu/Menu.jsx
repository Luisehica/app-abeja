import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
//import Logo from '../../atoms/Logo/Logo'

export default class MenuExampleStackable extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable secondary>
                <Menu.Item>
                    <Icon name='bars' />
                </Menu.Item>
                <Menu.Item>
                </Menu.Item>

                {/*  <Menu.Item
                    name='features'
                    active={activeItem === 'features'}
                    onClick={this.handleItemClick}
                >
                    Features
        </Menu.Item> */}
            </Menu>
        )
    }
}
