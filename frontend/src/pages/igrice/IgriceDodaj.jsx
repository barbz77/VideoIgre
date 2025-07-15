import { Button, Col, Row } from "react-bootstrap";
import { Form, Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import IgriceService from "../../services/IgriceService";
import moment from "moment";


export default function IgriceDodaj(){

    const navigate=useNavigate();

    async function dodaj(igre) {
        const odgovor= await IgriceService.dodaj(igre);
        navigate(RouteNames.IGRICE_PREGLED);
      }

     function odradiSubmit(e){
        e.preventDefault();

        let podaci = new FormData(e.target);

        dodaj(
            {
             naziv: podaci.get('naziv'),
             ocjena: parseFloat(podaci.get('ocjena')),
             godinaIzdanja: moment.utc(podaci.get('godinaIzdanja'))
        }
             
             
        )
     }


      
      return(

         <>
        Dodavanje novog
        
        <Form onSubmit={odradiSubmit}>
        

            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required />
            </Form.Group>

            <Form.Group controlId="ocjena">
                <Form.Label>Ocjena</Form.Label>
                <Form.Control type="number" name="ocjena" step={0.01} />
            </Form.Group>

            <Form.Group controlId="godinaIzdanja">
                <Form.Label>Godina Izdanja</Form.Label>
                <Form.Control type="date" name="godinaIzdanja" />
            </Form.Group>


            <hr style={{marginTop: '50px'}} />

            <Row>
                <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
                    <Link to={RouteNames.IGRICE_PREGLED}
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