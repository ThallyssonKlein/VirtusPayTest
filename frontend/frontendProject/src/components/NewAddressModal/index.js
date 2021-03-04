import React, { useState, useContext } from 'react';
import styles from './newaddressmodal.module.css';

import { search } from '../../service/ViaCep';
import { New } from '../../service/Address';

import Modal from 'react-modal';

import { TrListContext } from '../../contexts/TrListContext';

import InputMask from 'react-input-mask';

export default function NewAddressModal(props){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const { addresses, setAddresses } = useContext(TrListContext);

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
            setAddresses([...addresses, resultFromNewAddress]);
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
                        <div className={styles.row}>
                            <button onClick={_ => closeModal()}>X</button>
                        </div>
                        <div className={styles.container}>
                            <InputMask placeholder="Digite o CEP do endereço"
                                       value={cep}
                                       onChange={e => setCep(e.target.value)}
                                       mask="99999999"
                                       className={styles.input}/>
                            <input type="text"
                                   placeholder="Digite o endereço"
                                   value={endereco}
                                   onChange={e => setEndereco(e.target.value)}
                                   className={styles.input}/>
                        </div>

                        <div className={styles.row}>
                            <button className={styles.button}
                                    onClick={_ => save()}>SALVAR</button>
                        </div>
                    </Modal>
    }else{
        return <div></div>
    }
}