import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import ZanroviService from "../../services/ZanroviService";
import { Button, Table } from "react-bootstrap";


export default function ZanroviPregled(){

const[zanrovi, setZanrovi]= useState([]);
const navigate = useNavigate();


async function dohvatiZanrove() {
    const odgovor = await ZanroviService.get()
    setZanrovi(odgovor)
}


useEffect(()=>{
    dohvatiZanrove();

},[])


     function obrisi(sifra){
        if(!confirm('Sigruno obrisati?')){
            return;
        }
        brisanje(sifra)
     }

     async function brisanje(sifra) {
        const odgovor = await ZanroviService.obrisi(sifra);
        dohvatiZanrove();
     }

return(
    <>


    <Link
    className="btn btn-success"
    to={RouteNames.ZANROVI_NOVI}>Add new</Link>

    <Table striped bordered hover responsive>
        <thead>
            <tr>
                <th>Name</th>
                
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {zanrovi && zanrovi.map((zanr, index)=>(
             <tr key={index}>
                <td>{zanr.naziv}</td>
                

                <td>
                <Button onClick={()=> navigate(`/zanrovi/${zanr.sifra}`)}>
                    Change
                </Button>

                &nbsp;&nbsp;&nbsp;&nbsp;
                   <Button variant="danger" onClick={() => obrisi(zanr.sifra)}>
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