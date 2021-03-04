import React, { useContext } from 'react';

import { TrContext } from '../../../contexts/TrContext';
import styles from '../table.module.css';
import Td from '../Td';
import { isMobile } from "react-device-detect";

export default function Tr({contact, isInEditMode, setEditMode, editingContactAndAttr, setEditingContactAndAttr}){
    const { selecteds, setSelecteds, deleteds} = useContext(TrContext);

    if(deleteds[contact.id]){
        return <div></div>
    }else{
        return <tr className={(!selecteds[contact.id]) ? styles.tr : styles.selectedTr} key={contact.id}>
            <td className={styles.td}>
                <input type="checkbox"
                       checked={selecteds[contact.id]}
                       onChange={e => {
                                    let obj = {...selecteds};
                                    if(e.target.checked){
                                        obj[contact.id] = e.target.checked;
                                    }else{
                                        delete obj[contact.id];
                                    }
                                    setSelecteds(obj);
                            }
                        }/>
            </td>
            {!isMobile && <Td isInEditMode={isInEditMode}
                setEditMode={setEditMode}
                editingContactAndAttr={editingContactAndAttr}
                setEditingContactAndAttr={setEditingContactAndAttr}
                attr={"id"}
                contact={contact}/>}
            <Td isInEditMode={isInEditMode}
                setEditMode={setEditMode}
                editingContactAndAttr={editingContactAndAttr}
                setEditingContactAndAttr={setEditingContactAndAttr}
                attr={"name"}
                contact={contact}/>
            <Td isInEditMode={isInEditMode}
                setEditMode={setEditMode}
                editingContactAndAttr={editingContactAndAttr}
                setEditingContactAndAttr={setEditingContactAndAttr}
                attr={"phone"}
                contact={contact}/>
            {!isMobile && <Td isInEditMode={isInEditMode}
                setEditMode={setEditMode}
                editingContactAndAttr={editingContactAndAttr}
                setEditingContactAndAttr={setEditingContactAndAttr}
                attr={"createdAt"}
                contact={contact}/>}
            <Td isInEditMode={isInEditMode}
                setEditMode={setEditMode}
                editingContactAndAttr={editingContactAndAttr}
                setEditingContactAndAttr={setEditingContactAndAttr}
                attr={"email"}
                contact={contact}/>
        </tr>
    }
}