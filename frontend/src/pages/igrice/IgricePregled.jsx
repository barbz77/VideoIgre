import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import IgriceService from "../../services/IgriceService";


export default function IGRICE_PREGLED(){

const[igrice, setigrice]= useState([]);


  async function dohvatiIgrice(){
   const odgovor = await IGRICE_PREGLED()
    setigrice(odgovor)
   
  }


useEffect(()=>{
    dohvatiIgrice();
},[])


    return(
        <>
            Pregled Igrica
        <Table striped bordered hover responsive>
           <thead>
               <tr>
                <th>/Naziv</th>
                <th>Ocjena</th>
                <th>Godinja Izdanja</th>
               </tr>
           </thead>
           <tbody>
            {igrice && igrice.map((igrica, index)=>(
                <tr key={index}>
                    <td>igrica.naziv</td>
                    <td>igrica.ocjena</td>
                    <td>igrica.godinaIzdanja</td>
                </tr>

            ))}
           </tbody>
        </Table>

        </>
    )
}

