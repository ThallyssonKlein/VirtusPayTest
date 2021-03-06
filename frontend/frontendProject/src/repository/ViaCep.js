import { create } from 'apisauce';

const API = create({
    baseURL : "http://viacep.com.br/ws"
});

export async function search(cep){
    return await API.get("/" + cep + "/json");
}