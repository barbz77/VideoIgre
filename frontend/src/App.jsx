import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavbarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Pocetna from './pages/Pocetna'
import IgricePregled from './pages/igrice/IgricePregled'
import IgriceDodaj from './pages/igrice/IgriceDodaj'
import IgricePromjena from './pages/igrice/IgricePromjena'
import IgriceNasumicno from './pages/igrice/IgriceNasumicno'
import ZanroviPregled from './pages/zanrovi/ZanroviPregled'
import ZanroviPromjena from './pages/zanrovi/ZanroviPromjena'
import ZanroviDodaj from './pages/zanrovi/ZanroviDodaj'
import PlatformePregled from './pages/platfome/PlatformePregled'
import PlatformeDodaj from './pages/platfome/PlatformeDodaj'
import PlatformePromjena from './pages/platfome/PlatformePromjena'



function App() {


  return (
    <Container>
      <NavbarEdunova />

<Container className="app">
      <Routes>
        <Route path={RouteNames.HOME}element={<Pocetna />}/>

        <Route path={RouteNames.IGRICE_PREGLED}element={<IgricePregled />}/>
        <Route path={RouteNames.IGRICE_NOVI}element={<IgriceDodaj/>}/>
        <Route path={RouteNames.IGRICE_PROMJENA}element={<IgricePromjena/>}/>
        <Route path={RouteNames.IGRICE_NASUMICNO}element={<IgriceNasumicno/>}/>
        <Route path={RouteNames.ZANROVI_PREGLED}element={<ZanroviPregled/>}/>
        <Route path={RouteNames.ZANROVI_NOVI}element={<ZanroviDodaj/>}/>
        <Route path={RouteNames.ZANROVI_PROMJENA}element={<ZanroviPromjena/>}/>
        <Route path={RouteNames.PLATFORME_PREGLED}element={<PlatformePregled/>}/>
        <Route path={RouteNames.PLATFORME_NOVI}element={<PlatformeDodaj/>}/>
        <Route path={RouteNames.PLATFORME_PROMJENA}element={<PlatformePromjena/>}/>
       
       



      </Routes>
      </Container>
      <hr />
      &copy;Game Recommender
    </Container>
  )
}

export default App
