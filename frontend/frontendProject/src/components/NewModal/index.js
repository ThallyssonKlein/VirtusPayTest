import React, { useState } from 'react';
import styles from './newmodal.module.css';
import Modal from 'react-modal';

import { New } from '../../service/Contact';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function NewModal(props){
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);  
  
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const closeModal = _ => {
        props.setNewVisible(false);
    }

    const save = async _ => {
        if(pattern.test(email)){
            const result = await New(name, phone, email);
            if(!result){
                alert("Erro ao salvar!");
            }
            closeModal();
            window.location.reload();
        }else{
            alert("Digite um email valido para salvar!");
        }
    }

    return(
        <Modal isOpen={props.newVisible}
               contentLabel="Novo Dragão"
               closeTimeoutMS={150}>
                    <div className={styles.row}>
                        <button onClick={_ => closeModal()}>X</button>
                    </div>
                     <div className={styles.container}>
                        <input className={styles.input}
                               placeholder="Nome do contato"
                               value={name}
                               onChange={e => setName(e.target.value)}/>
                        <div style={{marginBottom : 10}}>
                            <PhoneInput country={'br'}
                                        value={phone}
                                        onChange={value => setPhone(value)}
                            />
                        </div>
                        <input className={styles.input}
                               placeholder="Email do contato"
                               value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <div className={styles.row}>
                            <button className={styles.button}
                                    onClick={_ => save()}>SALVAR</button>
                        </div>
                    </div>
        </Modal>
    );
}