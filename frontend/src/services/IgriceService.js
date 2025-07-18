import { HttpService } from "./HttpService"

async function get(){
    return await HttpService.get('/Igrica')
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

export default{
    get,
    dodaj
}