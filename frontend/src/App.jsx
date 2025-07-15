import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavbarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Pocetna from './pages/Pocetna'
import IgricePregled from './pages/igrice/IgricePregled'
import IgriceDodaj from './pages/igrice/IgriceDodaj'



function App() {


  return (
    <Container>
      <NavbarEdunova />

<Container className="app">
      <Routes>
        <Route path={RouteNames.HOME}element={<Pocetna />}/>
        <Route path={RouteNames.IGRICE_PREGLED}element={<IgricePregled />}/>
        <Route path={RouteNames.IGRICE_NOVI}element={<IgriceDodaj/>}/>
      </Routes>
      </Container>
      <hr />
      &copy;Game Recommender
    </Container>
  )
}

export default App
