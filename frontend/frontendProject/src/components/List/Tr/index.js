import React from 'react';

import styles from '../table.module.css';
import Td from '../Td';

export default function Tr({address}){
    return <tr className={styles.tr} key={address.id}>
                    <Td attr={"address"}
                        address={address}/>
                    <Td attr={"cep"}
                        address={address}/>
                    <Td attr={"delete"} id={address.id}/>
        </tr>
}