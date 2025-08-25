import { Button, Col, Row, Form } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import ZanroviService from "../../services/ZanroviService";
import { RouteNames } from "../../constants";
import { useState, useEffect } from "react";

export default function ZanroviPromjena(){

    const navigate=useNavigate();
    const params= useParams();
    const [zanr, setZanr]= useState({
        naziv: "",
    })

    async function ucitajZanr() {
        const odgovor = await ZanroviService.getBySifra(params.sifra);
        setZanr(odgovor);
    }

      useEffect(() => {
        ucitajZanr();
      }, []);
    

    async function promjena(sifra, zanr) {
        const odgovor= await ZanroviService.promjeni(sifra, zanr);
        navigate(RouteNames.ZANROVI_PREGLED);
        
    }

function odradiSubmit(e){
    e.preventDefault();

    let podaci = new FormData(e.target);


    promjena(
        params.sifra,
        {
            naziv: zanr.naziv,
        }
    );

}


return(

<>
<h2>Change genre</h2>

<Form onSubmit={odradiSubmit}>

<Form.Group controlId="naziv">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="naziv" required
    value={zanr.naziv}
    onChange={(e)=> setZanr({...zanr, naziv: e.target.value})}
        />
</Form.Group>

<hr style={{marginTop: '50px'}}/>

        <Row>
            <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
            <Link to={RouteNames.ZANROVI_PREGLED}
            className="btn btn-danger">
                Quit
            </Link>
            </Col>
             <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
                    <Button variant="success" type="submit">
                        Change
                    </Button>
                </Col>
        </Row>

        </Form>

</>



)


}