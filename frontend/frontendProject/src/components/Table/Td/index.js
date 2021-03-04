import React, { useState, useContext } from 'react';
import styles from '../table.module.css';
import { HiPencilAlt } from 'react-icons/hi';
import { EditAttribute } from '../../../service/Contact';
import { ErrorMessageContext } from '../../../contexts/ErrorMessageContext';

import PhoneInput from 'react-phone-input-2'

export default function Td({isInEditMode,
                            setEditMode,
                            contact,
                            attr,
                            editingContactAndAttr,
                            setEditingContactAndAttr}){
    const [text, setText] = useState(contact[attr]);
    const [tdValue, setTdValue] = useState(contact[attr]);
    const {addAMessage} = useContext(ErrorMessageContext);

    if(isInEditMode && (editingContactAndAttr && editingContactAndAttr.id === contact.id && editingContactAndAttr.attr === attr)){
        if(attr !== "phone"){
            return <input value={text} onChange={e => setText(e.target.value)} onKeyDown={async e => {
                if(e.key === 'Enter'){
                    const result = await EditAttribute(contact.id, attr, text);
                    setEditMode(false);
                    setEditingContactAndAttr({});
                    if(!result){
                        addAMessage("Falha ao salvar");
                    }else{
                        setTdValue(text);
                    }
                }
            }}/> 
        }else{
            return <PhoneInput country={'br'}
                               value={text}
                               onChange={value => setText(value)}
                               onKeyDown={async e => {
                                if(e.key === 'Enter'){
                                    const result = await EditAttribute(contact.id, attr, text);
                                    setEditMode(false);
                                    setEditingContactAndAttr({});
                                    if(!result){
                                        addAMessage("Falha ao salvar");
                                    }else{
                                        setTdValue(text);
                                    }
                                }
                              }
                            }/>
        }           
    }else{
        return <td className={styles.td}>
                <div style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between'}}>
                    {tdValue}
                    {(attr !== "createdAt" && attr !== "id") &&  <button onClick={_ => {
                        setEditingContactAndAttr({id : contact.id, attr});
                        setEditMode(true);
                    }}>
                        <HiPencilAlt/>
                    </button>}
                </div>
            </td> 
    }
}