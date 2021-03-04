import React, { useState, useContext } from 'react';
import styles from '../table.module.css';
import { GrClose } from 'react-icons/gr';

import { DeleteOne } from '../../../service/Address';

import { ErrorMessageContext } from '../../../contexts/ErrorMessageContext';

export default function Td({id,
                            address,
                            attr}){
    const [deleted, setDeleted] = useState(false);
    const { addAMessage } = useContext(ErrorMessageContext);

    async function Delete(){
        const result = await DeleteOne(id);
        if(result){
            setDeleted(true);
        }else{
            addAMessage("Falha ao deletar");
        }
    }

    if(deleted){
        return <div></div>
    }else{
        if(attr === "address" || attr === "cep"){
            return <td className={styles.td}>
                    <div style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between'}}>
                        {address[attr]}
                    </div>
                </td>
        }else{
            return <td className={styles.td}>
                    <button style={{marginLeft : 10}} onClick={_ => Delete()}><GrClose/></button>
                </td>
        }
    }
}