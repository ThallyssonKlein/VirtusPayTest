import { create } from 'apisauce';

const API = create({
    baseURL : "http://localhost:8000"
});

export async function FindAll(){
    const result = await API.get('/api/v1/contact/');
    if(result.ok){
        return result.data;
    }else{
        return null;
    }
}

export async function DeleteOne(contactId){
    const result = await API.delete('/api/v1/contact/' + contactId);
    return result.ok;
}

export async function New(name, phone, email){
    const result = await API.post('/api/v1/contact/', {name, phone, email});
    return result.ok;
}