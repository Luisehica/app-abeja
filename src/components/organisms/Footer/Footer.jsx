import React from 'react';
import ItemSimple from '../../molecules/Item/Item.jsx';

import "./Footer.scss";

const Footer = () => {

    return (
        <React.Fragment>
            <hr className='hr'/>
            <ItemSimple
            imagen="https://picsum.photos/200/100"
            titulo="Quienes somos" 
            descripcion="Somos un equipo de voluntarios que tiene como objetivo empoderar a la ciudadanía con herramientas e información sobre nuestros funcionarios públicos."
            />
        </React.Fragment>
    )
}

export default Footer;
