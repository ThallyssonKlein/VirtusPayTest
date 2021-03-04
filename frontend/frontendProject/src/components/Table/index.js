import React, { useState } from 'react';
import styles from './table.module.css';
import Tr from './Tr';
import { isMobile } from "react-device-detect";

export default function Table(props){
    const [isInEditMode, setEditMode] = useState(false);
    const [editingContactAttr, setEditingContactAttr] = useState(null);

    window.addEventListener('resize', _ => window.location.reload());

    return <table className={styles.table}>
            <thead>
                <tr className={styles.tr}>
                    <th className={styles.th}>Seletor</th>
                    {!isMobile && <th className={styles.th}>Id</th>}
                    <th className={styles.th}>Nome</th>
                    <th className={styles.th}>Telefone</th>
                    {!isMobile && <th className={styles.th}>Criado Em</th>}
                    <th className={styles.th}>Email</th>
                </tr>
            </thead>
            {
                props.contacts.map(contact => <Tr contact={contact}
                    isInEditMode={isInEditMode}
                    setEditMode={setEditMode}
                    editingContactAttr={editingContactAttr}
                    setEditingContactAttr={setEditingContactAttr}/>)
            }
        </table>
}