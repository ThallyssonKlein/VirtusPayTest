import React, { useState } from 'react';
import styles from './newaddressmodal.module.css';

import { search } from '../../service/ViaCep';
import { New } from '../../service/Address';

export default function NewAddressModal(props){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");

    async function save(){
        const resultFromCepSearch = await search(cep);
        if(!resultFromCepSearch){
            alert("CEP invalido");
            return null;
        }

        const resultFromNewAddress = await New(cep, endereco, props.contactId);
    }

    function closeModal(){
        props.setNewAddressModalVisible(false);
    }

    if(props.isVisible){
        return <div className={styles.container}>
                <Modal isOpen={props.isVisible}
                        contentLabel="Criar um novo endereço"
                        closeTimeoutMS={150}>
                        <div className={styles.top}>
                            <button onClick={_ => closeModal()}>X</button>
                        </div>
                        <input type="text"
                            placeholder="Digite o CEP do endereço"
                            value={cep}
                            onChange={e => setCep(e.target.value)}/>
                        <input type="text"
                            placeholder="Digite o endereço"
                            value={endereco}
                            onChange={e => setEndereco(e.target.value)}/>
                        <button className={styles.button}
                                onClick={_ => save()}>SALVAR</button>
                    </Modal>
        </div>
    }else{
        return <div></div>
    }
}