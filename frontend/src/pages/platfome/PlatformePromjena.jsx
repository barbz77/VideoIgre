import { Button, Col, Row } from "react-bootstrap";
import { Form, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import PlatformeService from "../../services/PlatformeService";

export default function PlatformePromjena(){

    const navigate=useNavigate();
    const params= useParams();


    async function promjena(sifra, platforma) {
        const odgovor = await PlatformeService.promjeni(sifra, platforma);
        navigate(RouteNames.PLATFORME_PREGLED);
        
    }
    


function odradiSubmit(e){
    e.preventDefault();

    let podaci = new FormData(e.target);


    promjena(
        params.sifra,
        {
            naziv: podaci.get('naziv')
        }
    )

}


return(

<>
Promjena platforme

<Form onSubmit={odradiSubmit}>

<Form.Group controlId="naziv">
    <Form.Label>Naziv</Form.Label>
    <Form.Control type="text" name="naziv" required
    defaultValue={platforma.naziv}/>
</Form.Group>

<hr style={{marginTop: '50px'}}/>

        <Row>
            <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
            <Link to={RouteNames.PLATFORME_PREGLED}
            className="btn btn-danger">Odustani</Link>
            </Col>
             <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
                    <Button variant="success" type="submit">
                        Promjeni
                    </Button>
                </Col>
        </Row>

        </Form>

</>



)


}