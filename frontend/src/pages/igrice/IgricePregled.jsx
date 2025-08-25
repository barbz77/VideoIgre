import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import IgriceService from "../../services/IgriceService";
import { NumericFormat } from "react-number-format";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function IgricePregled(){

const[igrice, setIgrice]= useState([]);
const navigate = useNavigate();


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
        const odgovor = await IgriceService.obrisi(sifra);
        dohvatiIgrice();
    }



    return(
        <>
            

        <Link 
        className="btn btn-success"
        to={RouteNames.IGRICE_NOVI}>Add new</Link>

        <Table striped bordered hover responsive>
           <thead>
               <tr>
                <th>Name</th>
                <th>Rating (metacritic)</th>
                <th>Release Date</th>
                
                <th>Options</th>
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
                    <td>{moment.utc(igrica.godinaIzdanja).format('DD-MM-YYYY')}</td>
                   <td>

                   <Button onClick={() => navigate(`/igrice/${igrica.sifra}`)}>
                   Change
                   </Button>

                   &nbsp;&nbsp;&nbsp;&nbsp;
                   <Button variant="danger" onClick={() => obrisi(igrica.sifra)}>
                   Delete
                   </Button>
                   </td>

                    
                </tr>

            ))}
           </tbody>
        </Table>

        </>
    )
}

