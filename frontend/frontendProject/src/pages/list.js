import React, { useEffect, useState, useContext } from 'react';

import { FindAll } from '../service/Contact';

import Table from '../components/Table';

import { ErrorMessageContext } from '../contexts/ErrorMessageContext';

import NavBar from '../components/NavBar';
import ButtonsBar from '../components/ButtonsBar';

import DetailModal from '../components/DetailModal';
import NewModal from '../components/NewModal';
import Head from 'next/head';

function List(){
    const {messages, addAMessage} = useContext(ErrorMessageContext);
    const [contacts, setContacts] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState(false);
    const [newVisible, setNewVisible] = useState(false);

    useEffect(async _ => {
        const Contacts = await FindAll();
        if(Contacts){
            setContacts(Contacts);
        }else{
            addAMessage("Falha na comunicação com a API");
        }
    }, []);

    return(
        <div style={{padding : 0, margin : 0, display : "flex", flex : 1, flexDirection : "column"}}>
                <Head>
                    <title>Agenda de contatos</title>
                </Head>
                <NavBar/>
                <DetailModal detailsVisible={detailsVisible} setDetailsVisible={setDetailsVisible}/>
                <NewModal newVisible={newVisible} setNewVisible={setNewVisible}/>
                <section>
                    {messages}
                   

                   <ButtonsBar setDetailsVisible={setDetailsVisible} setNewVisible={setNewVisible}/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        {(contacts) ? <Table contacts={contacts}/> : "Carregando Contatos...."}
                    </div>
                </section>
            </div>
    );
}

export default List;