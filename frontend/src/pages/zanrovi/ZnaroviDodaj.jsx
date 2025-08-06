import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, } from "react-router-dom";
import { RouteNames } from "../../constants";
import ZanroviService from "../../services/ZanroviService";


export default function ZanroviDodaj(){

    const navigate=useNavigate();

    async function dodaj(zanrovi) {
        const odgovor= await ZanroviService.dodaj(zanrovi);
        navigate(RouteNames.ZANROVI_PREGLED);
      }

     function odradiSubmit(e){
        e.preventDefault();

        let podaci = new FormData(e.target);
        

        dodaj(
            {
             naziv: podaci.get('naziv'),
        }
             
             
        )
     }


      
      return(

         <>
        Dodavanje zanrova
        
        <Form onSubmit={odradiSubmit}>
        

            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required />
            </Form.Group>

          

           


            <hr style={{marginTop: '50px'}} />

            <Row>
                <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
                    <Link to={RouteNames.ZANROVI_PREGLED}
                    className="btn btn-danger">Odustani</Link>
                </Col>
                <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
                    <Button variant="success" type="submit">
                        Dodaj novo
                    </Button>
                </Col>
            </Row>

        </Form>



        

        </>
    
    )
}