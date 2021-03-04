import React, { useState, useContext } from 'react';

import { TrContext } from '../../contexts/TrContext';

import Modal from 'react-modal';

import styles from './detailmodal.module.css';

import List from '../List';

import NewAddressModal from '../NewAddressModal';

export default function DetailModal(props){
    const [detalhes, setDetalhes] = useState(null);
    const { viewSelectedOne } = useContext(TrContext);
    const [newAddressModalVisible, setNewAddressModalVisible] = useState(false);

    const afterOpenModal = async _ => {
        const result = await viewSelectedOne();
        setDetalhes(result);
    }

    const closeModal = _ => {
        props.setDetailsVisible(false);
    }

    return <div>
            <Modal  isOpen={props.detailsVisible}
                    onAfterOpen={afterOpenModal}
                    contentLabel="Detalhes do Contato"
                    closeTimeoutMS={150}>

                            {(detalhes) ? <div className={styles.container}>
                                <div className={styles.top}>
                                    <button onClick={_ => closeModal()}>X</button>
                                </div>
                                <p><b>Id:</b> {detalhes.id}</p>
                                <p><b>Nome:</b> {detalhes.name}</p>
                                <p><b>Telefone:</b> {detalhes.phone}</p>
                                <p><b>Criado Em:</b> {detalhes.createdAt}</p>
                                <p><b>Email:</b> {detalhes.email}</p>

                                <hr/>

                                <List addresses={detalhes.addresses}/>

                                <div style={{flexDirection: "row"}}>
                                    <button className={styles.button}
                                            onClick={_ => setNewAddressModalVisible(true)}>ADICIONAR</button>
                                </div>
                            </div> : "Carregando detalhes..."}        
            </Modal>
            <NewAddressModal isVisible={newAddressModalVisible}
                             setNewAddressModalVisible={setNewAddressModalVisible}
                             contactId={detalhes.id}/>
    </div>
}