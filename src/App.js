import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Menu from './modules/app-abeja/organisms/Menu/Menu';
import { Container, Header, Image } from 'semantic-ui-react';
import MenuSearch from './modules/app-abeja/organisms/Menu/SearchMenu'
import Cards from './modules/app-abeja/organisms/Card/Cards';
import ItemSimple from './modules/app-abeja/molecules/Item/Item';
import ItemExampleFloated from './modules/app-abeja/organisms/ItemFloated/ItemFloated';
import Top10 from './modules/app-abeja/pages/Top10';

function App() {
  const src1 = 'https://picsum.photos/1000/250'
  return (
    <div className="App">
      <Container>
        <Menu />
        <Image src={src1} size='massive' centered fluid />
        <Header as='h3'>Ciudadanos informados generando cambio</Header>
        <Header as='h5'>Conocer e informarte sobre el desempeño de tus congresistas puede parecer dificil. Tranquilo, nosotros te lo facilitamos.</Header>

        <Header as='h2'>Top 10 Indicadores</Header>

        <ItemExampleFloated />
        <MenuSearch />
        <br />


        <Cards
          category="Representates a la Camara"
          complement="del Departamento de "
          state="Cundinamarca"
        />
        <ItemSimple
          imagen="https://picsum.photos/200/100"
          titulo="Quienes somos"
          descripcion="Somos un equipo de voluntarios que tiene como objetivo empoderar a la ciudadanía con herramientas e información sobre nuestros funcionarios públicos."

        />
        <br />

        <br />
        <Top10
          categoria="Top 10 Asistencias"
        />
        <Top10
          categoria="Top 10 Indicador X"
        />
        <Top10
          categoria="Top 10 Indicador Z"
        />
      </Container>
    </div >
  );
}

export default App;
