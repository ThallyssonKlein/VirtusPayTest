import { search as searchR} from '../repository/ViaCep';

export async function search(cep){
    const result = await searchR(cep);

    if(result.data["erro"]){
        return false;
    }else{        
        return true;
    }
}