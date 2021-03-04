import React, { useState } from 'react';
import styles from './newaddressmodal.module.css';

import { search } from '../../service/ViaCep';
import { New } from '../../service/Address';

import Modal from 'react-modal';

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
        if(!resultFromNewAddress){
            alert("Falha ao salvar o endereço!");
        }else{
            closeModal();
        }
    }

    function closeModal(){
        props.setNewAddressModalVisible(false);
    }

    if(props.isVisible){
        return <Modal isOpen={props.isVisible}
                        contentLabel="Criar um novo endereço"
                        closeTimeoutMS={150}>
                        <div className={styles.top}>
                            <button onClick={_ => closeModal()}>X</button>
                        </div>
                        <div className={styles.container}>
                            <input type="text"
                                   placeholder="Digite o CEP do endereço"
                                   value={cep}
                                   onChange={e => setCep(e.target.value)}
                                   className={styles.input}/>
                            <input type="text"
                                   placeholder="Digite o endereço"
                                   value={endereco}
                                   onChange={e => setEndereco(e.target.value)}
                                   className={styles.input}/>
                        </div>

                        <div style={{flexDirection: "row", justifyContent: "flex-end"}}>
                            <button className={styles.button}
                                    onClick={_ => save()}>SALVAR</button>
                        </div>
                    </Modal>
    }else{
        return <div></div>
    }
}