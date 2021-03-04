import { create } from 'apisauce';

const API = create({
    baseURL : "http://5c4b2a47aa8ee500142b4887.mockapi.io"
});

export async function FindOne(dragonId){
    const result = await API.get('/api/v1/dragon/' + dragonId);
    if(result.ok){
        return result.data;
    }else{
        return null;
    }
}