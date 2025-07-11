import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavbarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Pocetna from './pages/Pocetna'
import IgricePregled from './pages/igrice/IgricePregled'



function App() {


  return (
    <Container>
      <NavbarEdunova />

      <Routes>
        <Route path={RouteNames.HOME}element={<Pocetna />}/>
        <Route path={RouteNames.IGRICE_PREGLED}element={<IgricePregled />}/>
      </Routes>
      <hr />
      &copy;Edunova
    </Container>
  )
}

export default App
