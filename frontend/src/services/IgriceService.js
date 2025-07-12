import { HttpService } from "./HttpService"

async function get(){
    return await HttpService.get('/Igrica')
    .then((odgovor)=>{
        //console.log(odgovor.data)
        return odgovor.data
    })
    .catch((e)=>{})
}

export default{
    get
}