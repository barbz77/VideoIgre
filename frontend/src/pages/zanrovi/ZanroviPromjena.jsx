import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams, } from "react-router-dom";
import { RouteNames } from "../../constants";
import { useEffect, useState } from "react";
import ZanroviService from "../../services/ZanroviService";


export default function ZanroviPromjena(){

    const navigate=useNavigate();
    const params= useParams();
    const [zanr, setZanr]= useState({})
    

    async function ucitajZanr() {
        const odgovor= await ZanroviService.getBySifra(params.sifra)
        setZanr(odgovor)
    }

    useEffect(()=>{  
       ucitajZanr()
    },[])

    async function promjena(sifra, zanr){
        const odgovor= await ZanroviService.promjeni(sifra,zanr);
        navigate(RouteNames.ZANROVI_PREGLED);
      }

     function odradiSubmit(e){
        e.preventDefault();

        let podaci = new FormData(e.target);
        

        promjena(
            params.sifra,
            {
             naziv: podaci.get('naziv'),
        }
        
             
             
        )
     }


      
      return(

         <>
        Promjena zanr
        
        <Form onSubmit={odradiSubmit}>
        

            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required 
                defaultValue={zanr.naziv}/>
            </Form.Group>


            <hr style={{marginTop: '50px'}} />

            <Row>
                <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
                    <Link to={RouteNames.ZANROVI_PREGLED}
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