import { create } from 'apisauce';

const API = create({
    baseURL : "http://localhost:8000"
});

export async function DeleteOne(cep){
    const result = await API.delete('/api/v1/address/' + cep + "/");
    return result.ok;
}

export async function FindOne(cep){
    const result = await API.get('/api/v1/address/' + cep + '/');
    if(result.ok){
        return result.data;
    }else{
        return null;
    }
}

export async function New(cep, address, contactId){
    const result = await API.post('/api/v1/address/', {cep, address, contact : {
        id : contactId
    }});
    
    return result.ok;
}