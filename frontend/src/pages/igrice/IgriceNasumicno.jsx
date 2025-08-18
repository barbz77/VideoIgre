import { useEffect, useState } from "react";
import IgriceService from "../../services/IgriceService";
import { useNavigate } from "react-router-dom";


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


return(
    <>
    <Link 
        className="btn btn-success"
        to={RouteNames.IGRICE_NASUMICNO}>Add new</Link>

        <Table striped bordered hover responsive>
           <thead>
               <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Release Date</th>
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
                              <td></td>
               </tr>

            ))}
           </tbody>
        </Table>

        </>
    )
}