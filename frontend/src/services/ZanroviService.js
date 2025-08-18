import { HttpService } from "./HttpService";

async function get() {
    return await HttpService.get('/Zanr')
    .then((odgovor)=>{

        return odgovor.data
    })
    .catch((e)=>{})
    
}

async function getBySifra(sifra) {
     return await HttpService.get('/Zanr/'+ sifra)
    .then((odgovor)=>{

        return odgovor.data
    })
    .catch((e)=>{})
    
}

async function dodaj(novo) {
    return await HttpService.post('/Zanr', novo)
    .then((odgovor)=>{return true})
    .catch((e)=>{return false})
    
}

async function obrisi(sifra) {
    return await HttpService.delete('/Zanr/' + sifra)
    .then((odgovor)=>{return true})
    .catch((e)=>{return false})
}

async function promjeni(sifra,zanr) {
    return await HttpService.put('/Zanr/' + sifra, zanr)
    .then((odgovor)=>{return true})
    .catch((e)=>{return false})
}

export default{
    get,
    getBySifra,
    dodaj,
    obrisi,
    promjeni,
   
}

