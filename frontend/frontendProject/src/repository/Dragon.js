import { create } from 'apisauce';

const API = create({
    baseURL : "http://5c4b2a47aa8ee500142b4887.mockapi.io"
});

export async function New(name, type){
    const result = await API.post('/api/v1/dragon', {name, type});
    return result.ok;
}

export async function FindOne(dragonId){
    const result = await API.get('/api/v1/dragon/' + dragonId);
    if(result.ok){
        return result.data;
    }else{
        return null;
    }
}

export async function EditAttribute(dragonId, attrName, newValue){
    let obj = {}
    obj[attrName] = newValue
    const result = await API.put('/api/v1/dragon/' + dragonId, obj);
    return result.ok;
}