import { HttpService } from "./HttpService"

async function get() {
    return await HttpService.get('/Platforma')
    .then((odgovor)=>{

        return odgovor.data
    })
    .catch((e)=>{})
    
}

async function getBySifra(sifra) {
    return await HttpService.get('/Platforma/' + sifra)
    .then((odgovor)=>{
        return odgovor.data
    })
    .catch((e)=>{})
}

async function dodaj(novo) {
    return await HttpService.post('/Platforma',novo)
    .then((odgovor)=>{return true})
    .catch((e)=>{return false})
}

async function obrisi(sifra) {
    return await HttpService.delete('/Platforma/' + sifra)
    .then((odgovor)=>{return true})
    .catch((e)=>{return false})
}

async function promjeni(sifra,platforma) {
    return await HttpService.put('/Platforma/'+sifra, platforma)
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