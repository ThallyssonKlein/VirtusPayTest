import { FindAll as FindAllR } from '../repository/Contact';

export async function FindAll(){
    return await FindAllR();
}