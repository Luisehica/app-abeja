import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import DropdownClearable from '../../molecules/Dropdown/DropdownClearable'
// import SearchCat from '../../molecules/Search/Search.jsx'

export default class MenuSearch extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable borderless >
                <Menu.Item>
                    <DropdownClearable />
                </Menu.Item>
                <Menu.Menu >
                    <Menu.Item>
                        {/* <SearchCat /> */}
                    </Menu.Item>

                </Menu.Menu>

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