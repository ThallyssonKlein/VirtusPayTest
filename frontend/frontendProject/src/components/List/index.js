import React from 'react';
import styles from './table.module.css';
import Tr from './Tr';

export default function List(props){

    return <table className={styles.table}>
            <thead>
                <tr className={styles.tr}>
                    <th className={styles.th}>Endereço</th>
                    <th className={styles.th}>CEP</th>
                    <th className={styles.th}>Deletar</th>
                </tr>
            </thead>
            {
                props.addresses.map(address => <Tr address={address}/>)
            }
        </table>
}