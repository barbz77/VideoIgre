import { HttpService } from "./HttpService"

async function get(){
    return await HttpService.get('/Igrica')
    .then((odgovor)=>{
        
        return odgovor.data
    })
    .catch((e)=>{})
}
async function obrisi(sifra) {
    return await HttpService.post('/Igrica'+sifra)
    .then((odgovor)=>{return true})
    .catch((e)=>{return false})
}

async function getBySifra(sifra) {
    return await HttpService.get('/Igrica/' + sifra)
    .then((odgovor)=>{
        return odgovor.data
    })
    .catch((e)=>{})
}


async function dodaj(novo) {
    return await HttpService.post('/Igrica',novo)
    .then((odgovor)=>{return true})
    .catch((e)=>{return false})
}
async function promjeni(sifra, igrica) {
    return await HttpService.post('/Igrica'+sifra, igrica)
    .then((odgovor)=>{return true})
    .catch((e)=>{return false})
}

export default{
    get,
    getBySifra,
    dodaj,
    obrisi,
    promjeni
}