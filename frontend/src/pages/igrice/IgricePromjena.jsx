import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams, } from "react-router-dom";
import { RouteNames } from "../../constants";
import IgriceService from "../../services/IgriceService";
import moment from "moment";
import { useEffect, useState } from "react";


export default function IgricePromjena(){

    const navigate=useNavigate();
    const params= useParams();
    const [igrica, setIgrica]= useState({})
    

    async function ucitajIgricu() {
        const odgovor= await IgriceService.getBySifra(params.sifra)
        odgovor.godinaIzdanja= moment.utc(odgovor.godinaIzdanja).format('YYYY-MM-DD')
        setIgrica(odgovor)
    }

    useEffect(()=>{  
       ucitajIgricu()
    },[])

    async function promjena(sifra, igrica){
        const odgovor= await IgriceService.promjeni(sifra,igrica);
        navigate(RouteNames.IGRICE_PREGLED);
      }

     function odradiSubmit(e){
        e.preventDefault();

        let podaci = new FormData(e.target);
        

        promjena(
            params.sifra,
            {
             naziv: podaci.get('naziv'),
             ocjena: parseFloat(podaci.get('ocjena')),
             godinaIzdanja: moment(podaci.get('godinaIzdanja')).toISOString(),
        }
        
             
             
        )
     }


      
      return(

         <>
        Promjena igrica
        
        <Form onSubmit={odradiSubmit}>
        

            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required 
                defaultValue={igrica.naziv}/>
            </Form.Group>

            <Form.Group controlId="ocjena">
                <Form.Label>Ocjena</Form.Label>
                <Form.Control type="number" name="ocjena" step={0.01}
                defaultValue={igrica.ocjena} />
            </Form.Group>

            <Form.Group controlId="godinaIzdanja">
                <Form.Label>Godina Izdanja</Form.Label>
                <Form.Control type="date" name="godinaIzdanja"
                defaultValue={igrica.godinaIzdanja} />
            </Form.Group>


            <hr style={{marginTop: '50px'}} />

            <Row>
                <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
                    <Link to={RouteNames.IGRICE_PREGLED}
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