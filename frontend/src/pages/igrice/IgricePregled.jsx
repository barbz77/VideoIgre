import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import IgriceService from "../../services/IgriceService";
import { NumericFormat } from "react-number-format";
import moment from "moment";


export default function IgricePregled(){

const[igrice, setIgrice]= useState([]);


  async function dohvatiIgrice(){
   const odgovor = await IgriceService.get()
    setIgrice(odgovor)
   
  }


useEffect(()=>{
    dohvatiIgrice();
},[])


    return(
        <>
            Tablični Pregled Igrica
        <Table striped bordered hover responsive>
           <thead>
               <tr>
                <th>Naziv</th>
                <th>Ocjena</th>
                <th>Godinja Izdanja</th>
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
                </tr>

            ))}
           </tbody>
        </Table>

        </>
    )
}

