import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../constants';

export default function NavbarEdunova() {


const navigate = useNavigate()



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='ruka' onClick={()=>navigate(RouteNames.HOME)} >Game Recommender</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Lists" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>navigate(RouteNames.IGRICE_PREGLED)}>Games</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate(RouteNames.ZANROVI_PREGLED)}>Genres</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate(RouteNames.PLATFORME_PREGLED)}>Platforms</NavDropdown.Item>
             
                
            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

