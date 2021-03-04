import { FindAll as FindAllR,
         DeleteOne as DeleteOneR } from '../repository/Contact';

export async function FindAll(){
    return await FindAllR();
}

export async function DeleteOne(dragonId){
    const result = await DeleteOneR(dragonId);
    return result;
}