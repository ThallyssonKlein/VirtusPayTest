import { FindAll as FindAllR,
         EditAttribute as EditAttributeR,
         DeleteOne as DeleteOneR,
         FindOne as FindOneR,
         New as NewR} from '../repository/Dragon';

export async function EditAttribute(dragonId, attrName, newValue){
    const result = await EditAttributeR(dragonId, attrName, newValue);
    return result;
}

export async function FindOne(dragonId){
    const result = await FindOneR(dragonId);
    result.createdAt = new Date(result.createdAt).toLocaleString();
    return result;
}

export async function New(name, type){
    const result = await NewR(name, type);
    return result;
}