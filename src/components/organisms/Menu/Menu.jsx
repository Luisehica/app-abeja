import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';

import "./Menu.scss";

const MainMenu = () => {

    return (
        <Menu stackable borderless={true} fixed="top" className="main-menu">
            <Menu.Menu position='left'>
                <Link to="/home">
                    <Image src="/svg/CO_inspira_logo.svg" size="small"></Image>
                </Link>                
            </Menu.Menu>
        </Menu>
    )
}

export default MainMenu;

/*
<Dropdown item icon='bars' simple>
    <Dropdown.Menu>
    <Dropdown.Header>TOP 10</Dropdown.Header>
    <Dropdown.Item key={1} className="link">
        <Link to="/topTen/assist/best">Mejores asistencias</Link>
    </Dropdown.Item>
    <Dropdown.Item key={2} className="link">
        <Link to="/topTen/assist/worse">Peores asistencias</Link>
    </Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
 */