import { HttpService } from "./HttpService"

async function get(){
    return await HttpService.get('/Igrice')
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return odgovor.data
    })
    .catch((e)=>{})
}

export default{
    get
}