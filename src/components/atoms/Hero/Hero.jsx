import React from "react";

import { Header } from 'semantic-ui-react';


import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/img/palacio_justicia.png)" }}>
        <div className="hero__content">
        <Header as='h3'>Ciudadanos informados generando cambio</Header>
        <Header as='h5'>Conocer e informarte sobre el desempeño de tus congresistas puede parecer dificil. Tranquilo, nosotros te lo facilitamos.</Header>
        </div>
    </div>
  );
};

export default Hero;
