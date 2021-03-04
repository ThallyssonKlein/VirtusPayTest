import React, { useContext, useEffect } from 'react';
import styles from './table.module.css';
import Tr from './Tr';

import { TrListContext } from '../../contexts/TrListContext';

export default function List(props){
    const { addresses } = useContext(TrListContext);

    useEffect(_ => {
        console.log("-----------");
        console.log(typeof addresses);
        console.log(addresses);
    }, [addresses]);

    return <table className={styles.table}>
            <thead>
                <tr className={styles.tr}>
                    <th className={styles.th}>Endereço</th>
                    <th className={styles.th}>CEP</th>
                    <th className={styles.th}>Deletar</th>
                </tr>
            </thead>
            {
                addresses.map(address => <Tr address={address}/>)
            }
        </table>
}