import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import ZanroviService from "../../services/ZanroviService";
import {useNavigate } from "react-router-dom";



export default function ZanroviPregled(){

const[zanrovi, setZanrovi]= useState([]);
const navigate = useNavigate();


  async function dohvatiZanrovi(){
   const odgovor = await ZanroviService.get()
    setZanrovi(odgovor)
   
  }


useEffect(()=>{
    dohvatiZanrovi();
},[])

    function obrisi(sifra){
        if(!confirm('Sigurno obrisati?')){
            return;
        }
        brisanje(sifra)
    }

    async function brisanje(sifra) {
        const odgovor = await ZanroviService.obrisi(sifra);
        dohvatiZanrovi();
    }
     return(
            <>
                
    
          
           
            
    
            <Table striped bordered hover responsive>
               <thead>
                   <tr>
                    <th>Naziv</th>
                    <th>Akcija</th>
                   </tr>
               </thead>
               <tbody>
                {zanrovi && zanrovi.map((zanr, index)=>(
                    <tr key={index}>
                        <td>{zanr.naziv}</td>
                       
                      
                       <td>
    
                       <Button onClick={() => navigate(`/zanrovi/${zanr.sifra}`)}>
                       Promjena
                       </Button>
    
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <Button variant="danger" onClick={() => obrisi(zanr.sifra)}>
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