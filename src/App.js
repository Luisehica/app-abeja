import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Menu from './modules/app-abeja/organisms/Menu/Menu';
import { Container, Divider, Header, Search } from 'semantic-ui-react';
import MenuSearch from './modules/app-abeja/organisms/Menu/SearchMenu'
import Cards from './modules/app-abeja/organisms/Card/Cards';
import Accordion from './modules/app-abeja/organisms/Accordion/Accordion';
import Logo from './modules/app-abeja/atoms/logo/LogoFluid';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header as='h3'>Ciudadanos informados generando cambio</Header>
      <Header as='h5'>Conocer e informarte sobre el desempeño de tus congresistas puede parecer dificil. Tranquilo, nosotros te lo facilitamos.</Header>
      <Header as='h4'>Ver promedio de asistencias</Header>
      <Container>
        <MenuSearch />
        <Cards
          category="Representates a la Camara"
          state="Cundinamarca"
        />
      </Container>
      <Divider />
      <Logo />
      <Accordion />

    </div >
  );
}

export default App;
