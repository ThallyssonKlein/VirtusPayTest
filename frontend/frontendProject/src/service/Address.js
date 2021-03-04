import { DeleteOne as DeleteOneR, 
         FindOne,
         New as NewR } from '../repository/Address';

export async function DeleteOne(cep){
    const result = await DeleteOneR(cep);
    return result;
}

export async function New(cep, address, contactId){
    const resultFromSearch = await FindOne(cep);

    if(!resultFromSearch){
        const resultFromSave = await NewR(cep, address, contactId);
        return resultFromSave.data;
    }

    return resultFromSearch;
}