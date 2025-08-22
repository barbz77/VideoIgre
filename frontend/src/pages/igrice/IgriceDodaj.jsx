import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, } from "react-router-dom";
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
        
        let ocjena = parseFloat(podaci.get('ocjena'));
// kontrola na strani JS -> nije best practice
        if(ocjena<0 || ocjena>99.9){
            alert('Ocjena ne može bit manja od 0 i veća od 99,9')
            return
        }

        dodaj(
            {
             naziv: podaci.get('naziv'),
             ocjena: ocjena,
             godinaIzdanja: moment.utc(podaci.get('godinaIzdanja')),
        }
             
             
        )
     }


      
      return(

         <>
        Adding games
        
        <Form onSubmit={odradiSubmit}>
        

            <Form.Group controlId="naziv">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="naziv" required />
            </Form.Group>

            <Form.Group controlId="ocjena">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" name="ocjena" step={0.01} />
            </Form.Group>

            <Form.Group controlId="godinaIzdanja">
                <Form.Label>Release Date</Form.Label>
                <Form.Control type="date" name="godinaIzdanja" />
            </Form.Group>


            <hr style={{marginTop: '50px'}} />

            <Row>
                <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
                    <Link to={RouteNames.IGRICE_PREGLED}
                    className="btn btn-danger">Quit</Link>
                </Col>
                <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
                    <Button variant="success" type="submit">
                        Add new
                    </Button>
                </Col>
            </Row>

        </Form>



        

        </>
    
    )
}