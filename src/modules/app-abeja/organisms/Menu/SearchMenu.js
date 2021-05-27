import React, { Component } from 'react'
import { Icon, Menu, Search } from 'semantic-ui-react'
import Logo from '../../atoms/logo/LogoFluid'
import DropdownClearable from '../../molecules/Dropdown/DropdownClearable'

export default class MenuSearch extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable fluid >
                <Menu.Item>
                    <Search />
                </Menu.Item>
                <Menu.Item>
                    <DropdownClearable />
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