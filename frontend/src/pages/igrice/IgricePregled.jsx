import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import IgriceService from "../../services/IgriceService";
import { NumericFormat } from "react-number-format";
import moment from "moment";
import { Link } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function IgricePregled(){

const[igrice, setIgrice]= useState([]);


  async function dohvatiIgrice(){
   const odgovor = await IgriceService.get()
    setIgrice(odgovor)
   
  }


useEffect(()=>{
    dohvatiIgrice();
},[])

    function obrisi(sifra){
        if(!confirm('Sigurno obrisati?')){
            return;
        }
        brisanje(sifra)
    }

    async function brisanje(sifra) {
        const odgovor = await SmjerService.obrisi(sifra);
        dohvatiSmjerove();
    }



    return(
        <>
            Tablični Pregled Igrica

        <Link 
        className="btn btn-success"
        to={RouteNames.IGRICE_NOVI}>Dodavanje novih stvari</Link>

        <Table striped bordered hover responsive>
           <thead>
               <tr>
                <th>Naziv</th>
                <th>Ocjena</th>
                <th>Godinja Izdanja</th>
                
                <th>Akcija</th>
               </tr>
           </thead>
           <tbody>
            {igrice && igrice.map((igrica, index)=>(
                <tr key={index}>
                    <td>{igrica.naziv}</td>
                    <td className="desno">
                        <NumericFormat
                          value={igrica.ocjena}
                          displayType="text"
                          thousandSeparator='.'
                          decimalSeparator=","
                    />
                    </td>
                    <td>{moment.utc(igrica.datumIzdanja).format('DD-MM-YYYY')}</td>
                   <td>
                   <Button variant="danger" onClick={() => obrisi(igrica.sifra)}>
                   Obriši
                   </Button>
                   </td>

                    
                </tr>

            ))}
           </tbody>
        </Table>

        </>
    )
}

