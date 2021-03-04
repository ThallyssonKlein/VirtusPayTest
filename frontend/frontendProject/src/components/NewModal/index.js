import React, { useState } from 'react';
import styles from './newmodal.module.css';
import Modal from 'react-modal';

import { New } from '../../service/Contact';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { ValidateName, ValidateEmail } from '../../service/validator/Contact';

export default function NewModal(props){
  
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const closeModal = _ => {
        props.setNewVisible(false);
    }

    const save = async _ => {
        if(ValidateName(name) && ValidateEmail(email)){
            const result = await New(name, phone, email);
            if(!result){
                alert("Erro ao salvar!");
            }
            closeModal();
            window.location.reload();
        }else{
            if(!ValidateName(name)){
                alert("Preencha o nome!");
            }else{
                alert("Digite um email valido para salvar! (exemplo@exemplo.com)");
            }
        }
    }

    return(
        <Modal isOpen={props.newVisible}
               contentLabel="Novo Contato"
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