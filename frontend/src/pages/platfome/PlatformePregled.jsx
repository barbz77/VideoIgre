import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import PlatformeService from "../../services/PlatformeService";
import { Button, Table } from "react-bootstrap";


export default function PlatformePregled(){

const[platforme, setPlatforme]= useState([]);
const navigate = useNavigate();


async function dohvatiPlatforme() {
    const odgovor = await PlatformeService.get()
    setPlatforme(odgovor)
}


useEffect(()=>{
    dohvatiPlatforme();

},[])


     function obrisi(sifra){
        if(!confirm('Sigruno obrisati?')){
            return;
        }
        brisanje(sifra)
     }

     async function brisanje(sifra) {
        const odgovor = await PlatformeService.obrisi(sifra);
        dohvatiPlatforme();
     }

return(
    <>


    <Link
    className="btn btn-success"
    to={RouteNames.PLATFORME_NOVI}>Add new</Link>

    <Table striped bordered hover responsive>
        <thead>
            <tr>
                <th>Name</th>
                
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {platforme && platforme.map((platforma, index)=>(
             <tr key={index}>
                <td>{platforma.naziv}</td>
                

                <td>
                <Button onClick={() => navigate(`/platforme/${platforma.sifra}`)}>

                    Change
                </Button>

                &nbsp;&nbsp;&nbsp;&nbsp;
                   <Button variant="danger" onClick={() => obrisi(platforma.sifra)}>
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