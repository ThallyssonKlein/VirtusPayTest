import { create } from 'apisauce';

const API = create({
    baseURL : "http://localhost:8000"
});

export async function FindAll(){
    const result = await API.get('/api/v1/address/');
    if(result.ok){
        return result.data;
    }else{
        return null;
    }
}

export async function DeleteOne(addressId){
    const result = await API.delete('/api/v1/address/' + addressId);
    return result.ok;
}