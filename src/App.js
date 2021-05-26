import './App.css';
import 'semantic-ui-css/semantic.min.css'
import MenuExampleStackable from './modules/app-abeja/organisms/Menu/Menu';
import { Divider, Header, Search } from 'semantic-ui-react';
import MenuSearch from './modules/app-abeja/organisms/Menu/SearchMenu'
import Cards from './modules/app-abeja/organisms/Card/Cards';
import Accordion from './modules/app-abeja/organisms/Accordion/Accordion';
import Logo from './modules/app-abeja/atoms/logo/LogoFluid';

function App() {
  return (
    <div className="App">
      <MenuExampleStackable />
      <Header as='h3'>Ciudadanos informados generando cambio</Header>
      <Header as='h5'>Conocer e informarte sobre el desempeño de tus congresistas puede parecer dificil. Tranquilo, nosotros te lo facilitamos.</Header>
      <Header as='h4'>Ver promedio de asistencias</Header>
      <MenuSearch />
      <Cards
        category="Representates a la Camara"
        state="Cundinamarca"
      />
      <Divider />
      <Logo />
      <Accordion />

    </div >
  );
}

export default App;
