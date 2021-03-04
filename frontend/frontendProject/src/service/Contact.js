import { FindAll as FindAllR,
         DeleteOne as DeleteOneR,
         New as NewR} from '../repository/Contact';

export async function FindAll(){
    let result = await FindAllR();
    if(result) {
        result = result.map(obj => {
            obj.createdAt = new Date(obj.createdAt).toLocaleString();
            return obj;
        });
    }
    return result;
}

export async function DeleteOne(contactId){
    const result = await DeleteOneR(contactId);
    return result;
}

export async function New(name, phone, email){
    const result = await NewR(name, phone, email);
    return result;
}