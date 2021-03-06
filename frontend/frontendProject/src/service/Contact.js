import { FindAll as FindAllR,
         DeleteOne as DeleteOneR,
         New as NewR,
         EditAttribute as EditAttributeR,
         FindOne as FindOneR } from '../repository/Contact';

import { ValidateName, ValidateEmail } from './validator/Contact';

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
    return await DeleteOneR(contactId);;
}

export async function New(name, phone, email){
    const result = await NewR(name, phone, email);
    return result;
}

export async function EditAttribute(contactId, attrName, newValue){
    switch(attrName){
        case "name":
            if(!ValidateName(newValue)){
                alert("Preencha o nome!");
                return null;
            }
            break;
        case "email":
            if(!ValidateEmail(newValue)){
                alert("Digite um email valido para salvar! (exemplo@exemplo.com)");
                return null;
            }
            break;
    }
    const result = await EditAttributeR(contactId, attrName, newValue);
    return result;
}

export async function FindOne(contactId){
    const result = await FindOneR(contactId);
    result.createdAt = new Date(result.createdAt).toLocaleString();
    return result;
}